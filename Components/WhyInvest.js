"use client";
import Image from "next/image";

export default function WhyInvest() {
  const items = [
    {
      icon: "/danube/wi1.webp",
      title: "Interest",
    //   subtitle: "Interest",
    },
    {
      icon: "/danube/wi2.webp",
      title: "Per Month",
    //   subtitle: "",
    },
    {
      icon: "/danube/wi3.webp",
      title: "Fully Furnished",
      subtitle: "",
    },
    {
      icon: "/danube/wi4.webp",
      title: "High Return on Investment",
      subtitle: "",
    },
    {
      icon: "/danube/wi5.webp",
      title: "Timely Delivery",
      subtitle: "",
    },
    {
      icon: "/danube/wi6.webp",
      title: "Prime Location",
      subtitle: "",
    },
  ];

  return (
    <section className="bg-black py-12">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-2xl md:text-5xl font-medium text-white mb-10">
          Why Invest With <span className="font-bold">DANUBE PROPERTIES?</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 py-3 md:py-10">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-3">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={120}
                  height={120}
                />
              </div>
              <h3 className="text-lg font-medium tracking-[.6px] font-sans text-white">{item.title}</h3>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
