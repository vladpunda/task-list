import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

const style = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2px 5px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "3px",
  },
  input: {
    marginRight: "5px",
  },
};

function TodoItem(props) {
  const {removeTodo} = useContext(Context);
  const classes = [];

  if (props.todo.completed) {
    classes.push("done");
  }

  return (
    <li style={style.li}>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={props.todo.completed}
          style={style.input}
          onChange={() => props.onChange(props.todo.id)}
        />
        <strong>{props.i + 1}</strong>
        &nbsp;
        {props.todo.title}
      </span>
      <button className="rm" onClick={ ()=>removeTodo(props.todo.id)}>&times;</button>
    </li>
  );
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  i: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
