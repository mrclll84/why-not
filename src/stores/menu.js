import { defineStore } from 'pinia'

export const useMenuStore = defineStore({
    id: 'menu',
    state: () => {
        return {
            openMenu: false,
        }
    },
    actions: {
        changeMenuState(value)  {
            this.openMenu = value
        },
    },
    getters: {
        getMenuState: state => state.openMenu,
    },

})
