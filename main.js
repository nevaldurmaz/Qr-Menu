
import {renderCards} from"./scripts/ui.js";

// data ya heryerde erişebilmek için global değişken tanım
let data;

// menü verilerini json dosyasından çeken fonksiyon
async function fetchMenu(){

    // APİ'den verileri al
    const res= await fetch("./db.json");

    // JSON verisini JS formatına çevir
  data = await res.json();
    // console.log(data);

}
// sayfanın yüklenme olayını izle
window.addEventListener("DOMContentLoaded",()=>{

    // verileri çeken fonksiyonu çalıştır
    // console.log("sayfa yüklendi...");

  fetchMenu()
    // Apı isteği(fonksiyon)başarılı olduğu zaman kartları ekrana basan fonk.çalıştırma
    .then(() => renderCards(data.menu));
});
// Buttons alanındaki inputları çağırma
const inputs = document.querySelectorAll("#buttons input");
// console.log(inputs);

//* imputlar dizisini dön:
inputs.forEach((input) => {

  //* herbir inputun seçilme olayını izle:
  input.addEventListener("change", () => {
    // console.log("kategori değişti");

    // seçilen kategoriy, belirle
    const selected = input.id;

// eğer hepsi seçiliyse bütün datayı ekrana bas
if (selected === "all") {
  renderCards(data.menu);
} else {
  // menü elemalarından seçilen kategoriye ait olanları filtrele
  const filtred = data.menu.filter((i) => i.category === selected);

  // filterenen datayı ekrana bas
  renderCards(filtred);
}
});
});