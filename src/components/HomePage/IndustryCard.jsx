import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";

const IndustryCard = ({ industries }) => {
  return (
    <div className="grid grid-cols-2 px-3 gap-4 place-items-center mx-auto mb-2 md:grid-cols-4 md:w-4/5 lg:w-2/3">
      {industries.data.map((industry) => (
        <Link
          key={industry.id}
          to={`/templates/${industry.IndustryName}`}
          className="w-full h-full"
        >
          <Card className="bg-white h-40 md:h-48 flex justify-center  items-center hover:scale-105">
            <div className="flex flex-col gap-y-2 items-center w-full px-1">
              <div className="h-24 w-24 md:h-28 md:w-28">
                <img
                  src={`${industry.IndustryThumb}`}
                  className="w-full h-full"
                  alt=""
                />
              </div>

              <p className="w-full  text-sm font-bold text-gray-500 text-center md:h-12 md:pt-3  md:text-base">
                {`${industry.IndustryName}`}
              </p>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default IndustryCard;
