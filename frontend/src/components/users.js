import React, { useState, useEffect } from "react";
import UserDataService from "../services/user.js";


const User = (props) => {
  const initialUserState = {
    id: null,
    user_name: "test",
    user_id: "1234",

  };
  const [user, setUser] = useState(initialUserState);

  const getUser = user_id => {
    UserDataService.get(user_id)
      .then(response => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    console.log('props is',props.match.params.id)
    getUser(props.match.params.id);
  }, [props.match.params.id]);


  return (

    <div>
      {user ? (
        <div>
          <h5>{user.user_name}</h5>

          <h4> Record </h4>
          <div className='row'>
            {-1 > 0 ? (
              user.records.map((record, index) => {
                return (
                  <div className='col-lg-4 pb-1' key={index}>
                    <div className='card'>
                      <div className='card-body'>
                        <p className='card-text'>
                          {record.text}
                          <br />
                          <strong>Date: </strong>{record.date}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className='col-sm-4'>
                <p>No reviews yet.</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <br />
          <p>No user selected.</p>
        </div>
      )}
    </div>
  );
};

export default User;
