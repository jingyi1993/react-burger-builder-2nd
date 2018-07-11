import React,{Component} from 'react';
import Aux from '../../../src/hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


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
    };
    //the state is an object, not an array;
    //when we use them in burger, cannot use map mathod;

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

    updatePurchaseState =(type) =>{
        const ingredients = {
            ...this.state.ingredients
        };
        let orderTotal =0;
        for(let key in ingredients){

            orderTotal += ingredients[key];
        }
        console.log(orderTotal);

        if (orderTotal==0) {
            this.setState({
                purchasable:false
            })
        }
        else{
            this.setState({
                purchasable:true
            })
        }
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
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabledInfo={disabledInfo}
                price={this.state.price}
                purchasable={this.state.purchasable}/>
            </Aux>
        );
    }
}
export default BurgerBuilder;