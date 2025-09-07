import { useState } from "react";
import TaskForm from "./components/taskfrom";
import { Timer } from "./components/layout/timer";

function App() {
  return (
    <>
      <h1>Welcome to Towards a habitt</h1>
      <TaskForm />
      <Timer />
    </>
  );
}

export default App;
