import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVisiableCampers } from "../../redux/campers/operations";
import { selectError, selectLoading, selectVisiableCampers } from "../../redux/campers/selectors";
import Camper from '../../components/Camper/Camper';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import Loader from "../Loader/Loader";
import css from './CamperList.module.css';

export default function CamperList() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError); 
    const campers = useSelector(selectVisiableCampers); 

    const [page, setPage] = useState(1);
    const limit = 5;

    useEffect(() => {
        dispatch(fetchVisiableCampers({page, limit}));
      }, [dispatch, page]);

      const handleClick = () => {
        setPage(page => page + 1);
        return
      }

return (
    <div className={css.campersContainer}>
    {campers.length > 0 ? (
      <ul className={css.list}>
        {isLoading && !error && <Loader />}
        {campers.map((camper) => (
          <li key={camper.id}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>
    ) : (
      <p>Something went wrong...</p>
    )}
    <LoadMoreBtn onClick={handleClick}/>
  </div>
)
}