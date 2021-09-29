import React, {useState} from 'react'
import { Button } from 'antd';

import TaskListComp from './taskList'
import CreateTaskComp from './createtask'

// interface Task {
//     tid:string,
//     uid: string
//     task_name: string;
//     project: string,
//     comments: string
// }

let samleTask = [{uid: 'xyz',tid: '1', task_name: 'python', project: 'python', commens: 'na'}]
const TaskHome = () => {

    let [showModal, setShowModal] = useState(false)
    let [taskMode , setTaskMode] = useState <'create' | 'edit' > ('create')
    let [TaskList , setTaskList] = useState(samleTask)
    let [taskData, setTaskData] = useState({})

  let createtask = () => {



  }

  let addTask = (data: any) => {

    setTaskData(taskData => taskData.push(data))

  }

    return (<>
    <Button type="primary" onClick={createtask}>Create task</Button>
     {showModal ? (<CreateTaskComp taskMode={taskMode} taskData={taskData} />) : (<> </>)}
     <TaskListComp TaskList={TaskList} />
    
     </>)
}

export default TaskHome