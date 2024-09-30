
import css from "../Navigation/Navigation.module.css";
import clsx from 'clsx';

export const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  }
  