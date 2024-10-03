import React from 'react';

const Task = (props) => {
    
    return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due:{props.deadline}</p>
            <p>{props.description}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
        </div>
    )
}

export default Task;