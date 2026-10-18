import React from 'react'
import { CreateButton } from '../Components/Button'
import { TaskListHeader } from '../Components/Header'
import { listdata } from '../Data/ListData'





export default function TaskListPage() {

  
  const list = listdata.map((ldata) =>{
    return(
      // タグをネストしてカードを作る
    <div>
      {ldata[0]}{ldata[1]}{ldata[2]}
    </div>
    )
  })
  
  return (
    <div>
      <TaskListHeader />
      {list}
      <CreateButton></CreateButton>
    </div>
  )
}