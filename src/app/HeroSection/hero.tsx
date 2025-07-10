'use client'
import React from "react";

const Hero = () => {
    return (
        <>
            <section className="w-full px-4 py-12 bg-white flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Left: Text Box */}
                <div className="flex flex-col justify-center items-start max-w-xs">
                    <h1 className="text-3xl md:text-4xl text-gray-800 font-bold mb-4 leading-tight berkshire-swash-regular">
                        Welcome to <br/> Seasoned <span className="text-orange-500">Hip</span>
                    </h1>
                    <p className="text-gray-600 dancing-script">
                        We are a company that makes and distributes low-calorie desserts. Our main product is
                        made with the world's top chefs and available in stores worldwide. Our target audience
                        is college students. We want to convey a sense of comfort, while at the same time being
                        approachable.</p>
                    {/* Shop Now Button */}
                    <a href="#" className="hidden sm:inline-block bg-orange-500 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-orange-600 transition mt-4">
                        Shop Now
                    </a>
                </div>
                {/* Center: Tall, Narrow Video */}
                <div className="flex justify-center items-center">  
                    <div className="w-72 h-96  overflow-hidden shadow-lg">
                        <video
                            src="/videos/1.mp4"
                            controls
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right: 3 Images Stacked Vertically, Each with a Paragraph */}
                <div className="flex flex-col gap-8 justify-center">
                    {/* Row 1 */}
                    <div className="flex items-start gap-4">
                        <img
                            src="/images/1.jpg"
                            alt="Feature 1"
                            className="w-28 h-28 object-cover shadow mt-1"
                        />
                        <p className="text-gray-600 text-sm max-w-xs berkshire-swash-regular">Join students from around the world and be part of a vibrant,supportive network.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, molestias nihil labore optio delectus, itaque impedit adipisci ea ab ex praesentium, animi totam? Optio ducimus minima cum a facere ipsa.</p>
                    </div>
                    {/* Row 2 */}
                    <div className="flex items-start gap-4">
                        <img
                            src="/images/9.jpg"
                            alt="Feature 2"
                            className="w-28 h-28 object-cover shadow mt-1"
                        />
                        <p className="text-gray-600 text-sm max-w-xs berkshire-swash-regular">Experience innovative teaching methods and cutting-edge resources for your success.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, molestias nihil labore optio delectus, itaque impedit adipisci ea ab ex praesentium, animi totam? Optio ducimus minima cum a facere ipsa.</p>
                    </div>
                    {/* Row 3 */}
                    <div className="flex items-start gap-4">
                        <img
                            src="/images/6.jpg"
                            alt="Feature 3"
                            className="w-28 h-28 object-cover shadow mt-1"
                        />
                        <p className="text-gray-600 text-sm max-w-xs berkshire-swash-regular">Fast, reliable, and scalable platform to support your academic journey.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, molestias nihil labore optio delectus, itaque impedit adipisci ea ab ex praesentium, animi totam? Optio ducimus minima cum a facere ipsa.</p>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Hero;
