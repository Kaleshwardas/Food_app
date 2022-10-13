


let getData =async (url) =>{
   
    let res = await fetch(url)
    let data =await res.json()
   // console.log(data.meals)
    return data.meals
}

let append =(data,container)=>{
    data.forEach((el)=>{

        let box=document.createElement("div")

        let img=document.createElement("img")
        img.src=el.strMealThumb
        
        let h3=document.createElement("h3")
        h3.innerText=el.strMeal

        
        // let p2=document.createElement("p")
        // p2.innerText=el.strCategory

        
        // let p3=document.createElement("p")
        // p3.innerText=el.strArea

        

        box.append(img,h3,)
        container.append(box)
    })
}

export {getData,append};