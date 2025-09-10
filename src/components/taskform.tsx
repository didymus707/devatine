import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Task = {
  id: string;
  name: string;
  duration: number;
  completed: boolean;
};

interface Block {
  id: string;
  name: string;
  duration: number;
  tasks: Task[];
  complteted: boolean;
}

const TaskForm = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskValue, setTaskValue] = useState("");
  const [taskDuration, setTaskDuration] = useState(0);
  const [sessionValue, setSessionValue] = useState("");

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   onAddTask({
  //     id: uuidv4(),
  //     name: sessionValue,
  //   });
  // };

  const addTasks = () => {
    if (taskValue.trim() === "" || taskDuration <= 0) return;

    const newTask: Task = {
      id: uuidv4(),
      name: taskValue,
      duration: taskDuration,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <div className="time-block-card">
        <div className="time-block-header">
          <h3>Create Time Block Session</h3>
        </div>

        <div className="form-container">
          <form className="task-form">
            <div className="form-head">
              <label htmlFor="session-name">Session Name</label>
              <input
                type="text"
                id="session-name"
                value={sessionValue}
                onChange={(e) => setSessionValue(e.target.value)}
              />
            </div>

            <div className="duration-wrapper flex space-between">
              <div className="hours">
                <label htmlFor="total-session-duration">Total Hours</label>
                <input
                  type="number"
                  id="total-session-duration"
                  min="0"
                  max="23"
                />
              </div>
              <div className="minutes">
                <label htmlFor="total-session-minutes">Total Minutes</label>
                <input
                  type="number"
                  id="total-session-minutes"
                  min="0"
                  max="59"
                />
              </div>
            </div>

            <div className="session-tasks-wrapper">
              <p className="session-tasks">Add Tasks to your Session</p>
              <div className="flex">
                <input
                  type="text"
                  value={taskValue}
                  placeholder="Task name( e.g Read Percy Jackson)"
                  onChange={(e) => setTaskValue(e.target.value)}
                />
                <input
                  min={1}
                  type="number"
                  id="task-in-minutes"
                  name="task-in-minutes"
                  value={taskDuration}
                  placeholder="Duration in minutes"
                  onChange={(e) => setTaskDuration(Number(e.target.value))}
                />
                <button onClick={addTasks}>Add</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
