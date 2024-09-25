import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
}

export default function Navigation() {
  
  return (
    
    <nav className={css.container}>
      <NavLink  to="/">
      <img src="../../../public/Logo.svg"/>
      </NavLink>     
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/catalog">
        Catalog
      </NavLink>     
    </nav>
  
  );
}