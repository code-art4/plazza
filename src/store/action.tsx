export const ACTIONS = {
  NOTIFY: "NOTIFY",
  AUTH: "AUTH",
  ADD_CART: "ADD_CART",
  ADD_MODAL: "ADD_MODAL",
  ADD_ORDERS: "ADD_ORDERS",
  ADD_USERS: "ADD_USERS",
  ADD_CATEGORIES: "ADD_CATEGORIES",
};

export const addToCart = (product: any, cart: any) => {
  if (product.length == 0) {
    //  setTimeout(() => {
    //   return dispatch({ type: "NOTIFY", payload: {} });
    // }, 3000);

    return {
      type: "NOTIFY",
      payload: { error: "This product is out of stock." },
    };
  }
  if (product.inStock === 0) {
    return {
      type: "NOTIFY",
      payload: { error: "This product is out of stock." },
    };
  }

  const check = cart?.every((item: any) => {
    return item._id !== product._id;
  });

  if (!check)
    return {
      type: "NOTIFY",
      payload: { error: "The product has been added to cart." },
    };
  return { type: "ADD_CART", payload: [...cart, { ...product, quantity: 1 }] };
};

export const increase = (data: any, id: any) => {
  const newData = [...data];
  newData.forEach((item) => {
    if (item._id === id) {
      return (item.quantity += 1);
    }
  });
  return { type: "ADD_CART", payload: newData };
};

export const decrease = (data: any, id: any) => {
  const newData = [...data];
  newData.forEach((item) => {
    if (item._id === id) {
      return (item.quantity -= 1);
    }
  });
  return { type: "ADD_CART", payload: newData };
};

export const deleteItem = (data: any, id: string, type: any) => {
  const newData = data.filter((item: any) => item._id !== id);
  return { type, payload: newData };
};

export const updateItem = (data: any, id: string, post: any, type: any) => {
  const newData = data.map((item: any) => (item._id === id ? post : item));
  return { type, payload: newData };
};
