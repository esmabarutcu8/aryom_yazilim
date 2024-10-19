import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProjectForm from "./AddProjectForm";
import $ from "jquery";

const Home = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const [visibleForm, setVisibleForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const datasPage = 8;
  const lastIndex = currentPage * datasPage;
  const firstIndex = lastIndex - datasPage;
  const currentPosts = datas.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(datas.length / datasPage);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setVisibleForm(false);
    fetchProjects();
  }, []);
  useEffect(() => {
    setVisibleForm(false);
  }, [datas]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const slides = [
    {
      id: 1,
      image:
        "https://iakademi.com/wp-content/uploads/2022/08/Bilgisayarli-Muhasebe-Kursu-Uzaktan-Eg%CC%86itim.jpeg",
    },
    {
      id: 2,
      image:
        "https://www.uzaktanegitim.com/images/blog/bilgisayarli_muhasebe_ne_ise_yarar.jpg",
    },
    {
      id: 3,
      image:
        "https://uzem.yasamarti.com.tr/wp-content/uploads/2019/05/bilgmuhasebyeni1.jpg",
    },
  ];

  const fetchProjects = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setDatas(data);
    } catch (error) {
      console.error("Hata:", error);
    }
  };
  console.log("datas:", datas);

  const onClick = () => {
    setVisibleForm(true);
  };

  return (
    <>
      <div className="">
        {/* slider */}
        <div className=" relative w-[1250px] h-[500px] mx-auto mt-10 rounded-md flex justify-center">
          <div className=" overflow-hidden w-[1250px] h-[500px]  rounded-lg">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="min-w-full">
                  <img
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-400 p-2 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2  bg-gray-400 p-2 rounded-full"
          >
            ›
          </button>
        </div>

        <div className="flex justify-center mt-20 px-4">
          {/* hakkımda */}
          <div className="bg-zinc-300 border-green-700 border-x-2 rounded-lg w-full max-w-screen-lg mx-auto shadow-md p-4">
            <h1 className="text-3xl font-medium  mt-3 flex justify-center text-green-700 h-10 ml-5">
              <p>Hakkımda</p>
            </h1>
            <p className="p-4  text-gray-700 w-full mx-auto rounded-lg  ">
              2022 yılında Balıkesir Üniversitesi Bilgisayar Mühendisliği
              bölümünden mezun oldum. Şu anda İstanbul Üniversitesi Açık ve
              Uzaktan Eğitim Fakültesi Yönetim Bilişim Sistemleri bölümünde 4.
              sınıf öğrencisiyim. Zorunlu yaz stajımı 2 ay boyunca Depar
              Teknoloji şirketinde gerçekleştirdim. Stajım sonrasında, 5 ay
              boyunca Westerops Bilişim şirketinde Frontend ekibinde görev
              aldım. Mezuniyetimin ardından, Back.zone Yazılım Firması'nda
              Junior Frontend Developer olarak çalıştım. Ardından, yaklaşık 1
              yıl boyunca Etc Base Yazılım Firması'nda Yazılım Destek Uzman
              Yardımcısı olarak görev aldım ve burada Frontend takımında yer
              aldım. Bu süreçte, mxml ve ActionScript ile yazılmış ekranları
              yeni teknolojilerle yeniden kodladım. React.js, TypeScript ve
              Redux kullanarak çeşitli projelerde aktif rol aldım. Ayrıca,
              gerektiğinde hata çözümü için Java ile backend kodlamaları
              gerçekleştirdim. 2024 Temmuz ayında Bambi Yatak Şirketi'nde
              Yazılım Uzmanı olarak çalışmaya başladım. Bu pozisyonda SQL, .NET
              Core ve React.js ile çeşitli projelerde kodlamalar yaptım.
            </p>
          </div>
          .
        </div>
        {/* projelerim liste */}
        <div className=" mt-32  flex justify-center ">
          <div className="bg-zinc-300 border-green-700  rounded-lg w-full mx-auto shadow-md p-4">
            <h1 className="text-3xl mb-3 flex justify-center mb-8 font-medium  text-green-700">
              <p>Projelerim</p>
            </h1>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                {currentPosts.map((post, index) => (
                  <div key={index} className="flex justify-center py-4">
                    <div
                      key={post.id}
                      className="p-4 border rounded-lg border-green-700 border-2 h-96 w-96 "
                    >
                      <img
                        src={`https://picsum.photos/200/100?id=${post.id}`}
                        alt={`Random for post ${post.id}`}
                        className="mt-2 w-96 h-48"
                      />
                      <h2 className="font-bold mt-5 text-gray-700">
                        {post.title}
                      </h2>

                      <button
                        onClick={() => {
                          window.scrollTo(0, 0);
                          navigate("/projects", {
                            state: {
                              id: post.id,
                            },
                          });
                        }}
                        className="text-green-700 font-medium mb-10"
                      >
                        Detayları İncele
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className=" mt-5 flex justify-end  ">
                <div className="flex">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400  text-green-700 font-medium"
                  >
                    Önceki
                  </button>
                  <span className="mx-2 mt-2 text-green-700 font-medium">
                    {currentPage} / {totalPages}
                  </span>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400  text-green-700 font-medium"
                  >
                    Sonraki
                  </button>
                </div>
              </div>
              <div className="mt-5 ml-5">
                <button
                  onMouseOver={(e) =>
                    $(e.target).css("background-color", "#16A34A")
                  }
                  onMouseOut={(e) =>
                    $(e.target).css("background-color", "#15803D")
                  }
                  onClick={onClick}
                  className="bg-green-700 text-white py-2 px-4 rounded-md w-44  "
                >
                  Yeni Proje Ekleme
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* form yeni proje ekleme */}
        {visibleForm && (
          <div className="w-screen h-[600px] flex justify-center border-x-2 border-gray-700 py-5">
            <AddProjectForm setDatas={setDatas} datas={datas} />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
