import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from 'clsx';

export default function Navigation() {
 const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  }
  return (    
 
    <nav className={css.container}>    

      <div className={css.groopNav}>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
          <NavLink className={buildLinkClass} to="/catalog">
            Catalog
          </NavLink>
          </div>

    </nav>
  
  );
}