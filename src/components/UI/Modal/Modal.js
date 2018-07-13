import React from 'react';
import Classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import BackDrop from '../../../components/UI/BackDrop/BackDrop';

const modal =(props) => {
    console.log(props);
    return(
        <Aux>
            <BackDrop show={props.show} clicked={props.modalClosed}/>
            <div className={Classes.Modal}
                 style={{
                     transform:props.show? 'translateY(0)':'translateY(-100vh)',
                     opacity:props.show?'1':'0'
                 }}>
                {props.children}
            </div>
        </Aux>
    )
}





export default modal;