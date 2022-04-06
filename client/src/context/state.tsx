// import { createContext, ReactNode, useContext } from "react";
// import { API } from "../backend/client";

// const AppContext = createContext(api);

// export function AppWrapper({ children }: { children: ReactNode }) {
//   return (
//     <AppContext.Provider value={api}>{children}</AppContext.Provider>
//   );
// }

// export function useAppContext() {
//   return useContext(AppContext);
// }
import { API } from "../backend/client";
export const api = new API({
  baseURL:
    "https://cl164oold16108201s6f0r2br9t-server-vn57etnuya-ue.a.run.app/",
});
