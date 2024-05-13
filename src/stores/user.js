import { defineStore} from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebaseConfig'

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
        async registerUser(email, password) {
            try{
                const {user} = await createUserWithEmailAndPassword(
                    auth, 
                    email, 
                    password
                );
                // console.log(user);
                this.userData = {email: user.email, uid: user.uid}
            }catch (error) {
                console.log(error);
            }
        },
        async loginUser(email, password) {
            try{
                const {user} = await signInWithEmailAndPassword(auth, email, password)
                this.userData = {email: user.email, uid: user.uid}
            }catch(error){
                console.log(error)
            }
        }
        // registerUser(name) {
        //     this.userData = name;
        // },
    },
})