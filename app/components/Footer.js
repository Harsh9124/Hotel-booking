import React from "react";

function Footer() {
    return (
        <>
            <div className="w-[80%] mx-auto mt-14 mb-10">
                <div className="flex flex-col sm:flex-row justify-between">
                    <div className="flex flex-col justify-center sm:items-center mb-8 sm:mb-0">
                        <p className="font-thin">@hotel Name</p>
                        <div className="flex flex-row mt-2">
                            <div>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/fb.png" alt="facebook" />
                                </a>
                            </div>
                            <div>
                                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/x.png" alt="x(twitter)" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="sm:mt-0 mt-6">
                        <h3 className="font-bold">Explore</h3>
                        <ul className="mt-1 sm:mt-5 font-thin leading-7">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Attractions</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="sm:mt-0 mt-6">
                        <h3 className="font-bold">About</h3>
                        <ul className="mt-1 sm:mt-5 font-thin leading-7">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Attractions</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="sm:mt-0 mt-6">
                        <h3 className="font-bold">Other</h3>
                        <ul className="mt-1 sm:mt-5 font-thin leading-7">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Attractions</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr style={{ borderTop: '1px solid rgb(170 170 170 / 62%)', width: '100%' }} />
            <div className="w-[80%] mx-auto my-3 flex flex-row justify-end gap-5 font-thin">
                <p>News</p>
                <p>policy</p>
                <p>Copyright @alphadev</p>
            </div>
        </>
    );
}

export default Footer;