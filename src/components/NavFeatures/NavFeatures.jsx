import { NavLink, Outlet } from "react-router-dom";
import css from './NavFeatures.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  }
export default function NavFeatures() {
    return (   
            <div >
                <ul className={css.container}>
                    <li><NavLink to="features" className={buildLinkClass} >Features</NavLink></li>
                    <li><NavLink to="reiews" className={buildLinkClass}>Reiews</NavLink></li>
                </ul>
            <Outlet />
            </div>
      )
}