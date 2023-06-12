
export const initialState = {
    username: "Nik419",
    age: 25,
    cmp: "Infy",
  };

  const reducerFun = (state :any, action:any) => {

switch (action.type) {
  case "setUsername":
  
  return {
...state,
username: action.payload.newName,
    
  };

  case "setAge":
  
  return {
...state,
age: action.payload.newAge,
    
  };

  case "setCmp":
  
  return {
...state,
cmp: action.payload.newCmp,
    
  };
  default:
    return state;
}


  }

  export default reducerFun;