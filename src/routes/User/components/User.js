import React from "react";
import Toggle from "../../App/components/Toggle/toggle";
import Header from "../../App/components/Navigation/Header";
import useDarkMode from "../../App/components/use-dark-mode";
import useUserData from "../../App/components/use-user-data";

function User() {
  const [isDarkMode, setDarkMode] = useDarkMode(false);
  const [userData, setUserData] = useUserData();
  return (
    <div className="app">
      <Header />

      <div className="level">
        <div>
          <h1 className="title">User Information</h1>
        </div>
        <Toggle darkMode={isDarkMode} setDarkMode={setDarkMode} />
      </div>

      {userData ?
        <>
          <div className="field">
            <div className="control">
              <label>User Name: {userData.name}</label>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label>Email: {userData.email}</label>
            </div>
          </div>
        </> :
        <>
          <div className="field">
            <div className="control">
              <label>No user information is available</label>
            </div>
          </div>
        </>
      }

    </div>
  );
}

export default User;
