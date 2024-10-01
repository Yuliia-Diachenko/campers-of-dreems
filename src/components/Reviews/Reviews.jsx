import css from './Reviews.module.css';
import BookForm from '../BookForm/BookForm.jsx';
import icons from '../../image/symbol-defs.svg';

export default function Reviews() {

    return (
        <div className={css.container}>
            <div className={css.reviews}>
                <ul className={css.list}>
                    
                    <li>
                    <div className={css.avatarContainer}>
                    <span className={css.avatarCircle}>A</span>
                    <div className={css.nameContainer}>
                        <h6 className={css.name}>Alice</h6>
                        <svg width="96" height="30">
                            <use href={`${icons}#icon-rate-five`}></use>
                        </svg>
                    </div>   
                        </div>
                        <p className={css.text}>The Mavericks panel truck was a perfect choice for my solo road trip.
                             Compact, easy to drive, and had all the essentials. 
                             The kitchen facilities were sufficient, and the overall 
                             experience was fantastic.</p>
                    </li>
                    <li>
                    <div className={css.avatarContainer}>
                    <span className={css.avatarCircle}>B</span>
                    <div className={css.nameContainer}>
                        <h6 className={css.name}>Bob</h6>
                        <svg width="96" height="30">
                            <use href={`${icons}#icon-rate-three`}></use>
                        </svg>
                    </div>
                    </div>
                        <p className={css.text}>The Mavericks panel truck was a perfect choice for my solo road trip.
                             Compact, easy to drive, and had all the essentials. 
                             The kitchen facilities were sufficient, and the overall 
                             experience was fantastic.</p>

                    </li>
                </ul>
            </div>
            <BookForm/>
        </div>
    )

}