import React, { Component } from "react";
import { connect } from "react-redux";

import { addTask, removeTask, completedTask, changeFilter } from "../../actions/actionCreator";

import TodoList from "../../components/TodoList/todoList";
import Form from "../../components/Form/form";
import Filters from "../../components/Filters/filters";

import "./todo.css";


class ToDo extends Component{
    constructor(props){
        super(props)
        this.state = {  
            isLoaded: false,
            error: null,
            taskText: '',
            TASKS: {}
        }
    }

    handlerInputChange = ({target: {value}}) => {
      this.setState({
        taskText: value
      })
    }

    addTask = async ({key}) => {
      const { taskText } = this.state;

      if(taskText.length > 3 && key === 'Enter') {
        const { addTask } = this.props;

        addTask((new Date()).getTime(), taskText, false);
       
        this.setState({
          taskText: ''
        })
      }

    }

    componentDidMount(){
      setTimeout(()=>{
            this.setState({
              isLoaded: true,
              error: ''
            })   
          }, 500) 
      }

    filterTasks = (tasks, activeFilter) => {
      switch (activeFilter) {
        case 'completed':
          return tasks.filter(task => task.completed);
        case 'active':
          return tasks.filter(task => !task.completed);
        default:
          return tasks;
      }
    }

    getActiveTasksCounter = tasks => tasks.filter(task => !task.completed).length;

    render(){
        const {activeFilter, isLoaded, error, taskText} = this.state;
        const {tasks, removeTask, completedTask, filters, changeFilter} = this.props;
        const isTasksExist = tasks && tasks.length > 0;
        const filteredTasks = this.filterTasks(tasks, filters);
        const taskCounter = this.getActiveTasksCounter(tasks);
        if (error) {
          return <div>Помилка: {error}</div>;
        } else if (!isLoaded) {
          return <div><img src="./6.gif" /></div>;
        } else {
        return ( 
          <div className="todo-wrapper">
            <Form onKeyPress={this.addTask} onChange={this.handlerInputChange} value={taskText} />
            {isTasksExist && <TodoList tasksList={filteredTasks} completedTask={completedTask} removeTask={removeTask} />}
            {isTasksExist && <Filters changeFilter={changeFilter} amounts={taskCounter} activeFilter={filters} />}
          </div>
        );
      }
    }
}
export default connect(({tasks, filters}) => ({
    tasks,
    filters
}), { addTask, removeTask, completedTask, changeFilter})(ToDo);