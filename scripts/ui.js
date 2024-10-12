// Arayüzü etki edecek bütün fonksiyon burada tutulyor

// Meu-list divini çağırma
const menuList = document.getElementById("menu-list");
// menü elemanlarını parametre olarak alıp dizideki her bir eleman için ekrana kart basma
export const renderCards = (data) => {
  // console.log("render fonksiyonuna gelen parametre", data);
  // data dizisindeki herbir nesne için bir tane kart html i oluşturma
  // join methodu ile diziyi stringe çevirdik
  const cardsHTML = data
    .map(
      (item) => `
        <a
     href="/detail.html?id=${item.id}"
     id="card"
     class="d-flex flex-column flex-md-row text-dark gap-3 text-decoration-none"
     >
     <img class="rounded shadow img-fluid"
     src="${item.img}" 
     />
     <div>
      <div class="d-flex justify-content-between">
        <h5>${item.title}</h5>
        <p class="text-success fw-bold">${item.price}₺</p>
      </div>
      <p class="lead">
        ${item.desc}
      </p>
      </div>
     </a>`
    )
    .join("");

  // oluşturduğumuz kartları menuList divinin içine aktarma

  menuList.innerHTML = cardsHTML;

  //   console.log(cardsHTML);
};
