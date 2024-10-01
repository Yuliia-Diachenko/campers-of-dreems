import css from './CamperPage.module.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCamper } from '../../redux/campers/operations';
import { selectCamper } from '../../redux/campers/selectors';
import NavFeatures from '../../components/NavFeatures/NavFeatures';
import icons from '../../image/symbol-defs.svg';

export default function CamperPage() {
    const dispatch = useDispatch();
    const camper = useSelector(selectCamper);
    const idCamp = camper.id;    
    const {id} = useParams();

    useEffect(() => {
        
          dispatch(fetchCamper(id));      
      }, [ dispatch, id ]);

    return(
    
        <div className={css.container}>
          <div>
          <h3 className={css.name}>{camper.name }</h3>
          <div className={css.location}><span className={css.common}><svg width="20" height="20">
                    <use href={`${icons}#icon-star`}></use>
                </svg><span className={css.rating}>{camper.rating}(2 Reviews)</span></span>
          <span className={css.common}><svg width="16" height="16">
                    <use href={`${icons}#icon-map`}></use>
                </svg>{camper.location }</span>
          </div>
          <p className={css.price}>&#8364;{camper.price?.toFixed(2)}</p>
          </div>
          <div>
            <ul className={css.photoContainer}>
                <li >
                <img className={css.photo} width='292' height='312' src={`https://ftp.goit.study/img/campers-test-task/${idCamp}-1.webp`} alt="photo" />
                </li>
                <li >
                <img className={css.photo} width='292' height='312' src={`https://ftp.goit.study/img/campers-test-task/${idCamp}-2.webp`} alt="photo" />
                </li>
                <li >
                <img className={css.photo} width='292' height='312' src={`https://i.pinimg.com/564x/da/c1/c0/dac1c088884edd1e8d5c77cf99716179.jpg`} alt="photo" />
                </li>
                <li >
                <img className={css.photo} width='292' height='312'  src={`https://i.pinimg.com/564x/b8/a0/13/b8a013c03dde96355849307ed4cbeef1.jpg`} alt="photo" />
                </li>
            </ul>
          </div>
       <p className={css.discription}>{camper.description}</p>
        <NavFeatures />
        </div>
       
    )
}