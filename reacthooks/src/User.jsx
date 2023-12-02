import React from "react";

function User() {

  function  Apple(){
    return(
      <div><h2>Apple Component</h2></div>
    )
  }

  return (
    <>
    <h1>Hello User</h1>
    <Apple/>
    </>
  )
}

export default User;
