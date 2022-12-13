

export const createtitle=(text=" ")=>{
    const element= document.createElement("h1")
    element.innerHTML=text
    document.body.appendChild(element)

}

export const createP=(text=" ")=>{
    const element= document.createElement("P")
    element.innerHTML=text
    document.body.appendChild(element)

}


export const createImage=(src)=>{

    const img = document.createElement("img");
    img.src = src;
    document.body.appendChild(img)
}