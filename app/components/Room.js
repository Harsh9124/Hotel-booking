import React from "react";


function Room() {
    return (
        <>
            <div className="Room w-4/5 mx-auto pt-24 pb-12">
                <div className="flex flex-row justify-between gap-4">
                    <div className="md:w-[50%] w-full border-solid pt-1">
                        <h3 className="text-4xl sm:text-5xl">Room in a cave hosted by Aydin</h3>
                        <div className="mt-4 mb-4 pl-6 text-lg ">
                            <ul style={{ listStyleType: "disc" }}>
                                <li className="py-2">
                                    <dl>
                                        <dt>Natural Ambiance:</dt>
                                        <dd className="text-sm">Experience Tranquility Amidst Ancient Rock Walls</dd>
                                    </dl>
                                </li>
                                <li className="py-2">
                                    <dl>
                                        <dt>Aydin's Hospitality:</dt>
                                        <dd className="text-sm">Discover Warmth and Comfort in the Heart of the Cave</dd>
                                    </dl>
                                </li>
                                <li className="py-2">
                                    <dl>
                                        <dt>Hidden Gems Tour:</dt>
                                        <dd className="text-sm">Explore Aydin's Curated Guide to Cave Wonders</dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                        <p>For a memorable cave experience hosted by Aydin</p>
                    </div>
                    <div className="md:w-[40%] hidden md:block">
                        <img src="/images/Cappadocia1.jpg" alt="Cappadocia" style={{ width: "100%", height: "350px", border: "2px solid #2EBC99" }} />
                    </div>
                </div>

                <div className="flex flex-row flex-wrap sm:flex-nowrap gap-1 justify-between mt-12">
                    <div className="bg-[#022634] w-full sm:w-[32%] h-[200px] border-solid border-2 border-[#2EBC99] flex flex-col justify-center items-center">
                        <img src="/images/bed.png" className="rounded-full mb-2" />
                        <p className="text-sm md:text-md">1 Bed</p>
                    </div>
                    <div className="bg-[#022634] w-full sm:w-[32%] h-[200px] border-solid border-2 border-[#2EBC99] flex flex-col justify-center items-center">
                        <img src="/images/bathtub.png" className="rounded-full mb-2" />
                        <p className="text-sm md:text-md ">Private elegant Bathtub</p>
                    </div>
                    <div className="bg-[#022634] w-full sm:w-[32%] h-[200px] border-solid border-2 border-[#2EBC99] flex flex-col justify-center items-center">
                        <img src="/images/guests.png" className="rounded-full mb-2" />
                        <p className="text-sm md:text-md">Friendly Staff</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Room;

