import Image from "next/image";

const TestimonialSection = () => (
    <section className="w-full py-12 flex flex-col md:flex-row items-center justify-center bg-gray-50 gap-8">
        {/* Left: Testimonial Content */}
        <div className="flex flex-col items-start max-w-md w-full">
            <span className="text-orange-500 font-semibold text-sm mb-2 dancing-script">What they say</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 berkshire-swash-regular">What our customers say <br/> about us</h2>
            <div className="flex items-center gap-4 mb-4">
                <Image
                    src="/images/2.jpg"
                    alt="Customer profile"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover border-4 border-orange-200 shadow"
                />
                <div>
                    <div className="font-semibold text-gray-800 dancing-script">Ayesha Khan</div>
                    <div className="flex items-center mt-1">
                        {[...Array(4)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-gray-600 mb-6 dancing-script">Seasoned Hip desserts are a game changer! They taste amazing and fit perfectly into my healthy lifestyle. The community is so supportive too.</p>
            <button className="rounded-full bg-orange-500 text-white font-semibold px-6 py-2 shadow hover:bg-orange-600 transition">Read Reviews</button>
        </div>
        {/* Right: Image */}
        <div className="flex justify-center items-center w-full max-w-sm">
            <Image
                src="/images/2.jpg"
                alt="Happy customer"
                width={320}
                height={328}
                className="object-cover w-full h-82 shadow-lg border-4 border-white"
            />
        </div>
    </section>
)

export default TestimonialSection;