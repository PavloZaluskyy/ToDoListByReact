import { ADD_TASK, REMOVE_TASK, COMPLETED_TASK, CHANGE_FILTER } from "../constants";

export const addTask = (id, title, completed) => ({
    type: ADD_TASK,
    id,
    title,
    completed
});

export const removeTask = id => ({
    type: REMOVE_TASK,
    id
} )

export const completedTask = id => ({
    type: COMPLETED_TASK,
    id
} )

export const changeFilter = activeFilter => ({
    type: CHANGE_FILTER,
    activeFilter
})