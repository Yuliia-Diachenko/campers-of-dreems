import css from './BookForm.module.css';
import Button from '../Button/Button';
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email().required("Required"),
    booking_date: Yup.string().required("Required"),
    comment: Yup.string().min(10, "Too Short!").max(600, "Too Long!")
  });

export default function BookForm() {
    const fieldId = useId();
    const handleSubmit = (values, actions) => {                 
          actions.resetForm();
        };

    <Formik initialValues={{ name: "", email: "", booking_date:""  }} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        
      <Form className={css.container}>
      <div className={css.group}>
        <h2>Book your campervan now</h2>
        <p>Stay connected! We are always ready to help you.</p>
        
     
            <Field type="text" name="name" id={`${fieldId}-name`} placeholder="Name*"/>
            <ErrorMessage name="name" component="span" className={css.error}/>           
            
            <Field type="text" name="email" id={`${fieldId}-email`} placeholder="Email*"/>
            <ErrorMessage name="email" component="span" className={css.error} />

            <Field type="text" name="booking_date" id={`${fieldId}-booking_date`} placeholder="Booking date*"/>
            <ErrorMessage name="booking_date" component="span" className={css.error}/>

            <Field type="text" name="comment" id={`${fieldId}-comment`} placeholder="Comment"/>
            <ErrorMessage name="comment" component="span" className={css.error}/>

            
        </div>
        <Button type="submit">Send</Button>
        
      </Form>
      </Formik>
}