import React from 'react';
import {Link} from "react-router-dom";
import classes from './header.module.css';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';



export default function Header() {

    const { user, logout } = useAuth();
   
    const { cart } = useCart();
    
    

  return <header className={classes.header}>
   <div className={classes.container}>
   <Link to="/" className={classes.logo}>
   <img className={classes.logoImg} src="https://cdn-icons-png.flaticon.com/256/10823/10823283.png" alt="logo image" width={60} height={60} />
   Hunger'Z
  </Link>
   <nav>
    <ul>
        
           {user ? (
            <li className={classes.menu_container}>
                <Link to="/profile">{user.name}</Link>
                <div className={classes.menu}>
                    <Link to="/profile">Profile</Link>
                    <Link to="/orders">Orders</Link>
                    <a onClick={logout}>Logout</a>
                </div>
            </li> 
           ): (
            <Link to="/login">Login</Link>
        )}

        <li className={classes.cartBag}>
            <Link to="/cart" >
                <img src="/images/shoppingCart.png" alt="Cart image" width={60} height={60}/>
                {cart.totalCount >0 && <span className={classes.cart_count}>{cart.totalCount}</span>}
            </Link>
        </li>
    </ul>
   </nav>
   </div>
   </header>
  
}

  