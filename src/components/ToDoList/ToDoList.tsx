import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import { ITask } from "../../interfaces/task";
import Task from "../Task/Task";
import styles from './ToDoList.module.css';

interface IToDoListInputData {
    refresh: boolean,
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>,
    filter: string
}

const ToDoList = ({ refresh, setRefresh, filter }: IToDoListInputData) => {
    const [tasks, setTasks] = useState<ITask[]>();

    useEffect(() => {
        api.get(`/tasks?status_like=${filter}`)
            .then((result) => setTasks(result.data))
            .catch(() => alert('Ops! Algo deu errado! Recarregue a página e tente novamente.'));
    }, [refresh, filter]);

    const deleteTask = (id: string): void => {
        api.delete(`/tasks/${id}`)
            .then(() => setRefresh(!refresh))
            .catch(() => alert('Ops! Algo deu errado! Recarregue a página e tente novamente.'));
    }

    const updateTask = (task: ITask): void => {
        const newBody = {
            id: task.id,
            title: task.title,
            status: task.status==='active'?'completed': 'active'
        };

        api.put(`/tasks/${task.id}`, newBody)
            .then(() => setRefresh(!refresh))
            .catch(() => alert('Ops! Algo deu errado! Recarregue a página e tente novamente.'));
    }

    return(<div className={styles.toDoListBox}>
        {tasks===undefined && <h2 className={styles.toDoListInfo}> Buscando informações... </h2>}

        {tasks!==undefined && tasks.length===0 && <h2 className={styles.toDoListInfo}> Você ainda não registrou tasks </h2>}

        <ul>
            {tasks && tasks.map((task: ITask) => <Task key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />)}
        </ul>
    </div>)
}

export default ToDoList;
