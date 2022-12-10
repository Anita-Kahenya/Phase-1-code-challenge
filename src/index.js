// let characterDiv=document.getElementById("character-bar")

// let detailedInfoDiv=document.getElementById("detailed-info")

// let formDetails=document.getElementById("votes-form")
// let name=document.getElementById("name")
// let image=document.getElementById("image")
// let form=document.getElementById("votes-form")
// let button=document.getElementById("button")
// let voteElement=document.getElementById("vote-count")


// const renderName=(animalsData)=>{
//     //let spanElement
//     animalsData.forEach(element => {
        
//     //    console.log(element.name)
//    let spanElement=document.createElement("span")
//      spanElement.textContent=element.name
//     characterDiv.appendChild(spanElement)

//     spanElement.addEventListener("click",renderDetails )
//     function renderDetails(event){
//         name.textContent=element.name
//         image.src=element.image
//         voteElement.textContent=addedVotes
//         image.alt=element.name
     
//     }
    
    
   
//     });

//     function renderVotes(event){
//         event.preventDefault()
//         let addedVotes=document.getElementById("votes").value
//         console.log(addedVotes)
//         voteElement.textContent=addedVotes
//     }
//     form.addEventListener("submit", renderVotes)
//     //console.log(spanElement)
 
    
// }


// fetch("http://localhost:3000/characters")
// .then((response)=>response.json())
// .then((data)=>renderName(data))

const baseUrl="http://localhost:3000/characters"
const characterBar=document.querySelector("#character-bar")
