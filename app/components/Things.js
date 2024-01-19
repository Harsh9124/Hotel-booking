import React from "react";

function Things() {
    return (
        <>
            <div className="w-[80%] mx-auto mt-14 mb-10">
                <h2 className="text-2xl sm:text-4xl">Things To Know</h2>
                <div className="w-[90%] mx-auto flex flex-col sm:flex-row justify-between gap-6 sm:gap-3 mt-8 text-sm md:text-lg">
                    <div>
                        <ul className="leading-7">
                            <li>Fairy Chimneys</li>
                            <li>Underground Cities</li>
                            <li>Hot Air Balloons</li>
                            <li>Rock Churches</li>
                        </ul>
                        <p className="text-[#2cf29a] sm:mt-5">Know More &#8594;</p>
                    </div>

                    <div>
                        <ul className="leading-7">
                            <li>Cave Dwellings</li>
                            <li>Goreme Open-Air Museum</li>
                            <li>Unique Landscapes</li>
                            <li>Pigeon Valley</li>
                        </ul>
                        <p className="text-[#2cf29a] sm:mt-5">Know More &#8594;</p>
                    </div>

                    <div>
                        <ul className="leading-7">
                            <li>Ancient Frescoes</li>
                            <li>Uchisar Castle</li>
                            <li>Rose Valley</li>
                            <li>Cappadocian Cuisine</li>
                        </ul>
                        <p className="text-[#2cf29a] sm:mt-5">Know More &#8594;</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Things;