import { redirect } from "react-router-dom";

const URL = import.meta.env.VITE_BASE_URL


export const createAction = async ({request}) => {
    
    const formData = await request.formData()

    
    const newTask = {
        title: formData.get("title"),
        details: formData.get("details"),
        dueDateTime: formData.get("dueDateTime"),
        completed: formData.get("completed"),
    }

    
    await fetch(`${URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    })

    
    return redirect("/")
}


export const deleteAction = async ({params}) => {
    
    const id = params.id
    
    await fetch(`${URL}${id}/`, {
        method: "DELETE"
    })
    
    return redirect("/")
}


export const updateAction = async ({request, params}) => {
    
    const formData = await request.formData()
    
    const id = params.id
    
    const updatedTask = {
        title: formData.get("title"),
        details: formData.get("details"),
        dueDateTime: formData.get("dueDateTime"),
        completed: formData.get("completed"),
    }
    
    await fetch(`${URL}${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTask)
    })
    
    return redirect(`/task/${id}`)
}