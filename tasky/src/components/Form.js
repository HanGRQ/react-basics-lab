import React from "react";

const AddTaskForm = (props) => {

  return (
    <div>
      <form onSubmit={props.submit}>
        <label>
            Task title:<br></br>
            <input type="text" name="title" required onChange={(event) => props.change(event)} />
        </label>
        <br />
        <label>
            Due date:<br></br>
            <input type="date" name="deadline" required onChange={(event) => props.change(event)} />
        </label>
        <br />
        <label>
            Details:<br></br>
            <input type="text" name="description" onChange={(event) => props.change(event)} />
        </label>
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
};

export default AddTaskForm;