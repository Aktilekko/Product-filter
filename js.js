const products = [
  {
    id: 1,
    title: "Ноутбук Sony Vaio VPC-YB2L1R AMD Fusion E-350",
    category: "laptops",
    price: 19950,
    img: "https://www.kivano.kg/images/product/68352/full/1622355077_67139000.png",
    desc: "Процессор: E-350 Частота процессора: 1600 МГц Объем жесткого диска: 320 ГБ Диагональ экрана: 11.6, Видеокарта: ATI Radeon HD 6310M Вес: 1.46 кг Оптический привод: DVD нет Bluetooth: есть Wi-Fi: есть",
  },
  {
    id: 2,
    title: "Xiaomi Mi 11 Lite",
    category: "phones",
    price: 28700,
    img: "https://www.kivano.kg/images/product/92416/full/1635945551_75038600.jpg",
    desc: "экран: 6.55 (2400x1080) 90 Гц, оперативная память: 8 ГБ, память: 128 ГБ, слот для карты памяти, 3 камеры: 64 МП, 8 МП, 5 МП, аккумулятор: 4250 мА·ч, процессор: Qualcomm Snapdragon 780G, SIM-карты: 2 (nano SIM), операционная система: Android 11, беспроводные интерфейсы: NFC, Wi-Fi, Bluetooth 5.1, интернет: 5G, 4G LTE, вес: 159 г",
  },
  {
    id: 3,
    title: "Hello",
    category: "laptops",
    price: 60000,
    img: "https://www.kivano.kg/images/product/68352/full/1622355077_67139000.png",
    desc: "bla bla bla",
  },
  {
    id: 4,
    title: "Телевизор LG OLED65CXRLA",
    category: "tv",
    price: 219980,
    img: "https://www.kivano.kg/images/product/92929/full/1621780991_50190300.jpg",
    desc: "разрешение: 4K UHD (3840x2160), HDR диагональ экрана: 65 частота обновления экрана: 100 Гц формат HDR: Dolby Vision, HDR 10 Pro мощность звука: 40 Вт (2х10 + 2х10 Вт) платформа Smart TV: webOS",
  },
];

window.addEventListener("load", function () {
  const productsInner = document.querySelector(".products__inner");
  const filtersContainer = document.querySelector(".products__filters");

  displayProductsItems(products);
  displayFilterBtns();

  function displayProductsItems(products) {
    let displayProducts = products.map(function (item) {
      return `
      <article class="products__item">
      <img src="${item.img}">
      <div class="products__item-info">
      <h3>${item.title}</h3>
      <span>${item.price}</span>
      <p><h3>${item.desc}</h3></p>
      </div>
      </article>`;
    });

    displayProducts = displayProducts.join("");
    productsInner.innerHTML = displayProducts;
  }

  function displayFilterBtns() {
    const categories = products.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );

    const categoryBtns = categories
      .map((cat) => {
        return `
    <button class="products__filters-btn" type="button" data-cat="${cat}">${cat}</button>
    `;
      })
      .join("");

    filtersContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".products__filters-btn");

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.cat;
        const productCategory = products.filter((item) => {
          if (item.category == category) {
            return item;
          }
        });

        if (category === "all") {
          displayProductsItems(products);
        } else {
          displayProductsItems(productCategory);
        }
      });
    });
  }
});
