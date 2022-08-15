const SHOP_DATA = [
  {
    title: 'Basic',
    items: [
      {
        id: 1,
        name: "Basic White",
        imageUrl: "https://images.unsplash.com/photo-1592994238317-fcf75c5466fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 99,
        category: "Basic"
      },
      {
        id: 2,
        name: "Basic Black",
        imageUrl: "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 99,
        category: "Basic"
      },      
      {
        id: 12,
        name: "Basic Grey",
        imageUrl: "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 99,
        category: "Basic"
      },
      {
        id: 13,
        name: "Basic Pink",
        imageUrl: "https://images.unsplash.com/photo-1560731454-a389b1554d25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        price: 99,
        category: "Basic"
      },
    ],
  },
  {
    title: 'Music',
    items: [
      {
        id: 3,
        name: "Iron Maiden",
        imageUrl: "https://images.unsplash.com/photo-1634609012927-875e4983d884?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 399,
        category: "Music"
      },
      {
        id: 4,
        name: "Bruno Mars",
        imageUrl: "https://images.unsplash.com/photo-1630590613173-b01fdb40a1eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 399,
        category: "Music"
      },
      {
        id: 20,
        name: "Rolling Stones",
        imageUrl: "https://images.unsplash.com/photo-1583693293996-d5753a173acc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 399,
        category: "Music"
      },
      {
        id: 21,
        name: "Misfits",
        imageUrl: "https://images.unsplash.com/photo-1645093875147-4678b3671e3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 399,
        category: "Music"
      },
    ],
  },
  {
    title: 'Sport',
    items: [
      {
        id: 5,
        name: "Gym",
        imageUrl: "https://images.unsplash.com/photo-1491756975177-a13d74ed1e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
        price: 299,
        category: "Sport"
      },
      {
        id: 17,
        name: "Boxing",
        imageUrl: "https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 299,
        category: "Sport"
      },
      {
        id: 18,
        name: "Tennis",
        imageUrl: "https://images.unsplash.com/photo-1583275478661-1c31970669fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        price: 299,
        category: "Sport"
      },
      {
        id: 19,
        name: "Sprint",
        imageUrl: "https://images.unsplash.com/photo-1560362614-89027598847b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 299,
        category: "Sport"
      },
    ],
  },
  {
    title: 'Merch',
    items: [
      {
        id: 6,
        name: "Gothi",
        imageUrl: "https://images.unsplash.com/photo-1589902860314-e910697dea18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 299,
        category: "Merch"
      },
      {
        id: 7,
        name: "Not Today",
        imageUrl: "https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 299,
        category: "Merch"
      },
      {
        id: 14,
        name: "Dragonball",
        imageUrl: "https://images.unsplash.com/photo-1593726891090-b4c6bc09c819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 299,
        category: "Merch"
      },
      {
        id: 15,
        name: "Outcast",
        imageUrl: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        price: 299,
        category: "Merch"
      },
    ],
  },
  {
    title: 'Pattern',
    items: [
      {
        id: 8,
        name: "Firehouse",
        imageUrl: "https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 199,
        category: "Pattern"
      },
      {
        id: 9,
        name: "Taipa",
        imageUrl: "https://images.unsplash.com/photo-1636954935833-80bdb8d2fcb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        price: 199,
        category: "Pattern"
      },
      {
        id: 11,
        name: "Peace",
        imageUrl: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 199,
        category: "Pattern"
      },
      {
        id: 16,
        name: "Mara",
        imageUrl: "https://images.unsplash.com/flagged/photo-1556293467-7acc070563ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 199,
        category: "Pattern"
      },
    ],
  },
];


export default SHOP_DATA;