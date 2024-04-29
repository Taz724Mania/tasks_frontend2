import Task from "../components/Tasks"
import { Form, useLoaderData } from "react-router-dom"
import { createAction } from "../actions"

export default function Index(props) {
    const allTasks = useLoaderData()

    return (
        <div>
            <h1>Add a Task</h1>
            {/* <Form action="/create" method="POST">
                <label htmlFor="title">
                    <input type="text" name="title" id="title" />
                </label>
                <label htmlFor="details">
                    <input type="text" name="details" id="details" />
                </label>
                <label htmlFor="dueDateTime">
                    <input type="text" name="dueDateTime" id="dueDateTime" />
                </label>
                <button>Submit</button>
            </Form> */}

            <form class="pure-form pure-form-stacked" action={createAction} method="POST">
                <label for="title" class="pure-label">Title:</label>
                    <input type="text" name="title" id="title" class="pure-input-1-whole" />

                <label for="details" class="pure-label">Details:</label>
                    <input type="text" name="details" id="details" class="pure-input-1-whole" />

                <label for="dueDateTime" class="pure-label">Due Date & Time:</label>
                    <input type="text" name="dueDateTime" id="dueDateTime" class="pure-input-1-whole" />

                <button type="submit" class="pure-buttonpure-button-primary">Submit</button>
            </form>

            <hr />
            {allTasks.map((task, i) => <Task task={task} key={i}/>)}
        </div>
    )
}