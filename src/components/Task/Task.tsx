import { BsTrashFill } from "react-icons/bs";
import { api } from "../../api/api";
import { ITask } from "../../interfaces/task";
import styles from "./Task.module.css";

interface ITaskInputData {
    task: ITask,
    deleteTask: (id: string) => void
    updateTask: (task: ITask) => void
}

const Task = ({ task, deleteTask, updateTask }: ITaskInputData) => {
    return(
        <li key={task.id} className={styles.taskBox} >
            <div className={styles.taskInfo}>
                <input type='checkbox' checked={task.status==='completed'} name={task.title} onChange={() => updateTask(task)} />
                <label style={ task.status==='completed' ? { textDecoration: 'line-through'} : undefined }> {task.title} </label>
            </div>

            <button className={styles.taskDeleteIcon} value={task.id} onClick={(ev) => deleteTask(ev.currentTarget.value)}>
                <BsTrashFill />
            </button>
        </li>
    )
}

export default Task;
