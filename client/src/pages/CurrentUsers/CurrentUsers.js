import React, { useEffect, useState } from "react";
import axios from "axios";
import baseURL from "../../config/baseURL";
import Spinner from "../../components/Spinner/Spinner";
import Moment from "react-moment";
import "./CurrentUsers.css";

export default function CurrentUsers({ user }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    setLoading(true);
    try {
      const userData = await axios.get(baseURL + "/users/all-users");
      setUsers(userData.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);

  return (
    <div className="container Page">
      <h1>Current Users</h1>
      <h4>Hallo {user.userName}</h4>
      <h5>{user.email}</h5>

      <ul className="list-group mt-5 ">
        {loading ? (
          <Spinner />
        ) : (
          users.map((i, idx) => (
            <li key={idx} className="list-group-item Blog">
              <div className="BlogContent">
                {"Name: " +
                  i.userName +
                  " . " +
                  "Email: " +
                  i.email +
                  " . " +
                  "Is admin: " +
                  i.isAdmin}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
