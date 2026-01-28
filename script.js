fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
    console.log({
      userId: data.userId,
      id: data.id,
      title: data.title,
      completed: data.completed
    });
  })
  .catch(() => {
  });
