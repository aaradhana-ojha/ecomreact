import React, { useRef, useState } from "react";

const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name: 'Fashion'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name: 'Shirt'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'Jacket'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'Mobile'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'Laptop'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'Shoes'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
        name: 'Home'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'Books'
    }
];

const Category = () => {
    const containerRef = useRef(null);
    const [scrollable, setScrollable] = useState(false);
    const [startX, setStartX] = useState(null);

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (!startX) return;

        const currentX = e.touches[0].clientX;
        const diff = startX - currentX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Swiped left
                navigateNext();
            } else {
                // Swiped right (if needed)
            }
            setStartX(null);
        }
    };

    const navigateNext = () => {
        // Logic to navigate to the next category
        console.log("Navigating to the next category");
    };

    const checkScrollable = () => {
        const container = containerRef.current;
        if (container) {
            setScrollable(container.scrollWidth > container.clientWidth);
        }
    };

    return (
        <div
            className={`flex flex-wrap justify-center lg:justify-between mt-5 ${scrollable ? 'overflow-x-auto' : ''}`}
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setStartX(null)}
            onMouseDown={() => setStartX(null)} // Clear startX on mouse events
            onMouseMove={() => setStartX(null)}
        >
            {/* category */}
            {category.map((item, index) => (
                <div key={index} className="px-3 lg:px-5 mb-8 lg:mb-0">
                    {/* Image */}
                    <div className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-blue-200 transition-all hover:bg-blue-400 cursor-pointer mb-1 mx-auto">
                        <div className="flex justify-center mb-2">
                            {/* Image tag */}
                            <img src={item.image} alt={item.name} />
                        </div>
                    </div>
                    {/* Name Text */}
                    <h1 className='text-sm lg:text-lg text-center font-medium title-font capitalize'>{item.name}</h1>
                </div>
            ))}
        </div>
    );
};

export default Category;
