import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCamper } from '../../redux/campers/operations';
import { selectCamper } from '../../redux/campers/selectors';
import css from './Feature.module.css';
import BookForm from '../BookForm/BookForm';
import icons from '../../image/symbol-defs.svg';


export default function Feature() {
   const dispatch = useDispatch();
    const camper = useSelector(selectCamper);
  
    const {id} = useParams();

    useEffect(() => {
        
          dispatch(fetchCamper(id));      
      }, [ dispatch, id ]);

    return (
        <>
        <hr color='#dadde1' border='1'/>
        <div className={css.container}>
        <div className={css.containerFeature}>
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
                        <use href={`${icons}#icon-fuel-pump`}></use></svg>{camper?.engine}
                    </span>

                    {camper.gas === true ? (<span className={css.image}><svg  width="20" height="20">
                        <use href={`${icons}#icon-fuel-pump`}></use></svg>Gas</span>) : false}  

                    {camper.TV === true ? (<span className={css.image}><svg  width="20" height="20">
                        <use href={`${icons}#icon-tv`}></use></svg>TV</span>) : false}  

                    {camper.radio === true ? (<span className={css.image}><svg  width="20" height="20">
                            <use href={`${icons}#icon-ui-radios`}></use></svg>Radio</span>) : false}

                    {camper.kitchen === true ? (<span className={css.image}>
                    <svg  width="20" height="20">
                    <use href={`${icons}#icon-cup-hot`}></use></svg>Kitchen</span>) : false}

                    {camper.microwave === true ? (<span className={css.image}><svg  width="20" height="20">
                        <use href={`${icons}#icon-ui-radios`}></use></svg>Microwave</span>) : false}

                    {camper.bathroom === true ? (<span className={css.image}><svg  width="20" height="20">
                            <use href={`${icons}#icon-bathroom`}></use></svg>Bathroom</span>) : false}
                            
                    {camper.water === true ? (<span className={css.image}><svg  width="20" height="20">
                    <use href={`${icons}#icon-bathroom`}></use></svg>Water</span>) : false}
             
            </div>
                <div className={css.detals}>
                    <h4 className={css.headerDetals}>Vehicle details</h4>
                    <hr color='#dadde1' border='1'/>
                    <div className={css.detalsList}>
                       <div className={css.detalsLeft}> 
                        <ul className={css.ul}>
                            <li>Form</li>
                            <li>Lenght</li>
                            <li>Wight</li>
                            <li>Height</li>
                            <li>Tank</li>
                            <li>Consumption</li>
                        </ul></div>
                        <div className={css.detalsRight}>
                            <ul className={css.ul}>
                            <li>{camper.form}</li>
                            <li>{camper.length}</li>
                            <li>{camper.width}</li>
                            <li>{camper.height}</li>
                            <li>{camper.tank}</li>
                            <li>{camper.consumption}</li>
                            
                        </ul></div>
                    </div>
                </div>
        </div>
        <BookForm/>
        </div>
        </>
    )

}





// "refrigerator": false,

// "gas": false,
// "water": true,