import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { SecureFormList } from "./secureForm/SecureFormList";
import { SecureFormCreate } from "./secureForm/SecureFormCreate";
import { SecureFormEdit } from "./secureForm/SecureFormEdit";
import { SecureFormShow } from "./secureForm/SecureFormShow";
import { SecureFormAnswerList } from "./secureFormAnswer/SecureFormAnswerList";
import { SecureFormAnswerCreate } from "./secureFormAnswer/SecureFormAnswerCreate";
import { SecureFormAnswerEdit } from "./secureFormAnswer/SecureFormAnswerEdit";
import { SecureFormAnswerShow } from "./secureFormAnswer/SecureFormAnswerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="SecureForm"
          list={SecureFormList}
          edit={SecureFormEdit}
          create={SecureFormCreate}
          show={SecureFormShow}
        />
        <Resource
          name="SecureFormAnswer"
          list={SecureFormAnswerList}
          edit={SecureFormAnswerEdit}
          create={SecureFormAnswerCreate}
          show={SecureFormAnswerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
