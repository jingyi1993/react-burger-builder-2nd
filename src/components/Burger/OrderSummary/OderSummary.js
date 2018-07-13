import React from 'react';
import  Aux from '../../../hoc/Aux';
import Button from '../../../components/UI/Button/Button';


const orderSummary =(props) => {
    const ingredientSummary =Object.keys(props.ingredients)
    //[salad,cheese,meat,bacon]
        .map(a=>{
            return <li key={a}>
                <span style={{textTransform:'capitalize'}}>
                    {a}
                    </span>:{props.ingredients[a]}
                    </li>
            //[salad:1,cheese:0,meat:2,bacon:1]
        });

    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price:{props.price}</strong></p>
            <p>Continue to check out?</p>
            <Button btnTpre="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnTpre="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>)

};
export default orderSummary;