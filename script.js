let URL="http://localhost:3000/data"
    let container=document.getElementById("container")
 
    async function getData(){
        
        try {

            let response= await fetch(`${URL}`)

            let data=await response.json();
            let country=(data)
            displayData(country)
            
        } catch (error) {
            console.log(error)
        }
        
    }

    getData()

    function displayData(arr){
        container.innerHTML="";      
        arr.forEach((ele)=>{

            let div=document.createElement("div")

            let country=document.createElement("h3");
            country.textContent=`Country:${ele.country}`;

            let id=document.createElement("p")
            id.textContent=`ID:${ele.id}`;

            let rank=document.createElement("p");
            rank.textContent=`Rank:${ele.Rank}`;

            let popl=document.createElement("h3");
            popl.textContent=`Popluation:${ele.population}`;

            div.append(country,id, rank,popl);

            container.append(div)
        })
    }


let popluation=document.getElementById("popl")

popluation.addEventListener("input", function(){
    let value=popluation.value
    sortData(value)
})


async function sortData(value){
    try {
        let response = await fetch(`${URL}?_sort=population&_order=${value}`)
        let data=await  response.json();
        displayData(data)
    } catch (error) {
      console.log(error)  
    } 
      
    
}