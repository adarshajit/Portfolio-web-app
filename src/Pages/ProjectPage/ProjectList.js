import React from "react";
import { useParams } from "react-router-dom";
import ProjecData from "./projectData";
const ProjectList = () => {
  let id = useParams();
  let data = ProjecData.filter((item) => item.id === id.Id)[0];

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
};

export default ProjectList;
