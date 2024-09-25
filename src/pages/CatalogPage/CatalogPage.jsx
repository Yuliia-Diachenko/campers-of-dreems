import css from './CatalogPage.module.css';
import {Link, useLocation} from 'react-router-dom';

export default function CatalogPage({campers}) {
    const location = useLocation();
  

    return(
        <div className={css.container}>
<ul className={css.list}>
      {campers.map((camper) => (
        <li key={camper.id} >
            <Link to={`/campers/${camper.id}`} state={{ from: location }} className={css.link} >{camper}</Link>
        </li>
      ))}
    </ul>
        </div>
    )
}