import css from './CatalogPage.module.css';
import icons from '../../image/symbol-defs.svg';
import { useId } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import { selectCampers } from "../../redux/campers/selectors";
import CamperList from '../../components/CamperList/CamperList';
import Button from '../../components/Button/Button';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import FiltersComponent from '../../components/FiltersComponent/FiltersComponent';
import FiltersFormComponent from '../../components/FiltersFormComponent/FiltersFormComponent';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FeedbackSchema = Yup.object().shape({   
    location: Yup.string(),
});

export default function CatalogPage() {
    const fieldId = useId();
    const dispatch = useDispatch();
    const campers = useSelector(selectCampers);

    // const campers = useSelector(selectVisibleCampers);

    useEffect(() => {
      dispatch(fetchCampers());
    }, [dispatch]);
    
    const handleChange = (values, actions) => {  

        actions.resetForm();       
        };

    return(
        <div className={css.container}>
            <aside className={css.sideBar}>
                <Formik initialValues={{location: campers?.location}} 
                        onChange={handleChange} 
                        validationSchema={FeedbackSchema}>
                 <Form className={css.form}>
                    <label className={css.lable} htmlFor={`${fieldId}-location`}>Location</label>
                    <Field className={css.input} onChange={handleChange}  name='location' type="text" id={`${fieldId}-location`} placeholder={ "Kyiv, Ukraine"}/>
                    <ErrorMessage name="location" component="span" className={css.error}/>
                </Form>
                </Formik>
                <div>
                    <p className={css.filterText}>Filters</p>
                    <div className={css.containerVehicle}>
                    <h4 className={css.headerFilter}>Vehicle equipment</h4>
                    <div >
                    <div className={css.filtersItems}>       
                        <div className={css.filterBtn}>
                      
                        <FiltersComponent id="filterAC"><span className={css.filterBtn}><svg  width="20" height="20">
                            <use href={`${icons}#icon-wind`}></use>
                        </svg>AC</span></FiltersComponent>
                        </div>
                        <div className={css.filterBtn}>
                        
                            <FiltersComponent id="filterAutomatic"><span className={css.filterBtn}><svg  width="20" height="20">
                            <use href={`${icons}#icon-diagram`}></use>
                        </svg> Automatic</span></FiltersComponent>
                        </div>
                        <div className={css.filterBtn}>
                        
                            <FiltersComponent id="filterKitchen"><span className={css.filterBtn}><svg  width="20" height="20">
                            <use href={`${icons}#icon-cup-hot`}></use>
                        </svg>Kitchen</span></FiltersComponent>
                        </div>
                        <div className={css.filterBtn}>
                          
                            <FiltersComponent id="filterKitchenTV"><span className={css.filterBtn}><svg  width="20" height="20">
                            <use href={`${icons}#icon-tv`}></use>
                        </svg>TV</span></FiltersComponent>
                        </div>
                        <div className={css.filterBtn}>
                         
                            <FiltersComponent id="filterBathroom"><span className={css.filterBtn}><svg  width="20" height="20">
                            <use href={`${icons}#icon-bathroom`}></use>
                        </svg>Bathroom</span></FiltersComponent>
                        </div>
                    </div>
                    </div> 
                    </div>                    
                    <div>
                    <h4 className={css.headerFilter}>Vehicle type</h4>
                    <FiltersFormComponent/>
                   <div className={css.searchBtn}><Button >Search</Button></div>
                    </div>
                    </div>
                   
                    </aside>
                <div className={css.campersContainer}>
                   <CamperList />
    <LoadMoreBtn />
    </div>    
    </div>
    )
}