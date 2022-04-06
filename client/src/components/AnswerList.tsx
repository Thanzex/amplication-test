import { AxiosResponse, AxiosError } from "axios";
import useSWR from "swr";
import { api } from "../context/state";

const AnswerList = () => {
  const { data, error } = useSWR<AxiosResponse<any[]>, AxiosError>(
    api.token ? `secureForms` : null,
    () => api.request("secureForms", "get"),
    { refreshInterval: 1000 }
  );
  
  return(
    <div className="border flex-1 rounded p-4">
      <h2>Risposte:</h2>
    </div>
  )
}

export default AnswerList;