import React, { useContext } from "react";//step1:import the usecontext
import { UserContext } from "./UseContextHook";//step2:import necessary context

function DisplayContextData() {
  const message = useContext(UserContext);//step3:call the usecontext and pass the args
  return <div>{message}</div>;
}

export default DisplayContextData;
