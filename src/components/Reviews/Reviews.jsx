import css from './Reviews.module.css';
import BookForm from '../BookForm/BookForm';
// import Rating from '@mui/material/Rating';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/Star';

// const labels: { [index: string]: string } = {
//     0.5: 'Useless',
//     1: 'Useless+',
//     1.5: 'Poor',
//     2: 'Poor+',
//     2.5: 'Ok',
//     3: 'Ok+',
//     3.5: 'Good',
//     4: 'Good+',
//     4.5: 'Excellent',
//     5: 'Excellent+',
//   };
//   function getLabelText(value: number) {
//     return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
//   }

export default function ReviewsPage() {
      // const firstLetter = reviews.reviewer_name.firstName.charAt(0).toUpperCase();
    // const [value, setValue] = React.useState<number | null>(2);
    // const [hover, setHover] = React.useState(-1);
      

    return (
        <div className={css.container}>
            <div className={css.reviews}>
                <ul className={css.list}>
                    
                    <li>
                    <div className={css.avatarContainer}>
                    <span className={css.avatarCircle}>A</span>
                    <h6 className={css.name}>Alice</h6>
                    
                    {/* <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                        <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                            setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {value !== null && (
                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                        )}
                        </Box> */}
                        </div>
                        <p className={css.text}>The Mavericks panel truck was a perfect choice for my solo road trip.
                             Compact, easy to drive, and had all the essentials. 
                             The kitchen facilities were sufficient, and the overall 
                             experience was fantastic.</p>
                    </li>
                    <li>
                    <div className={css.avatarContainer}>
                    <span className={css.avatarCircle}>B</span>
                    <h6 className={css.name}>Bob</h6>
                    
                    {/* <Box sx={{ width: 96, display: 'flex', alignItems: 'center' }}>
                        <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                            setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {value !== null && (
                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                        )}
                        </Box> */}
                        </div>
                        <p className={css.text}>The Mavericks panel truck was a perfect choice for my solo road trip.
                             Compact, easy to drive, and had all the essentials. 
                             The kitchen facilities were sufficient, and the overall 
                             experience was fantastic.</p>

                    </li>
                </ul>
            </div>
            <BookForm/>
        </div>
    )

}