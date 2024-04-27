import Task from "../components/Tasks"
import { Form, useLoaderData } from "react-router-dom"

export default function Index(props) {
    const allTasks = useLoaderData()

    return (
        <>
            <h1>Add a Task</h1>
            <Form action="/create" method="POST">
                <label htmlFor="title">
                    <input type="text" name="title" id="title" />
                </label>
                <label htmlFor="details">
                    <input type="text" name="details" id="details" />
                </label>
                <label htmlFor="dueDateTime">
                    <input type="text" name="dueDateTime" id="dueDateTime" />
                </label>
                <label htmlFor="completed">
                    <input type="checkbox" name="completed" id="completed" />
                </label>
                <button>Submit</button>
            </Form>
            <hr />
            {allTasks.map((task, i) => <Task task={task} key={i}/>)}
        </>
    )
}