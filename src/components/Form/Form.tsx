import React from "react";
import styles from './Form.module.css';
import { BsPlusLg } from "react-icons/bs";

const Form = () => {
  return (
    <form className={styles.formBox}>
      <input type="text" className={styles.formInput} placeholder="Adicionar tarefa" />
      <button className={styles.formAddButton} type="submit"> 
        <BsPlusLg />
      </button>

      <div className="select">
        <select className={styles.formSelect}>
          <option value="todos">Todos</option>
          <option value="finalizados">Finalizados</option>
          <option value="em-andamento">Em andamento</option>
        </select>
      </div>
    </form>
  );
}

export default Form;