import React from "react";

function Host() {
    return (
        <>
            <div className="w-[90%] sm:w-4/5 mx-auto mt-14">
                <h2 className="text-center text-4xl">Meet Your Host</h2>
                <div className="w-[100%] xl:w-[90%] mx-auto bg-[#3B4E55] border-solid border-2 border-[#2EBC99] mt-9">
                    <div className="px-8 sm:px-12 py-14">
                        <div className="flex flex-row flex-wrap md:flex-nowrap gap-2 justify-between">
                            <div className="w-full md:w-[20%] flex flex-col justify-around items-center">
                                <img src="/images/user.png" alt="User" className="lg:w-[45%] lg:h-[40%] xl:w-[45%] xl:h-[50%] border-solid border-2 border-[#2EBC99] rounded-full" />
                                <p className="text-center pt-2">Hotel</p>
                            </div>
                            <div className="flex flex-row justify-between flex-wrap md:flex-nowrap mx-auto gap-1 w-full sm:w-[80%]">
                                <div className="bg-[#022634] w-full md:w-[32%] h-[200px] border-solid border-2 border-[#2EBC99] flex flex-col justify-center items-center gap-2">
                                    <h1 className="text-4xl lg:text-6xl">51</h1>
                                    <p>Reviews</p>
                                </div>
                                <div className="bg-[#022634] w-full md:w-[32%] h-[200px] border-solid border-2 border-[#2EBC99] flex flex-col justify-center items-center gap-2">
                                    <h1 className="text-4xl lg:text-6xl">4.94</h1>
                                    <p>Rating</p>
                                </div>
                                <div className="bg-[#022634] w-full md:w-[32%] h-[200px] border-solid border-2 border-[#2EBC99] flex flex-col justify-center items-center gap-2">
                                    <h1 className="text-4xl lg:text-6xl">8</h1>
                                    <p className="text-center">Years Handling</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-10 pb-7 px-6 sm:px-14 text-sm sm:text-xl sm:leading-9">
                            <ul style={{ listStyleType: "'→  '" }}>
                                <li>Personalized Concierge Service</li>
                                <li>Local Insight</li>
                                <li>Warm Welcome</li>
                                <li>Culinary Delights</li>
                                <li>Activity Experts</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-justify text-sm">Fugiat qui duis velit nisi nisi anim mollit aliqua mollit magna id. Lorem amet in proident anim cillum aliqua adipisicing esse irure mollit. Sit proident sunt magna labore eu cillum ex labore. Fugiat ad pariatur minim aliqua eiusmod dolore anim ad duis reprehenderit sunt.
                                Deserunt eiusmod sunt ipsum ullamco qui consequat sint laboris ullamco excepteur sunt ut irure. Anim qui mollit amet excepteur mollit velit ea commodo ea duis. Commodo proident culpa mollit nisi voluptate duis occaecat quis excepteur officia. Adipisicing veniam minim tempor excepteur consequat labore cillum commodo. Consectetur ipsum labore sit sit voluptate nulla dolore officia ea reprehenderit ad. Nostrud sit aliqua amet voluptate aliqua duis sint elit pariatur aute. Minim amet pariatur sint laborum velit duis id.
                            </p>
                        </div>
                        <div className="flex flex-col mt-6">
                            <button className="bg-[#2EBC99] text-white md:w-[30%] lg:w-[20%] mx-auto px-2 py-3">Contact Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Host;