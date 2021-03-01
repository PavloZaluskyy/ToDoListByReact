import React  from "react";
import PropTypes from 'prop-types';

import "./todoItem.css";


class TodoList extends React.Component {

    constructor(props){
      super(props);
    }
    
    render(){
        const { title, completed, completedTask, removeTask, id} = this.props;
        return (
            <li onClick={()=>completedTask(id)} className="todo-item">
                <i className={completed ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
                <span  className={completed ? 'completed text' : 'text'}>{title}</span>
                <i onClick={()=> removeTask(id)} className="fas fa-times" />
            </li>
        )
    }
}

TodoList.propTypes = {
    title: PropTypes.string,
    completed: PropTypes.bool,
    removeTask: PropTypes.func,
    completedTask: PropTypes.func,
    id: PropTypes.number
}
  
TodoList.defaultProps = {
    title: '',
    completed: false,
    removeTask: ()=> {},
    completedTask: ()=>{},
    id: 0
}

export default TodoList;