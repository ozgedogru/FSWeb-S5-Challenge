import axios from "axios";

const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
  const topics = document.createElement("div");
  topics.className = "topics";

  const topic1 = document.createElement("div");
  topic1.className = "tab";
  topic1.textContent = konu[0];

  const topic2 = document.createElement("div");
  topic2.className = "tab";
  topic2.textContent = konu[1];

  const topic3 = document.createElement("div");
  topic3.className = "tab";
  topic3.textContent = konu[2];

  const topic4 = document.createElement("div");
  topic4.className = "tab";
  topic4.textContent = konu[3];

  const topic5 = document.createElement("div");
  topic5.className = "tab";
  topic5.textContent = konu[4];

  topics.append(topic1);
  topics.append(topic2);
  topics.append(topic3);
  topics.append(topic4);
  topics.append(topic5);

  return topics;
};

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  axios.get("http://localhost:5001/api/konular").then((response) => {
    console.log(response.data["konular"]);

    const konular = Tablar(response.data["konular"]);
    document.querySelector(secici).append(konular);
  });
};

export { Tablar, tabEkleyici };
