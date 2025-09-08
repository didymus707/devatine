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
}

const TaskForm = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask({
      id: uuidv4(),
      name: inputValue,
      duration,
    });
  };

  return (
    <>
      <div className="time-block-card">
        <div className="time-block-header">
          <h3>Create Time Block Session</h3>
        </div>

        <div className="form-container">
          <form></form>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
