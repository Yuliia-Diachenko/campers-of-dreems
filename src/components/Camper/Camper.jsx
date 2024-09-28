import css from './Camper.module.css';
import  { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import { CiMap, CiHeart } from "react-icons/ci";
import icons from '../../image/symbol-defs.svg';
import Button from '../Button/Button';
import clsx from 'clsx';

export default function Camper({camper}) {

    const buildLinkClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
      }
    // cut text
    const [text, setText] = useState('Indulge in the ultimate road trip experience with the El Monte Class A Family Sleeper [AF]. This fully integrated motorhome is a haven on wheels, offering unmatched luxury and comfort for families or groups of six.');
    useEffect(() => {
        const container = camper.description;
        const truncatedText = container.innerText.slice(0, 50) + '...';    
    setText(truncatedText);
}, []);

    // add ,00
    const originalNumber =camper.price;
    const roundedNumber = originalNumber.toFixed(2); // Округлено до двох десяткових знаків
    const parts = roundedNumber.split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1] || '00'; // Якщо немає десяткової частини, додаємо "00"
    const finalFormattedNumber = `${integerPart}.${decimalPart}`;
    console.log(finalFormattedNumber); // Виведе "42.00"

return (
    <div className={css.container}>
        <div>
<img src={camper.gallery[0]?.thumb} alt="camper" className={css.camperImg}/>
</div>
<div>
<h3 className={css.nameCamper}>{camper.name}</h3>
<h3 className={css.priceCamper}>{finalFormattedNumber}</h3>
</div>
<div>
    <div>
    <FaStar /><span>{camper.rating}</span><span>(2 Reviews)</span>
        <CiMap /><span>{camper.location}</span>
        <button className={buildLinkClass} ><CiHeart /></button>
    </div>
<div><p>{text}</p></div>
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
                {camper.engine}
                </span>
                
                    {camper.kitchen === true ? (<span className={css.image}>
                    <svg  width="20" height="20">
                    <use href={`${icons}#icon-cup-hot`}></use></svg>Kitchen</span>) : false}
            
                
                    {camper.radio === true ? (<span className={css.image}><svg  width="20" height="20">
                    <use href={`${icons}#icon-ui-radios`}></use></svg>Radio</span>) : false}
             
            </div>
            <Button>Show more</Button>
</div>
    </div>
)
}