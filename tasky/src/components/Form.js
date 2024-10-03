import React from "react";

const AddTaskForm = (props) => {

  return (
    <div>
      <form>
        <label>
            Task title:<br></br>
            <input type="text" name="title" required />
        </label>
        <br />
        <label>
            Due date:<br></br>
            <input type="date" name="deadline" required />
        </label>
        <br />
        <label>
            Details:<br></br>
            <input type="text" name="description" />
        </label>
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
};

export default AddTaskForm;