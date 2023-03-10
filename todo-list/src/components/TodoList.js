import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import { api } from '../api/api';


function TodoList() {
    const [todos, setTodos] = useState([]);
    
  
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    };

    const updateTodos = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updateTodos);
    }

    return (
    <>
        <h1>Todo list</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo 
            todos={todos} 
            completeTodo={completeTodo} 
            removeTodo={removeTodo} 
            updateTodos={updateTodos} 
        />
    </>
  );
}

export default TodoList;