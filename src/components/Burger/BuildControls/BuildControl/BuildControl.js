import React from 'react';
import Classes from './BuildControl.css';
const buildControl =(props)=>(
    <div  className={Classes.BuildControl}>

        <div className={Classes.Label}>{props.label}</div>
        <button className={Classes.Less}>Less</button>
        <button className={Classes.More}>Add</button>

    </div>
);

export default buildControl;