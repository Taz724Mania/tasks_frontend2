import { Link } from "react-router-dom"

export default function Task({ task }) {


   
    return (
        <div>
            <Link to={`/task/${task.id}`}>
                <h1>{task.title}</h1>
                <h2>{task.details}</h2>
                <h3>{task.dueDateTime}</h3>
                <h4>{task.completed}</h4>
            </Link>
        </div>
    )
}