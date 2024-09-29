import { useSelector } from "react-redux";
import css from './FiltersFormComponent.module.css';
import icons from '../../image/symbol-defs.svg';

export default function FiltersFormComponent()  {

  const filter = useSelector(state => state.filters.form);

  return (
    <div className={css.containerFilterComponent}>
      <button  className={css.filterButton}>
                        <svg  width="20" height="20">
                            <use href={`${icons}#icon-bi_grid-1x2`}></use>
                        </svg>Van {filter === "van" && "is active"}
      </button>
      <button className={css.filterButton}>
                        <svg  width="20" height="20">
                            <use href={`${icons}#icon-bi_grid`}></use>
                        </svg>Fully Integrated {filter === "fully Integrated" && "is active"}</button>
      <button className={css.filterButton}><svg  width="20" height="20">
                            <use href={`${icons}#icon-bi_grid-3x3-gap`}></use>
                        </svg>Alcove {filter === "alcove" && "is active"}</button>
    </div>
  );
};

