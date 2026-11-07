// Cok sayfali uygulamalarda profile, detail, decs gibi sayfalar bir cok elemnan icin dinamik sekilde renderlanir.Bunu ise url´e gecilen parametreye göre yapariz.

import fetchMenu from "./api.js";
import { renderDetailPage, uiElements } from "./ui.js";

// Javascript´de URLSearchParams classi sayesinde url´deki arama parametrelerine erisip kullanabiliriz.

// URLSearchParams classini kullanarak url´deki arama parametrelerini al.
const params = new URLSearchParams(window.location.search);

// Alinan parametreler icerisinden id parametresini al ve bu id parametresinin karsiligini number´a cevir.
const id = +params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
  //  Api´a dan menu elemanlarini al
  const data = await fetchMenu();

  // Detay sayfasinda renderlanacak ürünü bul
  const detailProduct = data.find((item) => item.id === id);

  // Bulunan ürün verisine göre detay sayfasini renderla
  renderDetailPage(detailProduct, uiElements.wrapper);
});
