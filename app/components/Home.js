import React from "react";


function Home() {
    return (
        <>
            <div className="w-4/5 mx-auto mb-11">
                <div className="mt-8">
                    <h1 className="md:text-6xl text-4xl">Cappadocia St Nino's Garden</h1>
                    <p className="mt-3">A blissful escape into nature's embrace.</p>
                </div>

                <div className="mt-5 flex flex-row lg:flex-nowrap flex-wrap gap-4 h-[450]">
                    <div className="xl:w-[50%] w-full">
                        <img src="/images/Cappadocia1.jpg" alt="Cappadocia" className="w-[100%] xl:h-[450px] h-[525px]" />
                    </div>
                    <div className="xl:w-[50%] w-full bg-[#3B4E55] border-solid border-2 border-[#2EBC99]">
                        <h2 className="bg-[#2EBC99] h-[50px] text-center text-3xl pt-2">Details</h2>

                        <form action="#" method="POST">
                            <div className="w-[90%] mx-auto">
                                <div className=" mt-3 flex flex-row xl:flex-nowrap flex-wrap gap-3 justify-between">
                                    <div className="flex flex-col w-full">
                                        <label htmlFor="FName">First Name :</label>
                                        <input id="FName" name="FName" type="text" placeholder="First Name" className="bg-[#3B4E55] border-solid border-2 border-[#2EBC99] p-1 mt-1" />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label htmlFor="LName">Last Name :</label>
                                        <input id="LName" name="LName" type="text" placeholder="Last Name" className="bg-[#3B4E55] border-solid border-2 border-[#2EBC99] p-1 mt-1" />
                                    </div>
                                </div>
                                <div className="flex flex-col mt-3">
                                    <label htmlFor="Mobile">Mobile No. :</label>
                                    <input id="Mobile" name="Mobile" type="number" maxLength={10} minLength={10} placeholder="Mobile Number" className="bg-[#3B4E55] border-solid border-2 border-[#2EBC99] p-1 mt-1" />
                                </div>
                                <div className="flex flex-col mt-3">
                                    <label htmlFor="Email">Email ID. :</label>
                                    <input id="Email" name="Email" type="email" placeholder="abc@email.com" className="bg-[#3B4E55] border-solid border-2 border-[#2EBC99] p-1 mt-1" />
                                </div>
                                <div className="flex flex-col mt-3">
                                    <label htmlFor="range">Range</label>
                                    <input id="range" type="range" className="bg-[#000] border-solid border-2 border-[#2EBC99] p-1 mt-1" />
                                </div>
                                <div className="flex flex-col mt-5 mb-7">
                                    <button className="bg-[#2EBC99] text-white w-[40%] mx-auto px-2 py-3">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="flex flex-row justify-between flex-wrap sm:flex-nowrap gap-1 mt-5">
                    <img src="/images/room1.jpg" alt="hotel" className="w-full sm:w-[24%] h-[200px] border-solid border-2 border-[#2EBC99]" />
                    <img src="/images/room2.jpg" alt="hotel" className="w-full sm:w-[24%] h-[200px] border-solid border-2 border-[#2EBC99]" />
                    <img src="/images/room3.jpg" alt="hotel" className="w-full sm:w-[24%] h-[200px] border-solid border-2 border-[#2EBC99]" />
                    <img src="/images/room4.jpg" alt="hotel" className="w-full sm:w-[24%] h-[200px] border-solid border-2 border-[#2EBC99]" />
                </div>

                <div className="flex flex-col mt-6">
                    <button className="bg-[#2EBC99] text-white w-[40%] md:w-[20%] mx-auto px-2 py-3">Book Now</button>
                </div>
            </div>
        </>
    );
}

export default Home;