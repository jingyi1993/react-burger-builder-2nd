import React,{Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component{
    state={
        ingredients:{
            salad:1,
            meat:1,
            cheese:1,
            bacon:1,
        }
    };

    //new method instead of <Link> method;
    checkoutCanceledHandler=()=>{
        this.props.history.goBack();
    };

    checkoutContinuedHandler =()=> {
        this.props.history.replace('/Checkout/contact-data')
    }

    render(){
        console.log(this.props);

        return(
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                checkoutCanceled={this.checkoutCanceledHandler}
                                 checkoutContinued={this.checkoutContinuedHandler}
                />
            </div>

        )
    }

};

export default Checkout;