<template>
    <div>
        <h1>Register</h1>
        <!-- <p>{{ userStore.minuscula }}</p>
        <button class="btn btn-outline-success" @click="userStore.registerUser('Brandon')">Registrar</button> -->
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Ingrese email" v-model.trim="email">
            <input type="password" placeholder="Ingrese constraseña" v-model.trim="password">
            <button type="submit" class="btn btn-outline-success" :disabled="userStore.loadingUser">Crear usuario</button>
            
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useUserStore } from '../stores/user';
    // import {useRouter} from 'vue-router'

    const userStore = useUserStore()
    // const router = useRouter()
    const email = ref('')
    const password = ref('')
    // import { computed } from 'vue';
    // import { useUserStore } from '../stores/user';
    // const userStore = useUserStore()
    const handleSubmit = async() => {
        // console.log(email.value)
        // console.log(password.value)
        if(!email.value || password.value.length < 6){
            return alert('llename todo ese campo 😏')
        }
        // console.log('procesando formulario')
        await userStore.registerUser(email.value, password.value)
        // router.push('/home')
    }
</script>