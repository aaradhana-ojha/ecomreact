import React, { useState, useEffect } from "react";
import heroImage1 from "../../assets/hero1.png";
import heroImage2 from "../../assets/hero2.jpg";
import heroImage3 from "../../assets/hero3.png";

const HeroSection = () => {
  const images = [heroImage1, heroImage2, heroImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 2000); // Change slide every 2 seconds (2000 milliseconds)

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, []); // Run effect only once when component mounts

  return (
    <div className="relative overflow-hidden">
      <div className="flex justify-center items-center h-64 lg:h-full relative"> {/* Adjusted the height for mobile responsiveness */}
        {/* Adjusted the height of each image */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="h-64 lg:h-full object-cover" 
            style={{ display: index === currentImageIndex ? "block" : "none" }}
            alt={`Hero Section ${index + 1}`}
          />
        ))}
        {/* Clickable arrow for next image */}
        <div
          onClick={nextImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-8 lg:w-20 lg:h-12 bg-white text-black flex justify-center items-center cursor-pointer shadow-md transition duration-300 hover:bg-gray-100 hover:shadow-lg"
          style={{
            backdropFilter: "blur(4px)",
            borderRadius: "0 9999px 9999px 0", // Rounded only the right corner
          }}
        >
          {/* You can customize the arrow icon here */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 lg:h-8 lg:w-8 font-bold" // Make the arrow bold
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
