export const usePost= () => {
    const client = useSupabaseClient()
    const result = ref()

    async function getData(){
        const { data, error } = await client
        .from('Posts')
        .select();

        if (error) throw error

        console.log(data)
        console.log(error)

        result.value = data
    }
    onMounted(() => {getData()})
    return {result}

  }

