import { useState } from "react";

// type taskValue = {
//   task: string;
// };

const TaskForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </>
  );
};

export default TaskForm;
