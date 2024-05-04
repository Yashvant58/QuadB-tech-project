
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();
  console.log(tasks);
  
  const handleDelete = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };
  
  if (!Array.isArray(tasks)) {
    return <div>No tasks found</div>;
  }
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
