import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import { selectError, selectLoading, selectCampers } from "../../redux/campers/selectors";
import Camper from '../../components/Camper/Camper';
import Loader from "../Loader/Loader";
import css from './CamperList.module.css';

export default function CamperList() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError); 
    const campers = useSelector(selectCampers);
    useEffect(() => {
        dispatch(fetchCampers());
      }, [dispatch]);

    const camperId = campers?.id;
return (
    <div>
    {campers.length > 0 ? (
      <ul className={css.list}>
        {isLoading && !error && <Loader />}
        {campers.map((camper) => (
          <li key={camperId}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>
    ) : (
      <p>Something went wrong...</p>
    )}
  </div>
)
}