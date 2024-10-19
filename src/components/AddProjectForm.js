import React from "react";
import axios from "axios";
import { useState } from "react";
import $ from "jquery";

function AddProjectForm({ setDatas, datas }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState(0);

  const onClick = async () => {
    console.log("click");
    const newProject = {
      title: title,
      body: body,
      userId: userId,
    };

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newProject
      );

      console.log("response data", response.data);
      if (response.data !== null) {
        console.log("işlem başarılı");
        const newDatas = [...datas, response.data];
        console.log(newDatas, newDatas);
        setDatas(newDatas);
        setTitle("");
        setBody("");
      }
    } catch (error) {
      console.error(
        "proje ekleme hatalı",
        error.response ? error.response.status : error.message
      );
    }
  };
  console.log("body:", body);
  console.log("title:", title);
  return (
    <div>
      <div className="w-[500px] h-[450px] border-2 border-green-700  rounded-md ">
        <h1 className="text-green-700 font-medium text-2xl ml-36 mt-5 ">
          Yeni Proje Ekleme
        </h1>

        <form className="h-[300px]">
          <div className="mt-5  h-12 flex items-center   ">
            <div className="w-40 ">
              <label className="mx-5 text-lg text-gray-700 font-medium ">
                Proje İsmi:
              </label>
            </div>

            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="w-72 rounded-md h-10 px-2 border-2 border-gray-400 "
              type="text"
            ></input>
          </div>

          <div className="mt-5 h-24 flex items-center  ">
            <div className="w-40">
              <label className="mx-4 text-lg text-gray-700 font-medium ">
                Proje Detayları:
              </label>
            </div>

            <textarea
              onChange={(e) => {
                setBody(e.target.value);
              }}
              className="w-72 mt-5 rounded-md h-32 px-2 py-2 border-2 border-gray-400 "
              type="text"
            ></textarea>
          </div>
        </form>
        <div className="flex justify-end items-center">
          <button
            onClick={onClick}
            onMouseOver={(e) => $(e.target).css("background-color", "#16A34A")}
            onMouseOut={(e) => $(e.target).css("background-color", "#15803D")}
            className="bg-green-700 text-white py-2 px-4 rounded-md w-44 mt-2 mr-5"
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProjectForm;
