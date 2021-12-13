import React from 'react'
import VisibilityFilter from './VisibilityFilter'
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList'

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibilityFilter />
    <TodoList />
  </div>
)

export default TodoApp