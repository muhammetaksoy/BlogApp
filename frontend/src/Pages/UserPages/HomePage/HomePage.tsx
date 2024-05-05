import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import profil from "../../../Assets/profil.jpg"

const HomePage = () => {
  const experiences = [
    { company: "Company 1", role: "Frontend Developer", year: "2020-2022" },
    { company: "Company 2", role: "UI/UX Designer", year: "2018-2020" },
    { company: "Company 3", role: "Web Developer", year: "2016-2018" },
  ];

  const skills = [
    { language: "JavaScript", level: 90 },
    { language: "HTML/CSS", level: 85 },
    { language: "React", level: 80 },
    { language: "Python", level: 75 },
    { language: "Node.js", level: 70 },
  ];

  return (
    <section id="home">
      <div className="container mx-auto w-3/4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-around">
          <div className="lg:w-1/2 lg:pr-8 text-center lg:text-left my-8 ">
            <span className="text-yellow-500 text-2xl">Muhammet Aksoy</span>
            <h1 className="text-white mt-4 mb-4 text-4xl lg:text-5xl font-semibold">
              Frontend Developer
            </h1>
            <p className="text-gray-500 mb-6 text-lg leading-relaxed">
              Kişisel Websiteme hoşgeldiniz. Bu sitede benimle ilgili bilgilere
              ulaşmış olacaksınız. Kurumsal bir firmada frontend developer
              olarak çalışıyorum. Javascript, Typescript, Angular ve React gibi
              diller ve teknolojilerle ilgileniyorum. Ayrıca bloglar tabından
              yararlı olabileceğini düşündüğüm konularla alakalı yazmış olduğum
              içeriklere de ulaşabilirsiniz.
            </p>
            <div className="flex justify-center lg:justify-start mb-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition duration-300 mr-4"
              >
                <FaTwitter size={28} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-500 transition duration-300 mr-4"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-700 transition duration-300"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
            <Link to="/contact" className="inline-block bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded transition duration-300 hover:bg-blue-600">
              İletişime Geç
            </Link>
          </div>
          <div>
            <img
              src={profil}
              alt="Profil Resmi"
              className="rounded-full border-4 border-sky-700 h-72 lg:h-96 mx-auto my-6"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto w-3/4 p-16">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Deneyimler</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">{exp.company}</h3>
                <p className="text-gray-700 mb-2">{exp.role}</p>
                <p className="text-gray-500">{exp.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="my-16">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Yetenekler</h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-200 rounded-lg p-4 flex items-center justify-between">
                <p className="text-gray-700">{skill.language}</p>
                <div className="w-3/4 bg-blue-200 h-4 rounded-full">
                  <div
                    className="bg-blue-500 h-full rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
