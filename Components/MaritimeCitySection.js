import Image from 'next/image';

export default function MaritimeCitySection() {
  const locations = [
    {
      icon: '/danube/marleft1.webp',
      time: '2 Mins',
      name: 'PORT RASHID BOAT STATION'
    },
    {
      icon: '/danube/marleft2.webp',
      time: '3 Mins',
      name: 'DUBAI CRUISE TERMINAL 2'
    },
    {
      icon: '/danube/marleft3.webp',
      time: '8 Mins',
      name: 'GOLD SOUK & JUMEIRAH BEACH'
    },
    {
      icon: '/danube/marleft4.webp',
      time: '8 Mins',
      name: 'DUBAI WORLD TRADE CENTRE'
    },
    {
      icon: '/danube/marleft5.webp',
      time: '10 Mins',
      name: 'BURJ KHALIFA'
    },
    {
      icon: '/danube/marleft6.webp',
      time: '15 Mins',
      name: 'DUBAI INTERNATIONAL AIRPORT'
    }
  ];

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/danube/marleft.webp"
                alt="Dubai Maritime City Aerial View"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col">
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-medium text-[#0F4977] mb-8 md:mb-2">
              Why <br/> Dubai Maritime City?
            </h2>

            {/* Location Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-4 mb-8 md:mb-12">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="relative w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4">
                    <Image
                      src={location.icon}
                      alt={location.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-900 mb-1 md:mb-2">
                    {location.time}
                  </div>
                  <div className="text-xs md:text-sm font-medium text-[#0F4977] tracking-wide uppercase">
                    {location.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}