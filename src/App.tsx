import "./App.css";
import TaskCreatePage from "./page/TaskCreatePage";
import TaskListPage from "./page/TaskListPage";
import { Routes, Route } from "react-router-dom";

//URLと画面の対応をする
function App() {
  return (
    <Routes>
      <Route path="/" element={<TaskListPage />} />
      <Route path="/TaskCreatePage" element={<TaskCreatePage />} />
    </Routes>
  );
}

export default App;
