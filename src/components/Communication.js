import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";
import InputMask from "react-input-mask";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Communication = () => {
  return (
    <>
      <div className="flex justify-center h-screen ">
        <div className=" max-w-screen-lg mx-auto  flex flex-col lg:flex-row justify-center items-center">
          <div className="w-full lg:w-[900px] h-auto lg:h-[350px] mt-5 mx-5 p-5  ">
            <div className="flex items-center ml-5 mt-2">
              <div className=" w-10 h-10 rounded-full border-green-700 border-2 flex justify-center items-center mt-5 ">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-green-700 text-2xl "
                />
              </div>

              <p className="ml-5 mt-5 text-gray-700 font-medium">
                +90 538 030 68 24
              </p>
            </div>
            <div className="flex items-center mt-5 ml-5">
              <div className=" w-10 h-10 rounded-full border-green-700 border-2 flex justify-center items-center ">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-green-700 text-2xl "
                />
              </div>

              <p className="ml-5 text-gray-700 font-medium">
                esmabarutcu8@gmail.com
              </p>
            </div>
            <div className="flex items-center mt-5 ml-5">
              <div className=" w-10 h-10 rounded-full border-green-700 border-2 flex justify-center items-center ">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-green-700 text-2xl "
                />
              </div>

              <p className="ml-5 text-gray-700 font-medium">Göztepe,İzmir</p>
            </div>
            <div className="flex items-center mt-5 ml-5">
              <div className=" w-10 h-10 rounded-full border-green-700 border-2 flex justify-center items-center ">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-green-700 text-2xl "
                />
              </div>

              <a
                href="https://www.linkedin.com/in/esma-barutcu-33a016199/"
                className="ml-5 hover:text-green-700 text-gray-700 font-medium"
              >
                https://www.linkedin.com/in/esma-barutcu-33a016199/
              </a>
            </div>
          </div>
          <div>
            <div className="border-2 border-green-700 rounded-lg w-[600px] h-[500px] mr-5 ">
              <h1 className="text-green-700 font-medium text-2xl ml-5 mt-5 ">
                İletişim Formu
              </h1>
              <form>
                <div className="mt-5  h-12 flex items-center  ">
                  <div className="w-40 ">
                    <label className="mx-5 text-lg text-gray-700 font-medium">
                      Ad Soyad:
                    </label>
                  </div>

                  <input
                    className="w-72 rounded-md h-10 px-2 border-2 border-gray-400 "
                    type="text"
                  ></input>
                </div>
                <div className="mt-5  h-12 flex items-center  ">
                  <div className="w-40 ">
                    <label className="mx-5 text-lg text-gray-700 font-medium">
                      Cep Telefonu:
                    </label>
                  </div>

                  <InputMask
                    placeholder="+90 (999) 999-99-99"
                    mask="+90 (999) 999-99-99"
                    className="w-72 rounded-md h-10 px-2 border-2 border-gray-400"
                  ></InputMask>
                </div>
                <div className="mt-5  h-12 flex items-center  ">
                  <div className="w-40 ">
                    {" "}
                    <label className="mx-5 text-lg text-gray-700 font-medium">
                      Email:
                    </label>
                  </div>

                  <input
                    className="w-72 rounded-md h-10 px-2 border-2 border-gray-400"
                    type="email"
                  ></input>
                </div>
                <div className="mt-5 h-24 flex items-center  ">
                  <div className="w-40">
                    {" "}
                    <label className="mx-5 text-lg text-gray-700 font-medium ">
                      Mesajınız:
                    </label>
                  </div>

                  <textarea
                    className="w-72 mt-5 rounded-md h-32 px-2 py-2 border-2 border-gray-400"
                    type="text"
                  ></textarea>
                </div>
              </form>
              <button
                onMouseOver={(e) => {
                  $(e.target).css("background-color", "#16A34A");
                }}
                onMouseOut={(e) =>
                  $(e.target).css("background-color", "#15803D")
                }
                className="bg-green-700 text-white py-2 px-4 rounded w-44 hover:bg-gray-700 mt-16 ml-52"
              >
                Gönder
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Communication;
