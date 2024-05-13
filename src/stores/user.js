import { defineStore} from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import router from '../router'

export const useUserStore = defineStore('userStore' , {
    state: () => ({
        // userData: 'bluuweb@test.com',
        userData: null,
        loadingUser: false
    }),
    // getters: {
    //     minuscula(state){
    //         return state.userData.toLocaleLowerCase()
    //     },
    // },
    actions: {
        async registerUser(email, password) {
            this.loadingUser = true
            try{
                const {user} = await createUserWithEmailAndPassword(
                    auth, 
                    email, 
                    password
                );
                // console.log(user);
                this.userData = {email: user.email, uid: user.uid}
                router.push('/home')
            }catch (error) {
                console.log(error);
            }finally {
                this.loadingUser = false
            }
        },
        async loginUser(email, password) {
            this.loadingUser = true
            try{
                const {user} = await signInWithEmailAndPassword(auth, email, password)
                this.userData = {email: user.email, uid: user.uid}
                router.push('/home')
            }catch(error){
                console.log(error)
            }finally {
                this.loadingUser = false
            } 
        },
        // registerUser(name) {
        //     this.userData = name;
        // },
        async logoutUser(){
            try{
                await signOut(auth)
                this.userData = null
                router.push('/login')
            }catch (error){
                console.log(error)
            }
        }
    },
});