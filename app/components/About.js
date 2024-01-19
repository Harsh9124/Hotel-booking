import React from "react";

function About() {

    return (
        <>
            <div className="w-4/5 mx-auto mt-14 pt-14 pb-10">
                <h2 className="text-center text-4xl">About this place</h2>
                <p className="text-center text-sm mt-2">Laborum quis esse ex elit Anim laboris est commodo velit anim.</p>
                <div className="flex flex-col-reverse lg:flex-row justify-between  xl:gap-10 mt-12 pb-14">
                    <div className="lg:w-[60%] xl:w-[50%] border-solid pt-5">
                        <div className="mt-4 mb-4 pl-6 flex flex-col sm:flex-row flex-wrap sm:flex-nowrap justify-around lg:justify-between leading-7 lg:text-md xl:text-lg">
                            <ul style={{ listStyleType: "'→  '" }}>
                                <li>Personalized Service</li>
                                <li>Local Insight</li>
                                <li>Warm Welcome</li>
                                <li>Culinary Delights</li>
                                <li>Activity Experts</li>
                            </ul>

                            <ul style={{ listStyleType: "'→  '" }}>
                                <li>Personalized Concierge Service</li>
                                <li>Local Insight</li>
                                <li>Warm Welcome</li>
                                <li>Culinary Delights</li>
                                <li>Activity Experts</li>
                            </ul>
                        </div>
                        <div className="flex xl:block mt-6">
                            <button className="bg-[#2EBC99] text-white w-[30%] sm:w-[20%] xl:w-[30%] mx-auto px-2 py-3">Explore</button>
                        </div>
                    </div>
                    <div className="lg:w-[35%] xl:w-[40%]">
                        <img src="/images/Cappadocia1.jpg" alt="Cappadocia" className="w-full h-[270px] border-2 border-[#2EBC99] border-solid "  />
                    </div>
                </div>


                <h2 className="text-center text-4xl mt-4">Our Reviews</h2>
                <div className="md:flex flex-row justify-center gap-5 mt-16">
                    <div className="md:w-[50%] border-solid border-4 border-[#2EBC99] rounded-lg px-10 pb-3">
                        <img src="/images/user.png" alt="user" className="border-2 border-[#2EBC99] rounded-full relative -top-7" />
                        <p className="text-[#2EBC99]">user name</p>
                        <p className="text-justify text-sm pt-1">Quis dolore do fugiat dolore consequat consequat amet minim culpa. Aute enim qui aliquip sint commodo deserunt aliquip amet incididunt fugiat occaecat sint officia.</p>
                    </div>
                    <div className="w-[50%]">
                        <img src="/images/quote1.png" alt="quote" className="w-[125px] h-[125px] mx-auto mt-1 md:block hidden"/>
                    </div>
                </div>
                <div className="md:flex flex-row justify-center gap-5 mt-10 md:mt-5">
                    <div className="w-[50%]">
                        <img src="/images/quote2.png" alt="quote" className="w-[125px] h-[125px] mx-auto mt-4 md:block hidden"  />
                    </div>
                    <div className="md:w-[50%] border-solid border-4 border-[#2EBC99] rounded-lg px-10 pb-3">
                        <img src="/images/user.png" alt="user" className="border-2 border-[#2EBC99] rounded-full relative -top-7" />
                        <p className="text-[#2EBC99]">user name</p>
                        <p className="text-justify text-sm pt-1">Quis dolore do fugiat dolore consequat consequat amet minim culpa. Aute enim qui aliquip sint commodo deserunt aliquip amet incididunt fugiat occaecat sint officia.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;