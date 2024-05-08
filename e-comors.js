const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 10000,
    colors: [
      {
        code: "black",
        img: "photo/air.png",
      },
      {
        code: "darkblue",
        img: "photo/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 12500,
    colors: [
      {
        code: "lightgray",
        img: "photo/jordan.png",
      },
      {
        code: "green",
        img: "photo/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 12500,
    colors: [
      {
        code: "lightgray",
        img: "photo/blazer.png",
      },
      {
        code: "green",
        img: "photo/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 19999,
    colors: [
      {
        code: "black",
        img: "photo/crater.png",
      },
      {
        code: "lightgray",
        img: "photo/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 9999,
    colors: [
      {
        code: "gray",
        img: "photo/hippie.png",
      },
      {
        code: "black",
        img: "photo/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});