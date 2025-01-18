let Qorzinka_btn = document.getElementById("Qorzinka_btn")
let close_basket =document.getElementById("close_basket")
let modal__basket = document.getElementById("modal_basket")

let add_btn=document.getElementsByClassName("add_btn")
let basket_Ul=document.getElementById("basket_Ul")

for (let i = 0; i < add_btn.length; i=i+1){
    add_btn[i].addEventListener("click", ()=>{
        let product_div=document.createElement("div");
        product_div.setAttribute("class", "product")
        product_div.innerHTML=modal__basket[i];
        basket_Ul.appendChild(product_div)
    })


} 


Qorzinka_btn.addEventListener("click", ()=>{
    modal__basket.setAttribute("id","modal_basket")
})

close_basket.addEventListener("click", ()=>{
    modal__basket.setAttribute("id","modal__none")
})


let Section_Modal=document.getElementById("Modal_header")
let Three_lines=document.getElementById("Header_three_lines")
let Modal_i_back=document.getElementById("Modal_i")

Three_lines.addEventListener("click", ()=>{
    Section_Modal.setAttribute("id","Modal_header")
})

Modal_i_back.addEventListener("click", ()=>{
    Section_Modal.setAttribute("id", "modal_none")
})

let Ul=document.getElementById("Ul")
let li=document.createElement("li")
li.innerText=["Kamronbek ustoz man tushindim", "sdlhgolashdgjk"]
Ul.appendChild(li)






let productlar={
  nomi:"Qatiq",
  narxi:"10.000 so`m",
  rasmi:"https://api.lochin.uz/media/file/image/2020-12/3def724f-b906-45de-bbf3-66bff82737ba.jpg.500x500_q85_crop-scale.jpg",
  malumot:"Juda mazali svejiy haridlar",
  sotib_olish:"Korzinkaga qoshish"
}

let dynamicProduct=document.createElement("div")
dynamicProduct.setAttribute("class", "product")
console.log(dynamicProduct);

let Product_Img=document.createElement("img")
Product_Img.setAttribute("src", "https://api.lochin.uz/media/file/image/2020-12/3def724f-b906-45de-bbf3-66bff82737ba.jpg.500x500_q85_crop-scale.jpg")
console.log(Product_Img);

let Product_name=document.createElement("h4")
Product_name.innerText=productlar.nomi
console.log(Product_name);

let Product_Info=document.createElement("p")
Product_Info.innerText=productlar.malumot

let Product_btn=document.createElement("button")
Product_btn.innerText=productlar.sotib_olish

dynamicProduct.appendChild(Product_Img)
dynamicProduct.appendChild(Product_name)
dynamicProduct.appendChild(Product_Info)
dynamicProduct.appendChild(Product_btn)

Ul.appendChild(dynamicProduct)



