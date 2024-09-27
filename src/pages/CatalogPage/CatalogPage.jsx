import css from './CatalogPage.module.css';
import {Link, useLocation} from 'react-router-dom';
import { useId } from "react";

export default function CatalogPage({campers}) {
    const location = useLocation();
    const fieldId = useId();
    const geolocation = navigator.geolocation.getCurrentPosition();

    return(
        <div className={css.container}>
            <aside>
                <form action="">
                    <label htmlFor="">Location</label>
                    <input type="text" id={`${fieldId}-location`} placeholder={geolocation || "Kyiv, Ukraine"}/>
                </form>
                <div>
                    <p>Filters</p>
                    <h4>Vehicle equipment</h4>
                    <div></div>
                    <ul>       
                        <li className={css.filterBtn}>
                            <span>AC</span>
                        </li>
                        <li className={css.filterBtn}>
                            <span>Automatic</span>
                        </li>
                        <li className={css.filterBtn}>
                            <span>Kitchen</span>
                        </li>
                        <li className={css.filterBtn}>
                            <span>TV</span>
                        </li>
                        <li className={css.filterBtn}>
                            <span>Bathroom</span>
                        </li>
                    </ul> 
                    </div>
                    <div>
                    <h4>Vehicle type</h4>
                    <ul>
                        <li className={css.filterBtn}>
                                <span>Van</span>
                            </li>
                            <li className={css.filterBtn}>
                                <span>Fully Integrated</span>
                            </li>
                            <li className={css.filterBtn}>
                                <span>Alcove</span>
                            </li>
                    </ul>
                    </div>
                    </aside>
                <div>
<ul className={css.list}>
      {campers.map((camper) => (
        <li key={camper.id} >
            <Link to={`/campers/${camper.id}`} state={{ from: location }} className={css.link} >{camper}</Link>
        </li>
      ))}
    </ul>
    </div>    
    </div>
    )
}