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

        {/* <Form className="pure-form" action={`/update/${id}/`} method="POST">
          <fieldset className="pure-group">
            <label for="title" className="pure-group-label">Rename the Task</label>
            <input type="text" id="title" name="title" className="pure-input-1-whole" value="<?= $aTask->title; ?>" />
          </fieldset>
          <fieldset className="pure-group">
            <label for="details" className="pure-group-label">What are the details of completing the task?</label>
            <input type="text" id="details" name="details" className="pure-input-1-whole" value="<?= $aTask->details; ?>" />
          </fieldset>
          <fieldset className="pure-group">
            <label for="dueDateTime" className="pure-group-label">When does it need to be done?</label>
            <input type="text" id="dueDateTime" name="dueDateTime" className="pure-input-1-whole" value="<?= $aTask->dueDateTime; ?>" />
          </fieldset>
          <button type="submit" className="pure-button pure-button-primary">Update Task</button>
        </Form>

        <Form class="pure-form" action={`/delete/${id}/`} method="POST">
          <button type="submit" className="pure-button pure-button-primary">Delete Task</button>
        </Form> */}

      

      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
}
