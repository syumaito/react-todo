import { useNavigate } from "react-router-dom";
import './Header.css';

export function TaskCreateHeader() {
  const navigate = useNavigate();
  return (
    <header className="tcheader">
        <button className="listBack" type="button" onClick={() => {
            navigate("/");
          }}
        >戻る</button>
      <h1>タスク作成</h1>
    </header>
  );
}

export function TaskListHeader() {
  return (
    <header className="tlheader">
      <h1>Todoリスト</h1>
    </header>
  );
}