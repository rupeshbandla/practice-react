import React from "react";
import DisplayContextData from "./DisplayContextData";

export const UserContext = React.createContext();

function UseContextHook() {
  return (
    <>
      <UserContext.Provider value="React Context Hook">
        <DisplayContextData />
      </UserContext.Provider>
    </>
  );
}

export default UseContextHook;
