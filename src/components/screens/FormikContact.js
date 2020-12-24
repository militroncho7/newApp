import React from "react";
import {Formik} from "formik";
import FormGroup from "components/UI/FormGroup";
import Label from "components/UI/Label";

const initialValues = {
  fullname: "",
  email: ""
};

function validateForm(values) {
  const errors = {};
  if (!values.fullname) {
    errors.fullname = "El nombre es obligatorio";
  };
    if (!values.email) {
    errors.email = "El email es obligatorio";
  }
  return errors;
}

const FormikContact = () => {
  function handleSubmit(values) {
    console.log(values);    
  }

  return (
    <div>
      <h1>Formulario de Contacto</h1>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {
          ({values, errors, touched, handleChange, handleSubmit}) => (
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Nombre Completo:</Label>
                <input type="text" name="fullname" onChange={handleChange} value={values.fullname} placeholder="Tu nombre"/>
                {errors.fullname && touched.fullname && <p>{errors.fullname}</p>}
              </FormGroup>
              <FormGroup>
                <Label>Email:</Label>
                <input type="text" name="email" onChange={handleChange} value={values.email} placeholder="Tu email"/>
                {errors.email && touched.email && <p>{errors.email}</p>}
              </FormGroup>
              <button type="submit">Enviar</button>
            </form>
          )
        }
      </Formik>
    </div>
  )
};

export default FormikContact;