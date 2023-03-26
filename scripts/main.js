const veri = 
[
    { name: "ömer", surname: "ocak", age: 30},
    { name: "ali", surname: "kaya", age: 25}, 
    { name: "murat", surname: "ışık", age: 27}, 
    { name: "mehmet", surname: "dursun", age: 14} 
]


// yaşa gore sıralama işlemleri
document.querySelector('#sortByAge').addEventListener('click', function() {
// function scope
veri.sort(function(yas1, yas2) { return yas1.age - yas2.age }) // kücükten büyüge dogru sıralayacak

return displayData(veri)
})

let tbody = document.getElementById('table-content') // table gelecek

// kullanıcıya sor 
function sor(guncelle) {

let adSor = "Ad girin";
let soyadSor = "Soyad girin" 
let yasSor = "Yaş girin"

if(guncelle) {
adSor = "Adı güncelleyin";
soyadSor = "Soyadı güncelleyin"
yasSor = "Yaşı güncelleyin"
}

let ad = prompt(adSor)
if(ad == null) return;

let soyad = prompt(soyadSor)
if(soyad == null) return; 

let yas = prompt(yasSor)
if(yas == null) return;


if (ad && soyad && yas) {
    // veriler varsa bunları obje olarak döndür
    return { k_isim: ad, k_soyad: soyad, k_yas: yas }

} 

// eğer veri boşsa 
alert("kullanıcı adı, soyad veya yaş boş bırakılamaz.")
return sor()

}
// tüm verileri sil
function clearAllData() {

    const onayla = confirm("Bu işlem tüm verileri silecektir onaylıyor musunuz?")
    
    if(onayla) {
        // arrayi boşalt
        veri.length = 0;
        // tabloyu güncelle
        return displayData(veri)
    }
  

}

// veriyi sil
function deleteData(id) {
console.log("tetik", id)

veri.splice(id, 1)

return displayData(veri)
}

// veri ekle
function addData() {
const kullaniciyaSor = sor()

if(kullaniciyaSor) {

 const { k_isim, k_soyad, k_yas } = kullaniciyaSor

//  isim = kullaniciyaSor.k_isim

 veri.push({ name: k_isim, surname: k_soyad, age: k_yas})

 return displayData(veri)


}

}

// veriyi güncelle
function updateData(id) {
const kullaniciyaSor = sor(true)

if(kullaniciyaSor) {

const { k_isim, k_soyad, k_yas } = kullaniciyaSor

veri[id].name = k_isim
veri[id].surname = k_soyad
veri[id].age = k_yas

return displayData(veri);

}

}

// verileri göster
function displayData(array) {

     // array = veri
    tbody.innerHTML = "";

    array.forEach(function(data, index) {
     // orijinal veriyi değiştirmeden indexi arttir
     let fakeIndex = index + 1;
     let th = `<th> ${fakeIndex} </th>`
     let isim = `<td>${data.name}</td>`
     let soyad = `<td>${data.surname}</td>`
     let yas = `<td>${data.age}</td>`
     let sil = `<button onclick='deleteData(${index})' class="btn btn-danger">Sil</button>`
     let guncelle = `<button onclick=updateData(${index}) class="btn btn-warning">Güncelle</button>` 

     tbody.innerHTML += `<tr> ${th} ${isim} ${soyad} ${yas} <td style="width: 160px">${sil} ${guncelle}</td>  </tr>`

    })
}



displayData(veri)