import React from "react";

const Peopledetails = ({ Person }) => {
  return (
    <div className="card">
      <h3>{Person.name}</h3>
      <p>Population - {Person.gender}</p>
      <p>Terrain - {Person.birth_year}</p>
    </div>
  );
};

export default Peopledetails;
