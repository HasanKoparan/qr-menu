// Ui elemanlarini birarada tutan bir obje

const uiElements = {
  menuList: document.querySelector("#menu-list"),
  inputs: document.querySelectorAll("input"),
  wrapper: document.querySelector("#wrapper"),
};

// menuList icerisine dinamik sekilde kart ekleyecek fonksiyon
const renderCard = (data) => {
  // Bu fonksiyona disaridan data adinda bir parametre verilsin.Verilen bu parametre icerisindeki her eleman icin bir html olustur.

  console.log(data);

  const cartHtml = data
    .map(
      (
        item,
      ) => `<a href='/detail.html?id=${item.id}' class="d-flex flex-column flex-md-row text-dark gap-3 text-decoration-none" id="card">
      
        <img
          src="${item.img}"
          class="rounded img-fluid shadow"
          alt="card-image"
        />

       
        <div>
          
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="fw-bold text-success"> ${(item.price * 60).toFixed(2)}₺</p>
          </div>
          
          <p class="lead">
            ${item.desc}
          </p>
        </div>
      </a>`,
    )
    .join("");

  // Olusturulan html´i arayüze aktar
  uiElements.menuList.innerHTML = cartHtml;
};

// Detay sayfasini renderlayacak fonksiyon

const renderDetailPage = (product, outlet) => {
  console.log(product);
  // Fonksiyona disaridan verilen outlet´in html icerigini olustur.
  outlet.innerHTML = `<div class="d-flex justify-content-between">

  <a href='/'>
  <img src="./images/home.png" width="35px" alt="menu-icon" />
  </a>
        

        <a class="text-decoration-none text-dark" href="#"
          >anasayfa / ${product.category}/ ${product.title}</a
        >
      </div>

      
      <h1 class="text-center">${product.title}</h1>

      
      <img
        src="${product.img}"
        alt="product-image"
        class="rounded object-fit-cover shadow"
        style="max-height: 400px"
      />

        
      <h4>Ûrünün Kategorisi: <span class="text-success">${product.category}</span></h4>

      
      <h4>Ûrünün Fiyat: <span class="text-bg-success">${(product.price * 60).toFixed(2)} ₺</span></h4>

      
      <p class="lead">
       ${product.desc}
      </p>`;
};

export { uiElements, renderCard, renderDetailPage };
