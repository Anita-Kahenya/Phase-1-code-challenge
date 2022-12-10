
document.addEventListener("DOMContentLoaded",() => {
    fetchingData();
});

//Creating the variables that are going to be in use 
const baseUrl = "http://localhost:3000/characters"
const characterBar = document.getElementById("character-bar");
const characterName = document.getElementById("name");
const characterImage = document.getElementById("image");
const characterVoteCount = document.getElementById("vote-count")
const voteForm = document.getElementById("votes-form")

// Hoisting the function that will be used to fetch the data 
function fetchingData(){
    fetch(baseUrl)
    .then((response)=>response.json())
    .then((data)=>{
        // console.log(data)
        createCharacters(data)
    })
}
// creating the function that will create the span element 
function createCharacters(data){
    data.map((data)=>{
        const createSpan=document.createElement("span")
        createSpan.innerText = data.name

  
        characterBar.appendChild(createSpan)
        createSpan.addEventListener("click", () =>{
            characterName.textContent = data.name;
            characterImage.setAttribute("src", data.image);
            characterVoteCount.textContent = data.votes;
        })
  
    })
}

// adding an event listener for the votes button 
voteForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    
    const freshVotes=parseInt(event.target.votes.value)
    
    let currentVotes=parseInt(characterVoteCount.textContent)
    let finalVotes= (currentVotes+=freshVotes)
    characterVoteCount.textContent=finalVotes

    
})


//Bonus Deliverables
const resetBtn = document.getElementById("reset-btn")
