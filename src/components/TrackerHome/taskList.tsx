import React from 'react'
import { Table, Tag, Space } from 'antd';

// interface Task {
//     tid:string,
//     uid: string
//     task_name: string;
//     project: string,
//     comments: string
// }

// type AppProps = {
//     TaskList: Array<any> 
    
// }

const TaskList = ({TaskList} ) => {

    const columns = [
        {
          title: 'Task Id',
          dataIndex: 'tid',
          key: 'tid'
        },
        {
            title: 'Task Name',
            dataIndex: 'task_name',
            key: 'task_name'
          },
          {
            title: 'Project',
            dataIndex: 'project',
            key: 'project'
          },
          {
            title: 'Comments',
            dataIndex: 'comments',
            key: 'comments'
          },
          {
            title: 'Task Edit',
            key: 'edit',
            render: (text, record) => (
              <Space size="middle">
                <a>Edit</a>
              </Space>
            ),
          },
          {
            title: 'Task Delete',
            key: 'delet',
            render: (text, record) => (
              <Space size="middle">
                <a>delete</a>
              </Space>
            ),
          }
        
        ]


    return (<>
    <Table columns={columns} dataSource={TaskList} />
     </>)



}


export default TaskList