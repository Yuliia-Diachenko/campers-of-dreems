import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import icons from '../../image/symbol-defs-logo.svg';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
}

export default function Navigation() {
  
  return (    
    <nav className={css.container}>      
      <div className={css.nav}>
      <NavLink  to="/" className={css.logo}>
      <svg width="136" height="16">
          <use href={`${icons}#icon-Logo`}></use>
      </svg>
      </NavLink> 
      <div className={css.groopNav}>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
          <NavLink className={buildLinkClass} to="/catalog">
            Catalog
          </NavLink>
          </div>
      </div>
    </nav>
  
  );
}