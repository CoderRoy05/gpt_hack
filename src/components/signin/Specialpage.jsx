import React from "react";

const SpecialPage = ({ username }) => {
  return (
    <div className="special-page">
      <h1>Welcome, {username}!</h1>
      <p>This is your special account page.</p>
    </div>
  );
};

export default SpecialPage;
