import "./App.css";
import TaskListPage from "./page/TaskListPage";
import { Routes, Route } from "react-router-dom";

//URLと画面の対応をする
function App() {
  return (
    <Routes>
      <Route path="/" element={<TaskListPage />} />
    </Routes>
  );
}

export default App;
