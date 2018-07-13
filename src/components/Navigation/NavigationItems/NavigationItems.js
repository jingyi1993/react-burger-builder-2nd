import React from 'react';
import Classes from './navigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems =(props) =>(
    <ul className={Classes.NavigationItems}>

        <NavigationItem link="/" active> Burger Builder </NavigationItem>
        <NavigationItem link="/" active> CheckOut</NavigationItem>


    </ul>
);

export default navigationItems;