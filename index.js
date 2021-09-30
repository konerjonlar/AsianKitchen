import { menu } from "./app.js";
//kategori listesini tutan bir array oluşturuyoruz
let categoryList = ["All"];
for (let i of menu) {
  //aynı kategori ismi varsa dışlamamızı sağlayan blok
  if (categoryList.indexOf(i.category) === -1) {
    categoryList.push(i.category);
  }
}
//sayfanın üstündeki butonları oluşturma
let btn = document.createElement("button");
//class isimlerini projenin kaynak dosyasından aldım
btn.classList.add("btn", "btn-outline-dark", "btn-item");
//herhangi bir node'u klonlamak için 

for (let categoryName of categoryList) { 
  const text = document.createTextNode(categoryName);
  //klonu değilde butonu direk ekleyince önceki textler yan yana yazıyor AllKorea... gibi oluyor
  //daha iyi anlamak için aşağıdaki let btnClone satırını fordöngüsünün üstüne alabilirsiniz
  //Önemli bir not bir eleman klonlarsanız eventHandler'ı varsa yok oluyor
  let btnClone = btn.cloneNode(true);
  btnClone.appendChild(text);
  //butona tıklanma olayı atıyoruz
  btnClone.onclick = () => {
    //temiz kod yazmak için fonksiyonu dışarıda tanımladım. Kategori ismini parametre olarak almak ilerde yardımcı olacak
    changeList(categoryName);
  };
  document.getElementById("btnDiv").appendChild(btnClone);
}
let menusDiv = document.getElementById("menusDiv");
//butonlara tıkladığımızda bu fonksiyon çalışıyor
function changeList(categoryName) {
  //alttaki kod kategori değiştirilirken sayfadaki önceki menüler sıfırlanması için
  menusDiv.innerHTML = "";
  //kategori ismin All ise tüm menuyü döngüye alıyor
  if (categoryName == "All") {
    for (let data of menu) {
      //kod tekrarını önlemek için 
      listMenu(data);
    }
  }
  else {
  for (let data of menu) {
    //fonksiyona parametre olarak atadığımız kategoriyi burada kullanıyoruz.
    if (data.category == categoryName) {
      listMenu(data);
    }
  }}
}

function listMenu(data) {
    //ilk önce aşağıdaki gibi yazıyordum.Sonra uzayacağını farkedip farklı yol düşündüm aşağıdaki yapı aklıma geldi.
    //özellikle butonlardaki yapıyı değiştirmedim farkı ve pratikliği görülsün diye
    /*
    let imagesDiv = document.createElement("div");
    imagesDiv.classList.add("menu-items","col-lg-6","col-sm-12");
    let img = document.createElement("img");
    img.classList.add("photo");
    img.src = data.img;

    let menuInfo = document.createElement("div");
    menuInfo.classList.add("menu-info")*/
  let innerHtml = `
    <div class="menu-items col-lg-6 col-sm-12">
<img src=${data.img} class="photo">
<div class="menu-info">
  <div class="menu-title">
    <h4>${data.title}</h4>
    <h4 class="price">${data.price}</h4>
  </div>
  <div class="menu-text">
  ${data.desc}
  </div>
</div>
</div>
    `;
  menusDiv.innerHTML += innerHtml;
  
}
