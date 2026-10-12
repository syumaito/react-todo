import { useNavigate } from "react-router-dom"

export function CreateButton(){
    const navigate = useNavigate();
    
    return(
        <button type="button" onClick={() => {
            navigate("/TaskCreatePage")
        }}>タスク新規作成</button>
    )
}

