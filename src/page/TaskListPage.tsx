import React from 'react'
import { CreateButton } from '../Components/Button'
import { TaskListHeader } from '../Components/Header'

export default function TaskListPage() {
  return (
    <div>
      <TaskListHeader></TaskListHeader>
      <CreateButton></CreateButton>
    </div>
  )
}
