import css from './CatalogPage.module.css';
import {Link} from 'react-router-dom';
import { useId } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import { selectError, selectLoading } from "../../redux/campers/selectors";
import { selectVisibleCampers } from "../../redux/filters/selectors";
import Loader from '../../components/Loader/Loader';
import Camper from '../../components/Camper/Camper';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FeedbackSchema = Yup.object().shape({   
    location: Yup.string(),
});

export default function CatalogPage() {
    const fieldId = useId();
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError); 
    // const campers = useSelector(selectCampers);
    const campers = useSelector(selectVisibleCampers);

    useEffect(() => {
      dispatch(fetchCampers());
    }, [dispatch]);
    
    const handleChange = (values, actions) => {  

        actions.resetForm();       
        };

    return(
        <div className={css.container}>
            <aside>
                <Formik initialValues={{location: campers?.location}} 
                        onChange={handleChange} 
                        validationSchema={FeedbackSchema}>
                 <Form>
                    <label htmlFor={`${fieldId}-location`}>Location</label>
                    <Field onChange={handleChange}  name='location' type="text" id={`${fieldId}-location`} placeholder={ "Kyiv, Ukraine"}/>
                    <ErrorMessage name="location" component="span" className={css.error}/>
                </Form>
                </Formik>
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
{isLoading && !error && <Loader />}
      {campers.map((camper) => (
        <li key={camper.id} >
            <Link to={`/campers/${camper.id}`} className={css.link} ><Camper/></Link>
        </li>
      ))}
    </ul>
    <LoadMoreBtn/>
    </div>    
    </div>
    )
}