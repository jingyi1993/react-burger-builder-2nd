import React,{Component} from 'react';
import Aux from '../../../src/hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OderSummary';


const INGREDIENT_PRICES = {
    salad:0.5,
    cheese: 0.4,
    meat:1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={...};
    // }

    state={
    ingredients:{
    salad:0,
    bacon:0,
    cheese:0,
    meat:0},
        price:4,
        purchasable:false,
        purchasing:false,
    };
    //the state is an object, not an array;
    //when we use them in burger, cannot use map mathod;
    purchaseContinue =() =>{
        alert('continue!')
    };
    purchaseCancelHandler =()=>{
       this.setState({purchasing:false})
    };
    //check if the checkout button is clicked;
    purchaseHandler  =() => {
        this.setState({
            purchasing:true
        })
    };

    addIngredientHandler =(type)=> {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.price;
       const updatedPrice= oldPrice + priceAddition;
        this.setState({
            ingredients:updatedIngredients,
            price:updatedPrice,
        });
        // console.log(this.state.price);
        this.updatePurchaseState(type);

    };
    removeIngredientHandler =(type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount-1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.price;
        const updatedPrice=oldPrice-priceAddition;
        if(updatedIngredients[type]<0){
            updatedIngredients[type]=0;
        }
        this.setState({
            ingredients:updatedIngredients,
            price:updatedPrice,
        });
        this.updatePurchaseState(type);

    };
//calculate the sum of the ingredients;
    updatePurchaseState =(type) =>{

        const ingredients = {
            ...this.state.ingredients
        };
        // let orderTotal =0;
        // for(let key in ingredients){
        //
        //     orderTotal += ingredients[key];
        // }
        // console.log(orderTotal);

        const sum =Object.keys(ingredients)
        //[salad,cheese, bacon,meat]
        .map(a=>{
            return ingredients[a]
            //[0,1,2,3]
        })
            .reduce((sum,el)=>{
                return sum+el;
            },1);
        console.log(sum);
        this.setState({
            purchasable:sum!==0
        })
    };
    render(){
        const disabledInfo={...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        };
        //state={
        //     ingredients:{
        //     salad:boolean,
        //     bacon:boolean,
        //     cheese:boolean,
        //     meat:boolean}
        //     };

        return(
            <Aux>
                <Modal show ={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                    purchaseCanceled={this.purchaseCancelHandler}
                                  purchaseContinue={this.purchaseContinue}
                    price={this.state.price}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabledInfo={disabledInfo}
                price={this.state.price}
                purchasable={this.state.purchasable}
                ordered= {this.purchaseHandler}/>

            </Aux>
        );
    }
}
export default BurgerBuilder;