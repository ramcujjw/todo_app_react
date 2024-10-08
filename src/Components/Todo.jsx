import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Container, Typography, CircularProgress } from '@mui/material';
import { connect } from 'react-redux';
import { fetchData } from "../action";



const Todo = ({data,loading,error,fetchData}) => {
  // const [todos, setTodos] = useState([]);

  

  useEffect(() => {
    fetchData()

    // axios
    //   .get('https://jsonplaceholder.typicode.com/todos')
    //   .then((response) => {
    //     setTodos(response.data); 
    //     // setLoading(false);
    //   })
    //   .catch((error) => {
    //     setError('Error fetching data'); 
    //     // setLoading(false);
    //   });
  }, []);




  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Todo List
      </Typography>
      <List>
        {data.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText primary={todo.id} />
            <ListItemText primary={todo.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error
});


export default connect(mapStateToProps,{fetchData}) (Todo);
