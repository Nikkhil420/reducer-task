import { SetStateAction, useState } from "react";
import styless from "./UserInfo.module.scss"


const UserInfo = () => {



  const [username, setUsername] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [cmp, setCmp] = useState<string>("");

const submitData = () => {

 console.log(username , age , cmp)

}

  return (
    <div className = {styless["main-container"]}>

      <div  className = {styless["form-control"]}>
        <label htmlFor="username"> Username </label>

        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          name="username"
          placeholder="Enter Username"
        />
      </div>

      <div  className = {styless["form-control"]}>
        <label htmlFor="age"> Age </label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={(e)=> {setAge(e.target.valueAsNumber)}}
       
          placeholder="Enter Age"
        />
      </div>

      <div  className = {styless["form-control"]}>
        <label htmlFor="cmp"> Company </label>
        <input
          type="text"
          id="cmp"
          name="cmp"
          value={cmp}
          onChange={(e) => {
            setCmp(e.target.value);
          }}
          placeholder="Enter Company"
        />
      </div>

      <button type="button" onClick={submitData}>Submit</button>
    </div>
  );
};

export default UserInfo;
