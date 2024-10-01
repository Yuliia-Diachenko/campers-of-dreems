import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCamper } from '../../redux/campers/operations';
import { selectCamper } from '../../redux/campers/selectors';
import css from './Reviews.module.css';
import BookForm from '../BookForm/BookForm.jsx';
import icons from '../../image/symbol-defs.svg';

export default function Reviews() {

    const dispatch = useDispatch();
    const camper = useSelector(selectCamper);
  console.log(camper);
    const {id} = useParams();

    useEffect(() => {
        
          dispatch(fetchCamper(id)); 

      }, [ dispatch, id ]);

    return (
        <div className={css.container}>
            <div className={css.reviews}>
                <ul className={css.list}>
                    
                    <li>
                    <div className={css.avatarContainer}>
                    <span className={css.avatarCircle}>{camper.reviews[0].reviewer_name.charAt(0).toUpperCase()}</span>
                    <div className={css.nameContainer}>
                        <h6 className={css.name}>{camper.reviews[0].reviewer_name}</h6>
                        <svg width="96" height="30">
                            <use href={`${icons}#icon-rate-five`}></use>
                        </svg>
                    </div>   
                        </div>
                        <p className={css.text}>{camper.reviews[0].comment}</p>
                    </li>
                    <li>
                    <div className={css.avatarContainer}>
                    <span className={css.avatarCircle}>{camper.reviews[1].reviewer_name?.charAt(0).toUpperCase()}</span>
                    <div className={css.nameContainer}>
                        <h6 className={css.name}>{camper.reviews[1].reviewer_name}</h6>
                        <svg width="96" height="30">
                            <use href={`${icons}#icon-rate-three`}></use>
                        </svg>
                    </div>
                    </div>
                        <p className={css.text}>{camper?.reviews[1]?.comment}</p>

                    </li>
                </ul>
            </div>
            <BookForm/>
        </div>
    )

}