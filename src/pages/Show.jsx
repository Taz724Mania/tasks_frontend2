import { Link, useLoaderData, Form, useParams } from "react-router-dom";

export default function Show(props) {
  const aTask = useLoaderData();
  const { id } = useParams(); 

  return (
    <div>
      
      
      <h1>{aTask.title}</h1>
      <h2>{aTask.details}</h2>
      <h2>{aTask.dueDateTime}</h2>

        <Form action={`/update/${id}/`} method="POST">
            <label htmlFor="title">
                Rename the Task
                <input type="text" id="title" name="title" defaultValue={aTask.title}/>
            </label>
            <label htmlFor="details">
                What are the details of completing the task?
                <input type="text" id="details" name="details" defaultValue={aTask.details}/>
            </label>
            <label htmlFor="dueDateTime">
                When does it need to be done?
                <input type="text" id="dueDateTime" name="dueDateTime" defaultValue={aTask.dueDateTime}/>
            </label>
            <button>Update Task</button>
        </Form>

        <Form action={`/delete/${id}/`} method="POST">
            <button>Delete Task</button>
        </Form>
      

      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
}
