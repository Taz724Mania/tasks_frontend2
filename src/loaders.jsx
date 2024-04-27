
const URL = import.meta.env.VITE_BASE_URL
console.log(URL)


export const indexLoader = async () => {

    const response = await fetch(`${URL}`)

    const allTasks = await response.json()
    
    return allTasks
}


export const showLoader = async ({ params }) => {
console.log(params)
    const response = await fetch(`${URL}${params.id}/`)

    const aTask = await response.json()

    return aTask
}
