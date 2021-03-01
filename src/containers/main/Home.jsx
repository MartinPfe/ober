import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <figure className="bg-gray-100 rounded-xl p-8">
      <div className="pt-6 text-center space-y-4">
        <blockquote>
          <p className="text-lg font-semibold">Ober APP - WIP!</p>
          <Link to="/Restaurants">Ver mis resturantes</Link>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-cyan-600">Martín Pfeiffer</div>
          <div className="text-gray-500">Argentina</div>
          <div className="text-gray-500">STAGING AREA</div>
        </figcaption>
      </div>
    </figure>
  );
};

export default Home;
