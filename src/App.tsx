import { createContext, useContext, useReducer } from "react";
import "./App.css";

import { reducerFunc } from "./Components/UserContext/UserContext";


function App() {

const initialState = { isLogin : false , name:"nik123" , id:45}

const [state , dispatch] = useReducer(reducerFunc , initialState)

const AuthContext = createContext({state , dispatch})

const LoginDispatchFun = () => {
  dispatch({ type: "setLogin", payload: true });
  if (state.isLogin) {
    UserDataDispatchFun()
  }
};

const UserDataDispatchFun = () => {
  dispatch({ type: "setUserData", payload: {name : 'nik419' , id: 419} });
};

const userContext = useContext(AuthContext);

  return <div className="">
(

<AuthContext.Provider value = {{state , dispatch}}>

<div>

<p>Login = {state.isLogin} </p>
<br />
<p>UserData = {state.name}</p>

</div>

<button type="button" onClick={LoginDispatchFun}>SubmitChange</button>


</AuthContext.Provider>
)
  </div>;
  
}

export default App;
