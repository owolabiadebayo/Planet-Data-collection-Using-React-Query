import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";
import Planetdetails from "./Planetdetails";

const fetchPlanets = async (key, page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(5);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["planets", page],
    fetchPlanets,
    { staleTime: 5000, onSuccess: () => console.log("data fetched") }
  );
  console.log(resolvedData);
  return (
    <div>
      <h2>planet</h2>

      {status === "success" && (
        <>
          <button onClick={() => setPage(page => Math.max(page-1, 1))} disabled={page===1}>
            Previous page
          </button>
          {console.log(page)}
          <span>{page}</span>
          <button
            onClick={() =>
              setPage(old =>
                !latestData || !latestData.next ? old : old+1
              )
            }
          >
            Next Page
          </button>
          <div>
            {resolvedData.results.map((planet) => (
              <Planetdetails planet={planet} key={planet.name} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Planets;
