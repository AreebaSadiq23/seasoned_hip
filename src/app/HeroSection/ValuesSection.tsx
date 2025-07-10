const ValuesSection = () => (
    <section className="w-full py-12 bg-white flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 dancing-script">Our Values</h2>
        <p className="text-gray-500 mb-8 text-center max-w-xl dancing-script">We believe in health, taste, and being student-friendly. Our mission is to deliver delicious, healthy desserts while supporting students and making every experience enjoyable and accessible.</p>
        <div className="flex flex-col md:flex-row gap-8 mb-10 w-full max-w-4xl justify-center">
            {/* Value 1: Health */}
            <div className="flex flex-col items-center bg-gray-50 rounded-xl shadow p-6 flex-1 min-w-[220px]">
                <svg className="w-10 h-10 text-orange-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z" />
                </svg>
                <h3 className="font-semibold text-lg text-gray-800 mb-2 dancing-script">Health</h3>
                <p className="text-gray-500 text-center text-sm dancing-script">We prioritize healthy ingredients to ensure our desserts are good for you.</p>
            </div>
            {/* Value 2: Taste */}
            <div className="flex flex-col items-center bg-gray-50 rounded-xl shadow p-6 flex-1 min-w-[220px]">
                <svg className="w-10 h-10 text-orange-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <h3 className="font-semibold text-lg text-gray-800 mb-2 dancing-script">Taste</h3>
                <p className="text-gray-500 text-center text-sm dancing-script">Every bite is crafted for deliciousness and satisfaction.</p>
            </div>
            {/* Value 3: Student-Friendly */}
            <div className="flex flex-col items-center bg-gray-50 rounded-xl shadow p-6 flex-1 min-w-[220px]">
                <svg className="w-10 h-10 text-orange-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 7v-6m0 0l-7-4m7 4l7-4" />
                </svg>
                <h3 className="font-semibold text-lg text-gray-800 mb-2 dancing-script">Student-Friendly</h3>
                <p className="text-gray-500 text-center text-sm dancing-script">Affordable, accessible, and made for students by students.</p>
            </div>
        </div>
        {/* Newsletter CTA */}
        <div className="w-full max-w-md bg-white border border-orange-200 rounded-2xl shadow p-8 flex flex-col items-center">
            <h4 className="text-orange-500 text-xl font-bold mb-2 dancing-script">Subscribe to our Newsletter</h4>
            <p className="text-gray-500 mb-4 text-center dancing-script">Get the latest updates, exclusive offers, and dessert inspiration delivered to your inbox!</p>
            <form className="w-full flex flex-col sm:flex-row gap-3">
                <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-full outline-none border border-orange-200 text-gray-700 focus:border-orange-400"
                />
                <button
                    type="submit"
                    className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-orange-600 transition"
                >
                    Subscribe
                </button>
            </form>
        </div>
    </section>
);
export default ValuesSection;