import React, {useEffect, useState} from 'react'
import {withTheme} from '@rjsf/core'
import {Theme as AntDTheme } from '@rjsf/antd'
import { Form, Input, Button, Checkbox, Select } from 'antd';

const TaskForm = withTheme(AntDTheme)
const { Option } = Select;
interface Task {
    tid:string,
    uid: string
    task_name: string;
    project: string,
    comments: string
}

type AppProps = {
    taskMode: 'create' | 'edit',
    taskData: Task


    
}
const ProjTypes = ["Python ,Java , Go, Javascript"]


const CreateTask = ({taskMode,taskData , addTask}  ) => {

   let [formData, setFormData] = useState({})
    let schema = {

           type : 'object',
           properties: {
               required: [],
               task_name:{
                   type: 'string',
                   title: "task Name"
               },
               project:{
                type: 'string',
                enum: ProjTypes,
                title: "Project"
               },
               comments:{
                type: 'string',
                title: "Comments"
               }
           }
    }

    useEffect(() => {
      if(taskMode === "edit") setFormData(taskData)

    },[taskMode])
  let onSubmit = (e) => {
     let data = e.formData
     let uid = new Date()
     data.uid = uid.toString()
     addTask(data)

      
  }
    return (<> 
    <TaskForm schema={schema} formData={formData} onSubmit={onSubmit}  >

      <Button htmlType="submit" type="primary"> Save</Button>
    </TaskForm>
  </>)


}

export default CreateTask