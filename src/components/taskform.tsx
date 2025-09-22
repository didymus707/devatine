import { useState } from "react";
import type { Task } from "./types";

interface TaskFormProps {
  blockId: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ blockId }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskValue, setTaskValue] = useState("");
  const [taskDuration, setTaskDuration] = useState<number | undefined>(
    undefined
  );

  const addTasks = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskValue.trim() || !taskDuration || taskDuration <= 0) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      blockId: blockId,
      name: taskValue,
      duration: taskDuration,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <div className="task-card">
        <div className="task-form-container">
          <form className="task-form">
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
                  min={0}
                  type="number"
                  id="task-in-minutes"
                  name="task-in-minutes"
                  value={taskDuration ?? ""}
                  placeholder="Minutes"
                  onChange={(e) => {
                    const val = e.target.value;
                    setTaskDuration(
                      val === "" ? undefined : Number(e.target.value)
                    );
                  }}
                />
                <button onClick={addTasks}>Add</button>
              </div>
            </div>
          </form>
        </div>

        <div className="task-list">
          {tasks.map((task) => (
            <div className="task-item flex space-between" key={task.id}>
              <span>{task.name}</span>
              <span>{task.duration} mins</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskForm;
