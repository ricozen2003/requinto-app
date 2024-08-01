import React from "react";
import "./Tasks.css";

const Task = ({ task, index, Status }) => {
  return (
    <div className="taskitem">
      <span>{index + 1}.</span>
      <span>{task.description}</span>
      <span>{task.assignee}</span>
      {task.status === "pending" && <span>{task.deadline}</span>}
      <span>{task.status}</span>
      <span>
        <button onClick={() => Status(index)}>Status</button>
      </span>
    </div>
  );
};

export default Task;
