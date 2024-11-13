import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/FakeAuthContext";

import styles from "../worldWiseComponents/User.module.css";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/world");
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
