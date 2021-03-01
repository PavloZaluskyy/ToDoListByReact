import React  from "react";
import PropTypes from 'prop-types';
import TodoItem from "../TodoItem/todoItem";

import "./todoList.css";

class TodoList extends React.Component {

  constructor(props){
    super(props);
    
  }
  
  render(){
   const { tasksList, removeTask, completedTask } = this.props;
   return(
    <ul className="todo-list">
      {tasksList.map(({ id, title, completed }) => (
        <TodoItem key={id}  id={id} completedTask={completedTask} removeTask={removeTask} title={title} completed={completed} />
      ))}
    </ul>
   )
  }
}


TodoList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  completedTask: PropTypes.func,
}

TodoList.defaultProps = {
  tasksList: [],
  removeTask: ()=>{},
  completedTask: ()=>{}
}

export default TodoList;
