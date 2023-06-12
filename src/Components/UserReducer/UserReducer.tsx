import { useReducer, useState } from "react";
import styless from "./UserInfo.module.scss"
import reducerFun, { initialState } from "./reducerFun";

const UserReducer = () => {
  const [state, dispatch] = useReducer(reducerFun, initialState);

  const UserDispatchFun = (newName: any) => {
    dispatch({ type: "setUsername", payload: {newName} });
  };
const ageDispatchFun = (newAge: any) => {
    dispatch({ type: "setAge", payload: {newAge} });
  };

  const cmpDispatchFun = (newCmp: any) => {
    dispatch({ type: "setCmp", payload: { newCmp } });
  };

  const submitData = () => {
    console.log("state", state);
  };

  return (
    <div className={styless["main-container"]}>
      <div className={styless["form-control"]}>
        <label htmlFor="username">Username</label>

        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          id="username"
          value={state.username}
          onChange={(e) => {
            UserDispatchFun(e.target.value);
          }}
        />
      </div>

      <div className={styless["form-control"]}>
        <label htmlFor="age"></label>

        <input
          type="number"
          placeholder="Enter Age"
          name="age"
          id="age"
          onChange={(e) => {
            ageDispatchFun(e.target.value);
          }}
        />
      </div>

      <div className={styless["form-control"]}>
        <label htmlFor="cmp"></label>

        <input
          type="text"
          placeholder="Enter Company "
          name="cmp"
          id="cmp"
          onChange={(e) => {
            cmpDispatchFun(e.target.value);
          }}
        />
      </div>

      <div>
        <button type="button" onClick={submitData}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserReducer;
