import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";
import icons from '../../image/symbol-defs-logo.svg';
import { Link } from "react-router-dom";

export default function AppBar() {
  return (
    <header className={css.header}>    
        <Link to='/'><svg width="136" height="16" className={css.logo}>
            <use href={`${icons}#icon-Logo`}></use>
        </svg></Link>
        <Navigation />   
    </header>
  );
}