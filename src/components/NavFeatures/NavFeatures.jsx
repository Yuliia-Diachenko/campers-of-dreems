import { NavLink, Outlet } from "react-router-dom";
import css from './NavFeatures.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  }
export default function NavFeatures() {
    return (   
            <div >
                <div className={css.container}>
                    <NavLink to="features" className={buildLinkClass} >Features</NavLink>
                    <NavLink to="reviews" className={buildLinkClass} >Reviews</NavLink>

                </div>
            <Outlet />
           
            </div>
      )
}