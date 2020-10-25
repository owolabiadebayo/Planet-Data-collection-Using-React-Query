import React from "react";
import { useQuery } from "react-query";
import Peopledetails from "./Peopledetails";

const fetchPeople = async () => {
  const res = await fetch(`https://swapi.dev/api/people/`);
  return res.json();
};

const People = () => {
  const { data, status } = useQuery("People", fetchPeople);
  console.log(data)
  return (
    <div>
      <h3>People</h3>
      {status === "success" && (
        <div>
          {data.results.map((Person) => (
            <Peopledetails key={Person.name} Person={Person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
