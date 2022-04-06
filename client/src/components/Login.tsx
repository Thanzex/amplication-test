import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { api } from "../context/state";

const Login = () => {
  const fieldClass= " border rounded p-1 m-1"
  return (
    <div className="block">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={({ username, password }) => api.login(username, password)}
      >
        <Form>
          <Field type="text" name="username" className={fieldClass}/>
          <ErrorMessage name="text"></ErrorMessage>
          <Field type="password" name="password" className={fieldClass}/>
          <ErrorMessage name="password"></ErrorMessage>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
