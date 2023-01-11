import React, { useState } from "react";
import PropTypes from "prop-types";

const style = {
  marginBottom: "15px",
};

function AddTodo(props) {
  const [value, setValue] = useState("");


  function submitHend(event) {
    event.preventDefault();

    if (value) {
      props.onCreate(value);
      setValue('')
    }
  }

  return (
    <form style={style} onSubmit={submitHend}>
      <input value={value} onChange={event => setValue(event.target.value)} />
      <button type="submit">Добавить задач</button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
