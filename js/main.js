import fetchMenu from "./api.js";
import { renderCard, uiElements } from "./ui.js";

// Sayfa yüklendigi anda
document.addEventListener("DOMContentLoaded", async () => {
  // Api´dan menu verisini al
  const menuData = await fetchMenu();

  // Alinan menu verisine göre arayüzü renderla

  // UI Elements icerisindeki inputlara bir olay izleyicisi ekle.Inputlar bir nodelist oldugundan önce bu nodelist icerisindeki elemanlara teker teker erisip bu erisilen elelmanlara olay izleyicisi eklememiz gerekir.
  uiElements.inputs.forEach((input) => {
    //  Herbir input´un degisimini izle
    input.addEventListener("change", () => {
      // Secili input´un id´sine eris
      const selectedCategory = input.id;

      // menuData icerisinden selectedCategory´e sahip olan menu elemanlarini filtrele
      const filtredMenuItems = menuData.filter(
        (item) => item.category == selectedCategory,
      );

      // ! Eger selectedCategory all ise ürünleri renderla degilse secili kategoriye sahip elemanlari renderla
      if (selectedCategory === "all") {
        renderCard(menuData);
      } else {
        // Filtrelenen menu elemanlarina göre arayüzü renderla
        renderCard(filtredMenuItems);
      }
    });
  });
});
