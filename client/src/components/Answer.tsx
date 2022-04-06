import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

const Answer = ({ id }: { id: string }) => {
  const fieldClass = "border rounded p-1 m-1";
  const groupClass="m-2"
  return (
    <div className="border flex-1 rounded p-4">
      <h2>Rispondi a {id}:</h2>
      <Formik
        initialValues={{ field1: "", field2: "", field3: "" }}
        onSubmit={({ field1, field2, field3 }) => {}}
      >
        <Form>
          <div className={groupClass}>
            <label htmlFor="text1">Field 1</label>
            <Field type="text" name="text1" className={fieldClass} />
            <ErrorMessage name="text1" />
          </div>
          <div className={groupClass}>
            <label htmlFor="text2">Field 2</label>
            <Field type="text" name="text2" className={fieldClass} />
            <ErrorMessage name="text2" />
          </div>
          <div className={groupClass}>
            <label htmlFor="text3">Field 3</label>
            <Field type="text" name="text3" className={fieldClass} />
            <ErrorMessage name="text3" />
          </div>
          <button type="submit" className="border rounded py-2 px-5">Invia</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Answer;
