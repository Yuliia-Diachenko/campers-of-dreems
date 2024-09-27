import css from './Reviews.module.css';
import BookForm from '../BookForm/BookForm';

export default function ReviewsPage() {

    return (
        <div className={css.container}>
            <BookForm/>
        </div>
    )

}