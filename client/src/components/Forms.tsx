import { AxiosError, AxiosResponse } from "axios";
import React, { useState } from "react";
import useSWR from "swr";
import { api } from "../context/state";
import Answer from "./Answer";
import AnswerList from "./AnswerList";

export interface secureForm {
  id: string;
  structure: string;
  description: string;
  publickey: string;
  privatekey: string;
}

const Forms = () => {
  const { data, error } = useSWR<AxiosResponse<secureForm[]>, AxiosError>(
    api.token ? `secureForms` : null,
    () => api.request("secureForms", "get"),
    { refreshInterval: 1000 }
  );

  const [selected, select] = useState("");

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Secure Forms:</h1>
      <div className="flex">
        {data?.data.map((form) => (
          <div
            key={form.id}
            onClick={() => select(form.id)}
            className={
              "border rounded m-2 p-2 px-5 " +
              (selected == form.id ? "bg-gray-200" : "")
            }
          >
            <h3>{form.id}</h3>
            <p>{form.description}</p>
            <p>{form.structure}</p>
            <p>{form.publickey}</p>
            <p>{form.privatekey}</p>
          </div>
        ))}
      </div>
      <div className="flex">
        <Answer id={selected}></Answer>
        <AnswerList id={selected}></AnswerList>
      </div>
    </div>
  );
};
export default Forms;
