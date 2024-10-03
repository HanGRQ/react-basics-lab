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
        <label>
            Priority:<br />
            <select name="priority" required onChange={(event) => props.change(event)}>
              <option value="LOW">LOW</option>
              <option value="MEDIUM">MEDIUM</option>
              <option value="HIGH">HIGH</option>
            </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
};

export default AddTaskForm;