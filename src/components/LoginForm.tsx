import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [rememberedEmail, setRememberedEmail] = useState('');

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setRememberedEmail(savedEmail);
    }
  }, []);

  const initialValues = {
    email: rememberedEmail || '',
    password: '',
    rememberMe: !!rememberedEmail,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        if (values.rememberMe) {
          localStorage.setItem('rememberedEmail', values.email);
        } else {
          localStorage.removeItem('rememberedEmail');
        }
        setSuccessMessage('Login Successful!');
        resetForm();
        setTimeout(() => setSuccessMessage(''), 3000);
      }}
    >
      <Form aria-labelledby="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" className="error" />
        </div>

        <div className="form-group">
          <label>
            <Field type="checkbox" name="rememberMe" />
            Remember Me
          </label>
        </div>

        <button type="submit">Login</button>
        {successMessage && <div className="success">{successMessage}</div>}
      </Form>
    </Formik>
  );
};

export default LoginForm;
