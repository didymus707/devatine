import React, { useState } from "react";

type taskValue = {
  task: string;
};

const TaskForm = (onAddTask) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    onAddTask({ task: inputValue });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={} />
      </form>
    </>
  );
};

export default TaskForm;
