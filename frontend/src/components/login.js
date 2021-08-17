import React, { useState } from "react";
import UserDataService from "../services/user";

const Login = (props) => {
  const initialUserState = {
    name: "",
    id: "",
  };


  const [user, setUser] = useState(initialUserState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value});
    console.log(user)
  };

  const login = () => {
    props.login(user);
    props.history.push("/");
    var data={
      user_name:user.name,
      user_id:user.id
    }
    UserDataService.createUser(data)
      .then(response => {
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  };

  return (
    <div className='submit-form'>
      <div>
        <div className='form-group'>
          <label htmlFor='user'>Username</label>
          <input
            type='text'
            className='form-control'
            id='name'
            required
            value={user.name}
            onChange={handleInputChange}
            name='name'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='id'>ID</label>
          <input
            type='text'
            className='form-control'
            id='id'
            required
            value={user.id}
            onChange={handleInputChange}
            name='id'
          />
        </div>

        <button onClick={login} className='btn btn-success'>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
