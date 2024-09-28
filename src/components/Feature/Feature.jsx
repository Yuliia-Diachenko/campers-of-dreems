import css from './Feature.module.css';
import BookForm from '../BookForm/BookForm';
import icons from '../../image/symbol-defs.svg';

export default function Feature() {

    return (
        <div className={css.container}>
        <div className={css.containerFeature}>
            <div className={css.feature}>
                <span className={css.image}>
                <svg width="20" height="20">
                    <use href={`${icons}#icon-diagram`}></use>
                </svg>
                Automatic
                </span>
                <span className={css.image}>
                <svg  width="20" height="20">
                    <use href={`${icons}#icon-wind`}></use>
                </svg>
                AC
                </span>
                <span className={css.image}>
                <svg  width="20" height="20">
                    <use href={`${icons}#icon-fuel-pump`}></use>
                </svg>
                Petrol
                </span>
                <span className={css.image}>
                <svg  width="20" height="20">
                    <use href={`${icons}#icon-cup-hot`}></use>
                </svg>
                Kitchen
                </span>
                <span className={css.image}>
                <svg  width="20" height="20">
                    <use href={`${icons}#icon-ui-radios`}></use>
                </svg>
                Radio
                </span>        
            </div>
                <div className={css.detals}>
                    <h4 className={css.headerDetals}>Vehicle details</h4>
                    <div className={css.detalsList}>
                       <div className={css.detalsLeft}> 
                        <ul className={css.ul}>
                            <li>Form</li>
                            <li>Length</li>
                            <li>Width</li>
                            <li>Height</li>
                            <li>Tank</li>
                            <li>Consumption</li>
                        </ul></div>
                        <div className={css.detalsRight}>
                            <ul className={css.ul}>
                            <li>Panel truck</li>
                            <li>5.4 m</li>
                            <li>2.01 m</li>
                            <li>2.05 m</li>
                            <li>132 I</li>
                            <li>12.4l/100km</li>
                            
                        </ul></div>
                    </div>
                </div>
        </div>
        <BookForm/>
        </div>
    )

}