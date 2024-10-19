import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-28 bg-zinc-300 flex items-center justify-start h-auto">
      <img
        src="https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14042.jpg?w=740"
        alt="Profil Resmi"
        className="w-24 h-24 rounded-full object-cover border-4 border-green-700 mx-16"
      />
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-12">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="text-xl text-gray-700  hover:text-green-700  font-bold "
        >
          Ana Sayfa
        </button>
        <button
          onClick={() => {
            window.scrollTo(0, 500);
            navigate("/");
          }}
          className="text-xl text-gray-700 hover:text-green-700  font-bold  "
        >
          Hakkımda
        </button>
        <button
          onClick={() => {
            window.scrollTo(0, 1000);
            navigate("/");
          }}
          className="text-xl text-gray-700  hover:text-green-700  font-bold "
        >
          Projelerim
        </button>
        <button
          onClick={() => {
            navigate("/communication");
          }}
          className="text-xl text-gray-700 hover:text-green-700  font-bold "
        >
          İletişim
        </button>
      </div>
    </div>
  );
};

export default Navbar;
