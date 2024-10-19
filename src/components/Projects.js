import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Projects = () => {
  const location = useLocation();
  const { id } = location.state || {};
  console.log("props id:", id);
  const [detailData, setDetailData] = useState([]);

  useEffect(() => {
    fetchProjectDetail();
  }, []);
  const fetchProjectDetail = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();
      setDetailData(data);
      console.log("data", data);
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  return (
    <div className="h-screen bg-neutral-200">
      <div className="flex justify-center mt-10">
        <div className="border-2 border-green-700 rounded-md w-full max-w-screen-md h-auto ">
          <div className="flex justify-center mt-10 ml-10">
            <h className="text-green-700 font-medium text-2xl ">
              {detailData?.title}
            </h>
          </div>

          <div className="flex justify-center items-center font-medium  mt-5 h-96 ">
            <p className="mx-10 text-gray-700">{detailData.body}</p>
            <img
              src={`https://picsum.photos/200/100?id=${id}`}
              alt={`${id}`}
              className=" w-[400px] h-[300px] mr-10 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
