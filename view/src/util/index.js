const createTodo = async (todo) => {
  try {
   const res = await fetch('/api/todos', {
       method: 'POST',
       body: todo,
   })
   return res.json();
  } catch (err) {
      return { err };
  }

};

const getTodos = async () => {
    try {
      const res = await fetch('/api/todos');
      return res.json();
    } catch (err) {
        return { err };
    }
};

const removeTodo = async (id) => {
    try {
      const res = await fetch(`/api/todos/${id}`, {
          method: 'DELETE',
      })
      return 'Item deleted.';
    } catch (err) {
        return { err };
    }
}

export { createTodo, getTodos, removeTodo };