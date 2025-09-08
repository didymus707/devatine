import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

type Task = {
  id: string;
  name: string;
  duration: number;
  completed: boolean;
};

export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task, duration: number) => {
    const newTask: Task = {
      id: uuidv4(),
      name: task.name,
      duration: duration,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return <>

  </>
  ;
};
