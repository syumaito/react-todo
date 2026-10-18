import React, { useState } from "react";
import "./CreateData.css";
import { useNavigate } from "react-router-dom";
import { ListData } from "./ListData";


export default function TaskInput() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [stime, setStime] = useState("");
  const [etime, setEtime] = useState("");

  const today: Date = new Date();

  return (
    <div>
      <label htmlFor="taskname">タスク名：</label>
      <input id="taskname" type="text" value={text} onChange={(event) => setText(event.target.value)}/>
      {/* ↓入力確認 */}
      <h1>{text}</h1>
      <br />

      <span>
        日付：{today.getMonth() + 1}月{today.getDate()}日
      </span>
      <br />

      <label htmlFor="starttime">startTime：</label>
      <input id="starttime" type="time" value={stime} onChange={(event) => setStime(event.target.value)}/>
      <br />

      <label htmlFor="endtime">endTime：</label>
      <input id="endtime" type="time" value={etime} onChange={(event) => setEtime(event.target.value)}/>
      <br />

      <label htmlFor="create"></label>
      <input
        id="create"
        type="submit"
        value="作成"
        onClick={() => {
            ListData(text, stime, etime)
            navigate("/");
        }}
      />
    </div>
  );
}

