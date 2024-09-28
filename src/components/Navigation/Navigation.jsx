import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
}

export default function Navigation() {
  
  return (    
    <nav className={css.container}>      
      <NavLink  to="/" className={css.logo}>
      <img src="../../../public/Logo.svg"/>
      </NavLink> 
      <ul className={css.groopNav}>
          <li><NavLink className={buildLinkClass} to="/">
            Home
          </NavLink></li>
          <li><NavLink className={buildLinkClass} to="/catalog">
            Catalog
          </NavLink></li>  
      </ul>
    </nav>
  
  );
}