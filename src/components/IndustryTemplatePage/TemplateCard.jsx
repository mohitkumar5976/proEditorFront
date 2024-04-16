import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import IndustryTemplatePreview from "./IndustryTemplatePreview";
import { Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import { handleIndustryTemplate } from "../../redux/slices/TemplateSlice";

const TemplateCard = ({ templates }) => {
  const dispatch = useDispatch();
  const [hoveredTemplateId, setHoveredTemplateId] = useState(null);

  const handleMouseEnter = (templateId) => {
    setHoveredTemplateId(templateId);
  };

  const handleMouseLeave = () => {
    setHoveredTemplateId(null);
  };
  return (
    <>
      <div className="grid grid-cols-2 px-3 gap-4 place-items-center mx-auto mb-2 md:grid-cols-4 md:w-4/5 lg:w-2/3">
        {templates.data.map((template) => (
          <Card
            key={template.id}
            className="relative w-full h-40 md:h-48 hover:scale-105"
            onMouseEnter={() => handleMouseEnter(template.id)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={`/logo-maker/dashboard/${template.id}`}>
              <img
                src={`${template.THUMB_URI}`}
                className="w-full h-full"
                alt=""
              />
            </Link>
            {hoveredTemplateId === template.id && (
              <div className="hidden lg:block lg:backdrop-blur-sm lg:bg-slate-800/30 lg:w-full lg:h-full lg:absolute lg:z-10 lg:top-0 cursor-pointer">
                <div className=" flex items-center gap-x-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Tooltip title="Use this template" placement="top">
                    <Link
                      to={`/logo-maker/dashboard/${template.id}`}
                      className="bg-blue-800 p-2 rounded-lg text-white"
                    >
                      <DashboardIcon />
                    </Link>
                  </Tooltip>
                  <IndustryTemplatePreview template={template} />
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </>
  );
};

export default TemplateCard;
