import { defineStore} from 'pinia'
import {ref,computed} from 'vue'

export const useAuthStore = defineStore("authStore",()=>{
    const _userId = ref(0)

    //action
    function login(userId){
        //validaciones
        _userId.value = userId
    }

    //getter
    const hayUsuarioAutenticado = computed(()=> _userId.value > 0)
    
    //que exponemos
    return {login,hayUsuarioAutenticado}

})