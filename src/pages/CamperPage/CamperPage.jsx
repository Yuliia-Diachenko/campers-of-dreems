import css from './CamperPage.module.css';
import { useEffect } from 'react';
import NavFeatures from '../../components/NavFeatures/NavFeatures';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCamper } from '../../redux/campers/operations';
import { selectCamper } from '../../redux/campers/selectors';
import icons from '../../image/symbol-defs.svg';

export default function CamperPage() {
 
    const dispatch = useDispatch();
    const camper = useSelector(selectCamper);
    const idCamp = camper?.id;

    useEffect(() => {
        
          dispatch(fetchCamper());
      
      }, [ dispatch]);
    return(
    
        <div className={css.container}>
          <div>
          <h3 className={css.name}>{camper?.name || "Mavericks"}</h3>
          <div className={css.location}><span className={css.common}><svg width="20" height="20">
                    <use href={`${icons}#icon-star`}></use>
                </svg>{camper?.rating || "4.4(2 Reviews)"}</span>
          <span className={css.common}><svg width="16" height="16">
                    <use href={`${icons}#icon-map`}></use>
                </svg>{camper?.location || "Kyiv, Ukraine"}</span>
          </div>
          <p className={css.price}>€{camper?.price || "8000.00"}</p>
          </div>
          <div>
            <ul className={css.photoContainer}>
                <li className={css.photo}>
                <img src={`https://ftp.goit.study/img/campers-test-task/${idCamp}-1.webp`} alt="photo" />
                </li>
                <li className={css.photo}>
                <img src={`https://ftp.goit.study/img/campers-test-task/${idCamp}-2.webp`} alt="photo" />
                </li>
                <li className={css.photo}>
                <img src={`https://ftp.goit.study/img/campers-test-task/${idCamp}-3.webp`} alt="photo" />
                </li>
            </ul>
          </div>
       <p className={css.discription}>{camper?.discription || "Embrace simplicity and freedom with the Mavericks panel truck, an ideal choice for solo travelers or couples seeking a compact and efficient way to explore the open roads. This no-frills yet reliable panel truck offers the essentials for a comfortable journey, making it the perfect companion for those who value simplicity and functionality." }</p>
        <NavFeatures/>
        </div>
       
    )
}