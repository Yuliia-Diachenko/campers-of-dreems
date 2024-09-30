import css from './Camper.module.css';
import { CiMap } from "react-icons/ci";
import icons from '../../image/symbol-defs.svg';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
// import clsx from 'clsx';

export default function Camper({camper}) {

    // const buildLinkClass = ({ isActive }) => {
    //     return clsx(css.link, isActive && css.active);
    //   }

    // add ,00
    const originalNumber =camper?.price;
    const roundedNumber = originalNumber?.toFixed(2); // Округлено до двох десяткових знаків
    const parts = roundedNumber?.split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1] || '00'; // Якщо немає десяткової частини, додаємо "00"
    const finalFormattedNumber = `${integerPart}.${decimalPart}`;
 

return (
    <div className={css.container}>
        <div>
            <img src={camper.gallery[0].thumb} alt="camper" className={css.camperImg}/>
        </div>
    <div className={css.detalsContainer}>
    <div className={css.priceContainer}>
        <h3 className={css.nameCamper}>{camper.name}</h3>
    <div className={css.price}>
        <h3 className={css.priceCamper}>&#8364;{finalFormattedNumber}</h3>
        <button className={css.heart}>
        <svg  width="20" height="20" >
            <use href={`${icons}#icon-heart`}></use>
        </svg>
        </button>
    </div>
</div>
<div>
    <div className={css.starIcon}>
        <svg  width="20" height="20">
            <use href={`${icons}#icon-star`}></use>
        </svg><span>{camper.rating}</span><span className={css.reviews}>(2 Reviews)</span>
        <CiMap /><span>{camper.location}</span>
        
    </div>


<p className={css.description}>{camper.description}</p>
<div className={css.feature}>
                <span className={css.image}>
                <svg width="20" height="20">
                    <use href={`${icons}#icon-diagram`}></use>
                </svg>
                {camper.transmission}
                </span>
                
                    {camper.AC === true ? (<span className={css.image}>
                    <svg  width="20" height="20">
                    <use href={`${icons}#icon-wind`}></use></svg>АС</span>) : false}
                
                <span className={css.image}>
                <svg  width="20" height="20">
                <use href={`${icons}#icon-fuel-pump`}></use>
                </svg>
                {camper?.engine}
                </span>
                
                    {camper.kitchen === true ? (<span className={css.image}>
                    <svg  width="20" height="20">
                    <use href={`${icons}#icon-cup-hot`}></use></svg>Kitchen</span>) : false}
                            
                    {camper.radio === true ? (<span className={css.image}><svg  width="20" height="20">
                    <use href={`${icons}#icon-ui-radios`}></use></svg>Radio</span>) : false}
             
            </div></div>
           <Link to={`/catalog/${camper.id}`}><Button>Show more</Button></Link>
</div>
    </div>
)
}