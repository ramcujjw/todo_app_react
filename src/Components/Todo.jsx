import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Container, Typography, CircularProgress } from '@mui/material';

const Todo = () => {
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        setTodos(response.data); 
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching data'); 
        setLoading(false);
      });
  }, []);

  



  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Todo List
      </Typography>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText primary={todo.id} />
            <ListItemText primary={todo.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Todo;
