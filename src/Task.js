 import React from 'react';

 import './Task.css'
 
 const Task = (props) => {
    const { date, info, important, id, isActive, finishDate } = props.task;


    if(isActive) {
        return (
            <div className='task-active'>
            <span style={(important ? {color: 'red'} : null)}>
            {info} -
            </span>
            
            <span> zrobić do - {date}</span>

            <button className='active-important-btn' onClick={() => props.done(id)}>Zostało zrobione</button>

            {(important ? (<button className='active-important-btn' onClick={() =>props.change(id)}>Usuń priorytet</button>) : null)}

            <button onClick={() => props.delete(id)}
            className='delete-btn'>X</button>
        </div>
    );
    } else {
        const finish = new Date(finishDate).toLocaleString('pl');
        return(
            <div className='task-done'>
            <span style={(important ? {color: 'red'} : null)}>
            {info} -
            </span>
            <span> wykonane - {finish}</span>
            <button onClick={() => props.delete(id)}
            className='delete-btn'>X</button>
            </div>
        )
        }
        }
  
 export default Task;