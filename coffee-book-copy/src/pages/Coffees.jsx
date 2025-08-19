import { useLoaderData } from "react-router";
import Card from "../components/Card";
import { useState } from "react";

const Coffees = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);

  const handleSort = (sortBy) => {
    if (sortBy === "popularity") {
      // sort by popularity (DSC)
      const sorted = [...data].sort((a, b) => b.popularity - a.popularity);
      setCoffees(sorted);
    } else if (sortBy === "rating") {
      // sort by rating (ASC)
      const sorted = [...data].sort((a, b) => a.rating - b.rating);
      setCoffees(sorted);
    }
  };

  return (
    <>
      {/* Top section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-thin text-center sm:text-left">
          Sort Coffee&apos;s by Popularity & Rating →
        </h1>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => handleSort("popularity")}
            className="btn btn-warning text-sm sm:text-base"
          >
            Sort By Popularity (DSC)
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="btn btn-warning text-sm sm:text-base"
          >
            Sort By Rating (ASC)
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </>
  );
};

export default Coffees;
