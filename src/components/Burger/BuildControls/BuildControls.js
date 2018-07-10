import React from 'react';
import Classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls =[
    { label:'Salad', type:'salad'},
    { label:'Bacon', type:'bacon'},
    { label:'Cheese', type:'cheese'},
    { label:'Meat', type:'meat'}
];

const buildControls = (props)=>(
    <div className={Classes.BuildControls}>

        {controls.map(a=>(
            <BuildControl key={a.label} label={a.label}/>
            )
        )}
    </div>

);

export default buildControls;