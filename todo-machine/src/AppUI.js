import React from 'react'
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoButton from './components/CreateTodoButton';
import { TodoContext } from './TodoContext';
import { Modal } from './Modal';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    uncompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)

  return(
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {error && <p>Hubo un error, desespérate</p>}
        {loading && <p>Éstamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {completeTodo(todo.text)}}
            onUncomplete={() => {uncompleteTodo(todo.text)}}
            deleteTodo={() => {deleteTodo(todo.text)}}
            />
            ))}
      </TodoList> 

      {openModal && (
        <Modal>
        <p>{searchedTodos[0].text}</p>
      </Modal>
      )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  )
}

export default AppUI;