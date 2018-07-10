import React,{Component} from 'react';
import Aux from '../../../src/hoc/Aux';
import Burger from '../../components/Burger/Burger';
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
    meat:0}
    };
    //the state is an object, not an array;
    //when we use them in burger, cannot use map mathod

    render(){
        return(
            <Aux>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                <div>Build Controls</div>
            </Aux>
        );
    }
}
export default BurgerBuilder;