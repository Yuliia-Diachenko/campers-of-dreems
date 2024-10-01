import css from './CatalogPage.module.css';
import icons from '../../image/symbol-defs.svg';
import { useId } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import { selectCampers } from "../../redux/campers/selectors";
import CamperList from '../../components/CamperList/CamperList';
import Button from '../../components/Button/Button';
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
                            <div className={css.inputDiv}><svg  width="20" height="20" className={css.svgLocation}>
                            <use href={`${icons}#icon-map`}></use>
                            </svg>
                    <Field className={css.input} onChange={handleChange} name='location' type="text" id={`${fieldId}-location`} placeholder={"Kyiv, Ukraine"}/>
                    <ErrorMessage name="location" component="span" className={css.error}/></div>
              
                <div>
                    <p className={css.filterText}>Filters</p>
                    <div className={css.containerVehicle}>
                    <h4 className={css.headerFilter}>Vehicle equipment</h4>
                    <div >
                        
                    <div className={css.filtersItems}> 
                        
                        <label htmlFor={`${fieldId}-AC`} className={css.filterBtn}>                          
                            <FiltersComponent ><span className={css.filterBtn}><svg  width="20" height="20">
                            <use href={`${icons}#icon-wind`}></use>
                            </svg>AC</span>
                            </FiltersComponent>
                            <Field as="checkbox" id={`${fieldId}-AC`} name="toggleAC" className={css.checkHide}/>
                        </label>
                    
                        <label htmlFor={`${fieldId}-transmissionA`} className={css.filterBtn}>                        
                            <FiltersComponent id="filterAutomatic"><span className={css.filterBtn}><svg  width="20" height="20">
                            <use href={`${icons}#icon-diagram`}></use>
                            </svg> Automatic</span></FiltersComponent>
                            <Field as="checkbox" id={`${fieldId}-transmissionA`} name="toggleTransmissionA" className={css.checkHide}/>
                        </label>
                        
                        <label htmlFor={`${fieldId}-kitchen`} className={css.filterBtn}>                        
                            <FiltersComponent id={`${fieldId}-kitchen`}><span className={css.filterBtn}><svg  width="20" height="20">
                            <use href={`${icons}#icon-cup-hot`}></use>
                            </svg>Kitchen</span></FiltersComponent>
                            <Field as="checkbox" id={`${fieldId}-kitchen`} name="toggleKitchen" className={css.checkHide}/>
                        </label>

                        <label htmlFor={`${fieldId}-TV`} className={css.filterBtn}>                          
                            <FiltersComponent id={`${fieldId}-TV`}><span className={css.filterBtn}><svg  width="20" height="20">
                            <use href={`${icons}#icon-tv`}></use>
                            </svg>TV</span></FiltersComponent>
                            <Field as="checkbox" id={`${fieldId}-TV`} name="toggleTV" className={css.checkHide}/>
                        </label>

                        <label htmlFor={`${fieldId}-bathroom`} className={css.filterBtn}>                         
                            <FiltersComponent id={`${fieldId}-bathroom`}><span className={css.filterBtn}><svg  width="20" height="20">
                            <use href={`${icons}#icon-bathroom`}></use>
                            </svg>Bathroom</span></FiltersComponent>
                            <Field as="checkbox" id={`${fieldId}-bathroom`} name="toggleBathroom" className={css.checkHide}/>
                        </label>
                    </div>
                    </div> 
                    </div>                    
                    <div>
                    <h4 className={css.headerFilter}>Vehicle type</h4>
                    <FiltersFormComponent/>
                   <div className={css.searchBtn}><Button >Search</Button></div>
                    </div>
                    </div>
                    </Form>
                    </Formik>
                    </aside>
                <div className={css.campersContainer}>
                   <CamperList />
    
    </div>    
    </div>
    )
}