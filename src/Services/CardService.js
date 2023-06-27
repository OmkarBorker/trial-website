const priceCards = [
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      title: "Basic",
      features: ["Slow", "Limited Storage", "No Support"],
      price: 0
    },
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      title: "Monthly",
      features: ["Fast", "Unlimited Storage", "Free Support"],
      price: 6
    },
    {
      _id: "5b21ca3eeb7f6fbccd471817",
      title: "Yearly",
      features: ["Fast", "Unlimited Storage", "Free Support"],
      price: 60
    }
  ];
  
  export function getPriceCards() {
    return priceCards;
  }
  