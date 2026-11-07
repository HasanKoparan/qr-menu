// Api´dan menu verilerini alacak bir fonksiyon

const fetchMenu = async () => {
  // Api´a istek at
  const response = await fetch("./db.json");

  // Api´dan gelen veriyi json formatindan js nesnesine cevir
  const data = await response.json();

  // Elde edilen data icerisindeki menu´yu fonksiyon cagrildiginda return et
  return data.menu;
};

export default fetchMenu;
