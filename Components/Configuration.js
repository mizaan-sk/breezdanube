"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";

const configurations = [
  {
    type: "1 Bed",
    area: "568",
    image: "/assets/Conf1.webp",
  },
  {
    type: "2 Bed",
    area: "936",
    image: "/assets/Conf2.webp",
  },
];

const Configuration = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="bg-[#f5f5f5] md:py-10 py-6 px-4">
        <div className="text-center mb-10 flex flex-col items-center">
          <div className="w-16 md:w-17 mx-auto">
            <Image
              src="/assets/Banner_Logo.webp"
              width={112}
              height={112}
              alt="Slider Logo"
            />
          </div>
          <h1 className="md:text-4xl text-[28px] font-normal font-serif tracking-wide text-[#333333]">
            CONFIGURATION
          </h1>
          <span className="mt-2 w-16 h-[2px] bg-[#E2BB6C]"></span>
        </div>

        <div className="wrapper">
          {configurations.map((item, i) => (
            <div
              key={i}
              className="card"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="fon"></div>
              <div className="text">
                <h2 className="text-2xl md:text-4xl text-[#B1913D] font-medium">
                  {item.type}
                </h2>
                <p className="text-base font-sans uppercase">Sq.ft</p>
                <p className="md:text-4xl text-2xl text-[#B1913D] font-medium">
                  {item.area}
                </p>
                <div className="triangle"></div>
              </div>
              <div className="btn" onClick={() => setModalOpen(true)}>
                Know More
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 24px;
          }

          .card {
            width: 360px;
            height: 530px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: relative;
            overflow: hidden;
            border-radius: 12px;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease;
            cursor: pointer;
          }

          .card:hover {
            transform: translateY(-10px);
          }

          .fon {
            position: absolute;
            width: 100%;
            height: 100%;
            background: #000;
            opacity: 0.3;
            z-index: 2;
            transition: opacity 0.25s;
            border-radius: 12px;
          }

          .card:hover .fon {
            opacity: 0;
          }

          .text {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            background: #fff;
            height: 45%;
            width: 100%;
            text-align: center;
            padding: 40px 0 0;
            z-index: 4;
            transition: all 0.25s;
            border-radius: 0 0 12px 12px;
          }

          .card:hover .text {
            height: 10%;
            padding: 10px 0 0;
          }

          .text h2 {
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: margin-bottom 0.25s;
          }

          .card:hover .text h2 {
            margin-bottom: 0;
          }

          .text p {
            line-height: 20px;
            margin: 0 10px;
            color: #777;
            z-index: 5;
            transition: opacity 0.25s;
          }

          .card:hover .text p {
            opacity: 0;
          }

          .text .triangle {
            width: 100%;
            height: 50px;
            background: #fff;
            z-index: 3;
            transform: matrix(1.01, -0.3, 0, 2, -1, 10);
            border-radius: 0 0 12px 12px;
          }

          .btn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            width: 120px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #b1913d;
            color: #fff;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            border-radius: 6px;
            z-index: 5;
            transition: transform 0.3s ease;
          }

          .card:hover .btn {
            transform: translate(-50%, -50%) scale(1);
          }

          .btn:hover {
            background: #d5b156;
          }

          @media (max-width: 900px) {
            .card {
              width: 45vw;
              max-width: 300px;
              height: 450px;
            }
          }

          @media (max-width: 560px) {
            .card {
              width: 100%;
              height: 430px;
            }

            .text {
              padding: 20px 0 0;
              height: 40%;
            }
          }

          @media (max-width: 480px) {
            .card {
              width: 100%;
              height: 400px;
            }
          }
        `}</style>
      </section>

      {modalOpen && <Modal onClose={() => setModalOpen(false)} isOpen={modalOpen} />}
    </>
  );
};

export default Configuration;
