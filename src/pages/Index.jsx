import Task from "../components/Tasks"
import { Form, useLoaderData } from "react-router-dom"

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

            <Form className="pure-form pure-form-stacked" action="/create" method="POST">
                <label htmlFor="title" className="pure-label">Title:</label>
                    <input type="text" name="title" id="title" class="pure-input-1-whole" />

                <label htmlFor="details" className="pure-label">Details:</label>
                    <input type="text" name="details" id="details" class="pure-input-1-whole" />

                <label htmlFor="dueDateTime" className="pure-label">Due Date & Time:</label>
                    <input type="datetime-local" name="dueDateTime" id="dueDateTime" className="pure-input-1-whole" />

                <button type="submit" className="pure-buttonpure-button-primary">Submit</button>
            </Form>

            <hr />
            {allTasks.map((task, i) => <Task task={task} key={i}/>)}
        </div>
    )
}