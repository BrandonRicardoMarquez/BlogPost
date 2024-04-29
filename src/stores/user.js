import { defineStore} from 'pinia'

export const useUserStore = defineStore('userStore' , {
    state: () => ({
        // userData: 'bluuweb@test.com',
        userData: null,
    }),
    // getters: {
    //     minuscula(state){
    //         return state.userData.toLocaleLowerCase()
    //     },
    // },
    actions: {
        // registerUser(name) {
        //     this.userData = name;
        // },
    },
})