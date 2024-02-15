import React from 'react';
import Task from './Task';

import "./TaskList.css"

const TaskList = (props) => {
    // const tasksInfo = props.tasks.map(task => (<Task  key={task.id} task={task} delete={props.delete}/>))

    const active = props.tasks.filter(task => task.isActive === true);
    const done = props.tasks.filter(task => task.isActive === false);


    if(done.length >= 2) {
        done.sort((a,b) => {
            return b.finishDate - a.finishDate
        })
    }

    if(active.length >= 2) {
        active.sort((a,b) => {
            a = a.date
            b = b.date

            if(a < b) return -1;
            if(a > b) return 1;
            return 0;
        })
    }

    


    const activeTasks = active.map(task => <Task className='active-task'  key={task.id} task={task} delete={props.delete} done={props.done} change={props.change}/>);
    const doneTasks = done.map(task => <Task  key={task.id} task={task} delete={props.delete} done={props.done}/>);



    const spanStyle = {
        fontSize: '11px',
        color: 'red',
    }

    return ( 
        <div className='tasks'>
            <hr />
            <div className='active'>
                <h2>Lista zadań do zrobienia</h2>
                {activeTasks.length > 0 ? activeTasks : <p>Brak zadań do wykonania</p>}
            </div>
            <hr />
            <div className='done'>
                <h2>Zadania zrobione ({doneTasks.length})</h2>
                {doneTasks.length > 5 && <span style={spanStyle}>Wyświetlanych jest tylko jedynie 5 ostatnich elementów</span>}
                {doneTasks.slice(0,5)}
            </div>
        </div>
     );
}
 
export default TaskList;