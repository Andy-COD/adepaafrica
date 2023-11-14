export const data = [
  {
    title: "Vesace Blue shirt",
    itemCategory: "shirt",
    genderCategory: "Men",
    price: "¢250",
    image: "https://m.media-amazon.com/images/I/71YrZIPhKTL._AC_UX679_.jpg",
    rating: 5,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "With its unique letter print on the front and thermal lining, this hoodie provides both warmth and a trendy style statement.",
  },
  {
    title: "Brown Hoodie",
    itemCategory: "Hoodie",
    genderCategory: "Men",
    price: "¢400",
    image: "https://m.media-amazon.com/images/I/61WL0yFVDbL._AC_UY606_.jpg",
    rating: 5,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "With its unique letter print on the front and thermal lining, this hoodie provides both warmth and a trendy style statement.",
  },
  {
    title: "Green Hoodie",
    itemCategory: "Hoodie",
    genderCategory: "Men",
    price: "¢450",
    image: require("../../assets/Images/sweatshirt.png"),
    rating: 5,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "With its unique letter print on the front and thermal lining, this hoodie provides both warmth and a trendy style statement.",
  },
  {
    title: "Grey Sweat Pants",
    itemCategory: "Pants",
    genderCategory: "Men",
    price: "¢350",
    image: "https://m.media-amazon.com/images/I/81h57Y3kIWL._AC_UX679_.jpg",
    rating: 5,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "With its unique letter print on the front and thermal lining, this hoodie provides both warmth and a trendy style statement.",
  },
  {
    title: "Vesace Blue shirt",
    itemCategory: "shirt",
    genderCategory: "Men",
    price: "¢250",
    image: "https://m.media-amazon.com/images/I/71YrZIPhKTL._AC_UX679_.jpg",
    rating: 5,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "With its unique letter print on the front and thermal lining, this hoodie provides both warmth and a trendy style statement.",
  },
  {
    title: "Brown Hoodie",
    itemCategory: "Hoodie",
    genderCategory: "Men",
    price: "¢400",
    image: "https://m.media-amazon.com/images/I/61WL0yFVDbL._AC_UY606_.jpg",
    rating: 5,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "With its unique letter print on the front and thermal lining, this hoodie provides both warmth and a trendy style statement.",
  },
  {
    title: "Green Hoodie",
    itemCategory: "Hoodie",
    genderCategory: "Men",
    price: "¢450",
    image: "https://m.media-amazon.com/images/I/61GGfwp0ewL._AC_UY679_.jpg",
    rating: 5,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "With its unique letter print on the front and thermal lining, this hoodie provides both warmth and a trendy style statement.",
  },
  {
    title: "Grey Sweat Pants",
    itemCategory: "Pants",
    genderCategory: "Men",
    price: "¢350",
    image: "https://m.media-amazon.com/images/I/81h57Y3kIWL._AC_UX679_.jpg",
    rating: 5,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "With its unique letter print on the front and thermal lining, this hoodie provides both warmth and a trendy style statement.",
  },
];

import axios from "axios";

const options = {
  method: "GET",
  url: "https://zappos1.p.rapidapi.com/brands/list",
  headers: {
    "X-RapidAPI-Key": "50e5a7cdb1mshc8424d7657731adp19fb0fjsnb1fd4033d154",
    "X-RapidAPI-Host": "zappos1.p.rapidapi.com",
  },
};

export const gatClothes = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
