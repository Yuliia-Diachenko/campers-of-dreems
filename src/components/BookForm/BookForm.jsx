
import Button from '../Button/Button';
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from './BookForm.module.css';

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email().required("Required"),
    booking_date: Yup.date().required("Required"),
    comment: Yup.string().min(10, "Too Short!").max(600, "Too Long!")
  });

export default function BookForm() {
    const fieldId = useId();
    const handleSubmit = (values, actions) => {   
        toast.success('Thanks for dropping by! Great choice!');            
        actions.resetForm();       
        };

      // DataPicker
      const [startDate, setStartDate] = useState(new Date());
       

return ( 
<div className={css.container}> 
  <div className={css.group}>
        <h2 className={css.header}>Book your campervan now</h2>
        <p className={css.connect}>Stay connected! We are always ready to help you.</p>
    <Formik initialValues={{ name: "", email: "", booking_date:"" }} 
    onSubmit={handleSubmit} 
    validationSchema={FeedbackSchema} 
    >        
      <Form className={css.formContainer}>     
            <Field type="text" name="name" id={`${fieldId}-name`} placeholder="Name*" className={css.input}/>
            <ErrorMessage name="name" component="span" className={css.error}/>           
            
            <Field type="text" name="email" id={`${fieldId}-email`} placeholder="Email*"className={css.input}/>
            <ErrorMessage name="email" component="span" className={css.error} />

            <DatePicker  minDate={new Date()}                        
                          selected={startDate} 
                          onChange={(date) => setStartDate(date)}
                          className={css.input} 
                          placeholderText="Booking date*" 
                          
                       />
      
            <Field as="textarea" cols="20" rows="5" type="text" name="comment" id={`${fieldId}-comment`} placeholder="Comment" className={css.area}/>
            <ErrorMessage name="comment" component="span" className={css.error}/>           
        
        <Button type="submit" className={css.button}>Send</Button>
        <Toaster position="top-center" reverseOrder={false} />
      </Form>
      </Formik>
      </div>
      </div>)
}