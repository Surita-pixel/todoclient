import { useEffect, useState } from "react";

import { getAllTasks } from "../api/tasks.api";
import TaskCard from "./TaskCard";

export default  function  TaskList() {
    const [tasks, setTasks] = useState([])
  useEffect(() => {
    async function loadTasks() {
      const res =(await getAllTasks()).data;
      setTasks(res)
      console.log(res)
    }
    loadTasks();
  }, []);
  return (
  <div className="grid grid-cols-3 gap-3">
        {tasks.map(task =>(
            <TaskCard key={task.id} task={task} />
        ))}
    </div>);
}
