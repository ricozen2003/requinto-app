import React, { useState } from "react";
import Task from "./task";
import SearchFilter from "./searchfilter";
import "./Tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      description: "Complete the project proposal",
      assignee: "Ira",
      status: "pending",
      deadline: "02-08-2024",
    },
    {
      description: "Review and edit the draft",
      assignee: "Jane",
      status: "completed",
      deadline: "05-08-2024",
    },
    {
      description: "Develop the user interface",
      assignee: "Junmark",
      status: "pending",
      deadline: "10-08-2024",
    },
    {
      description: "Test the application",
      assignee: "Leah",
      status: "completed",
      deadline: "12-08-2024",
    },
    {
      description: "Prepare the presentation slides",
      assignee: "Angel",
      status: "pending",
      deadline: "13-08-2024",
    },
    {
      description: "Deploy the application",
      assignee: "Elliana Grace",
      status: "completed",
      deadline: "20-08-2024",
    },
    {
      description: "Write the documentation",
      assignee: "Zack",
      status: "pending",
      deadline: "06-08-2024",
    },
    {
      description: "Conduct user interviews",
      assignee: "Erica",
      status: "completed",
      deadline: "07-08-2024",
    },
    {
      description: "Analyze user feedback",
      assignee: "Rhenz",
      status: "pending",
      deadline: "14-08-2024",
    },
    {
      description: "Update the marketing plan",
      assignee: "John",
      status: "pending",
      deadline: "30-08-2024",
    },
  ]);

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const Status = (index) => {
    const newTasks = [...tasks];
    newTasks[index].status =
      newTasks[index].status === "pending" ? "completed" : "pending";
    setTasks(newTasks);
    setFilteredTasks(newTasks);
  };

  return (
    <div className="taskcontainer">
      <h2>Task List</h2>
      <SearchFilter tasks={tasks} setFilteredTasks={setFilteredTasks} />
      <ul>
        <li className="header">
          <span>No.</span>
          <span>Description</span>
          <span>Assignee</span>
          <span>Deadline</span>
          <span>Status</span>
          <span>Action</span>
        </li>
        {filteredTasks.map((task, index) => (
          <Task key={index} index={index} task={task} Status={Status} />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
