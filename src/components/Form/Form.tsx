import React, { useState } from "react";
import styles from './Form.module.css';
import { BsPlusLg } from "react-icons/bs";
import { api } from "../../api/api";

interface IFormInputData {
  refresh: boolean,
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>,
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

const Form = ({ refresh, setRefresh, setFilter }: IFormInputData) => {
  const [newTask, setNewTask] = useState('');

  const saveTask = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    api.post('/tasks', { title: newTask, status: 'active' })
      .then(() => { setNewTask(''); setRefresh(!refresh) })
      .catch(() => alert('Ops! Algo deu errado! Recarregue a página e tente novamente.'));
  }

  return (<div className={styles.formBox}>
    <form onSubmit={(ev) => saveTask(ev)} className={styles.formInput}>
      <input type="text" placeholder="Adicionar tarefa" value={newTask} onChange={(ev) => setNewTask(ev.currentTarget.value)} />
      <button type="submit"> 
        <BsPlusLg />
      </button>
    </form>

    <select className={styles.formSelect} onChange={(ev) => setFilter(ev.currentTarget.value)}>
      <option value="">Todos</option>
      <option value="completed">Finalizados</option>
      <option value="active">Em andamento</option>
    </select>
  </div>);
}

export default Form;
