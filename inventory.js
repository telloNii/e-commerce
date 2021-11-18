var products = [
  {
    name: "Burbury",
    id: 1,
    thumb: require("./assets/images/burberry.jpg"),
    price: "$12.00",
    favorite: false,
    icon: "cart-plus",
    order: "1",
    phone: "",
  },
  {
    name: "Dolce & Gabbana",
    id: 2,
    thumb: require("./assets/images/dolce and gabbana.jpg"),
    price: "$12.00",
    favorite: false,
    icon: "cart-plus",
    order: "1",
    phone: "",
  },
  {
    name: "Christian Dior",
    id: 3,
    thumb: require("./assets/images/dior.jpg"),
    price: "$12.00",
    favorite: false,
    icon: "cart-plus",
    order: "1",
    phone: "",
  },
  {
    name: "Fendy",
    id: 4,
    thumb: require("./assets/images/fiery FENDI.jpg"),
    price: "$12.00",
    favorite: false,
    icon: "cart-plus",
    order: "1",
    phone: "",
  },
  {
    name: "Gucci",
    id: 5,
    thumb: require("./assets/images/black gucci round.jpg"),
    price: "$12.00",
    favorite: false,
    icon: "cart-plus",
    order: "1",
    phone: "",
  },
  // {
  //   name: "Prada",
  //   id: 6,
  //   thumb: require("/assets/images/prada/photo_2021-09-08_00-28-58.jpg"),
  //   price: "$12.00",
  //   favorite: false,
  //   icon: "cart-plus",
  //   order: "1",
  //   phone: "",
  // },
  {
    name: "Saint Lauren",
    id: 7,
    thumb: require("./assets/images/saint lauren.jpg"),
    price: "$12.00",
    favorite: false,
    icon: "cart-plus",
    order: "1",
    phone: "",
  },
  {
    name: "Tommy Hillfiger",
    id: 8,
    thumb: require("./assets/images/tommy hillfiger.jpg"),
    price: "$12.00",
    favorite: false,
    icon: "cart-plus",
    order: "1",
    phone: "",
  },
];

var frames = {
  Burberry, DG, Dior, Fendi, Gucci, Prada, SaintLauren, TummyHillfiger,
};

var cart = [];

export default products;
export { frames, cart };
