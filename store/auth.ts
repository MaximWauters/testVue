import { defineStore } from "pinia";

export const useAuthStore = defineStore('useAuthStore', () => {
    const client = useSupabaseClient()
    //const session = ref()
    const user = useSupabaseUser()

    async function login(email: string, password: string){
        const { data, error } = await client.auth.signInWithPassword({email, password})
        console.log(error)
        if (error) throw error

        console.log(data)

       // session.value = data 

        navigateTo('/')

        return data
    }

    async function signup(email: string, password: string){
        const { data, error } = await client.auth.signUp({email, password})

        if (error) throw error

        console.log(data)
        console.log(error)

    }

    async function logout(){
        await client.auth.signOut()  
       // session.value = null
        navigateTo('/')
        
    }

    return {signup,login,user,logout}

})