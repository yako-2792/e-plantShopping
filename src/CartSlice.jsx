import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        // if exist -> +1
        existingItem.quantity++;
      } else {
        // else -> add first appearance in items property
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // bring all items except the one in payload == plant type/name
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        // if item to update exists, apply new quantity
        itemToUpdate.quantity = quantity
      }
      // else, silently fails it seems :( 
    },
  },
});

// exported the creator actions
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// exported the reducer as default for store.js
export default CartSlice.reducer;
