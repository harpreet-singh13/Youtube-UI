import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'appSlice',
    initialState: {
        isMenuOpen : true,
    },
    reducers : {
        toggleMenu(state) {
            state.isMenuOpen = !state.isMenuOpen;
        },

        menuClosed(state) {
            state.isMenuOpen = false;
        }
    }
})

export const{toggleMenu , menuClosed} = appSlice.actions;

export default appSlice.reducer;