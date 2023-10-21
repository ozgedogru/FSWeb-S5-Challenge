import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const card = document.createElement("div");
  card.className = "card";

  const headline = document.createElement("div");
  headline.className = "headline";
  headline.textContent = makale.anabaslik;
  card.append(headline);

  const author = document.createElement("div");
  author.className = "author";
  card.append(author);

  const imageContainer = document.createElement("div");
  imageContainer.className = "img-container";
  author.append(imageContainer);

  const image = document.createElement("img");
  image.setAttribute("src", makale.yazarFoto);
  imageContainer.append(image);

  const authorName = document.createElement("span");
  authorName.textContent = makale.yazarAdi;
  author.append(authorName);

  return card;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  axios.get("http://localhost:5001/api/makaleler").then((response) => {
    const makaleObje = response.data.makaleler;
    const makaleKonu = Object.keys(makaleObje);

    makaleKonu.forEach((item) => {
      makaleObje[item].forEach((makale) => {
        document.querySelector(secici).append(Card(makale));
      });
    });
  });
};

export { Card, cardEkleyici };
