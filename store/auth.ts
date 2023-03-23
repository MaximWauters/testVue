import { defineStore } from "pinia";
//import  useSupabaseClient  from "@nuxtjs/supabase"

export const useAuthStore = defineStore('useAuthStore', () => {
    const client = useSupabaseClient()
    //const session = ref()
    const user = useSupabaseUser()


    async function login(email: string, password: string){
        const { data, error } = await client.auth.signInWithPassword({email, password})
        //console.log(error)
        if (error != null) {
            alert(error)
            throw error; 
        }

        console.log(data)

        alert("Welcome user: " + data.user?.email + " !")
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