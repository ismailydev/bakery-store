import { createSlice } from "@reduxjs/toolkit";

const items =
    localStorage.getItem("cartList") !== null
        ? JSON.parse(localStorage.getItem("cartList"))
        : [];

const setCartList = (items) => {
    localStorage.setItem("cartList", JSON.stringify(items));
};

const initialState = {
    items,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload];
            setCartList(state.items.map((item) => item));
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            let newCart = [...state.items];

            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.payload.id} as it's not in cart.)`
                );
            }

            state.items = newCart;
            setCartList(state.items.map((item) => item));
        },
        updateCart: (state, action) => {
            const theItem = state.items.find(
                (item) => item.id === action.payload.id
            );

            const filteredItems = state.items.filter(
                (item) => item.id !== action.payload.id
            );

            const replicatedItems = Array(action.payload.qty).fill(theItem);

            state.items = [...filteredItems, ...replicatedItems];
            setCartList(state.items.map((item) => item));
        },
    },
});

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartItemsWithId = (state, id) =>
    state.cart.items.filter((item) => item.id === id);

export const selectCartTotal = (state) =>
    state.cart.items.reduce((total, item) => (total += +item.price), 0);

export default cartSlice.reducer;
