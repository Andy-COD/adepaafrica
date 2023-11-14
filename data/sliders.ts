export interface onBoardingObjects {
  id?: number;
  image?: any;
  description?: string;
  title?: string;
}

export const sliders: onBoardingObjects[] = [
    {
      id: 1,
      title: "Find Favourite Items",
      description: "Find your favourite products that you want to buy easily",
      image: require("../assets/Images/OnBoardImage-1.png"),
    },
    {
      id: 2,
      title: "Easy and Safe payments",
      description: "Easily pay for for products you buy safely and easily",
      image: require("../assets/Images/OnBoardImage-3.png"),
    },
    {
      id: 3,
      title: "Product delivery",
      description: "Recieve you product at your door step",
      image: require("../assets/Images/OnBoardImage-2.png"),
    },
  ];