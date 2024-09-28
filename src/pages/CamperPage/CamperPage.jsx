import css from './CamperPage.module.css';
import { useEffect, useParams } from 'react';
import NavFeatures from '../../components/NavFeatures/NavFeatures';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCamper } from '../../redux/campers/operations';
import { selectCamper } from '../../redux/campers/selectors';

export default function CamperPage() {
  const { camperId } = useParams();

    const dispatch = useDispatch();
    const camperData = useSelector(selectCamper);
    // const camperId = camperData?._id;
    useEffect(() => {
        if (open && !camperData) {
          dispatch(fetchCamper(camperId));
        }
      }, [ dispatch, camperId, camperData]);
    return(
    
        <div className={css.container}>
        <h1>{camperData?.name}</h1>
        <p>{camperData?.rating}</p>
        <span>{camperData?.location}</span>
        <p>{camperData?.price}</p>
        <ul>        
            <li>
            <img src={`https://ftp.goit.study/img/campers-test-task/${camperData.id}-1.webp`} alt="photo" />
            </li>
            <li>
            <img src={`https://ftp.goit.study/img/campers-test-task/${camperData.id}-2.webp`} alt="photo" />
            </li>
            <li>
            <img src={`https://ftp.goit.study/img/campers-test-task/${camperData.id}-3.webp`} alt="photo" />
            </li>
        </ul>
       
        <NavFeatures/>
        </div>
       
    )
}