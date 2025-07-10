'use client'
import React, { useState } from 'react';

const blogPosts = [
  {
    title: '5 Easy Desserts for Busy Students',
    description: 'Being a student often means juggling classes, assignments, and social life, leaving little time for elaborate cooking. That’s why we’ve gathered five super easy dessert recipes that require minimal ingredients and effort. From microwave mug cakes to no-bake treats, these desserts are perfect for satisfying your sweet tooth in your dorm or at home, without taking up too much of your precious study time.',
    image: '/blog/b1.jpg',
    category: 'Desserts',
  },
  {
    title: 'Healthy Snacking Tips',
    description: 'Maintaining your energy during long study sessions is crucial, and healthy snacking can make all the difference. Discover practical tips for choosing snacks that are both nutritious and delicious, such as pairing fruits with protein, opting for whole grains, and keeping hydrated. These strategies will help you stay focused, avoid energy crashes, and support your overall well-being throughout the semester.',
    image: '/blog/b2.jpg',
    category: 'Health Tips',
  },
  {
    title: 'Balancing Study and Social Life',
    description: 'College life is all about finding the right balance between academics and enjoying time with friends. In this post, we share effective time management techniques, ways to set priorities, and tips for making the most of your college experience. Learn how to create a schedule that allows you to excel in your studies while still having fun and building lasting relationships.',
    image: '/blog/b3.jpg',
    category: 'Student Life',
  },
  {
    title: 'Chocolate Mug Cake in 5 Minutes',
    description: 'Craving something sweet late at night? This chocolate mug cake recipe is your go-to solution! With just a few pantry staples and a microwave, you can whip up a rich, gooey cake in under five minutes. It’s perfect for those moments when you need a quick dessert fix without the hassle of baking an entire cake.',
    image: '/blog/b4.jpg',
    category: 'Desserts',
  },
  {
    title: 'Staying Active on Campus',
    description: 'Staying fit in college doesn’t have to mean spending hours at the gym. Explore creative and fun ways to stay active on campus, from joining intramural sports and fitness classes to taking brisk walks between lectures. These tips will help you incorporate movement into your daily routine, boost your mood, and keep your body healthy despite a busy schedule.',
    image: '/blog/b5.jpg',
    category: 'Health Tips',
  },
  {
    title: 'Making Friends as a New Student',
    description: 'Starting college can be overwhelming, especially when it comes to making new friends. This guide offers practical advice on breaking the ice, joining clubs, and participating in campus events. With these tips, you’ll find it easier to connect with others, build meaningful relationships, and make your college years memorable.',
    image: '/blog/b6.jpg',
    category: 'Student Life',
  },
  {
    title: 'No-Bake Energy Bites',
    description: 'Need a quick, healthy snack to fuel your busy day? These no-bake energy bites are packed with wholesome ingredients like oats, peanut butter, and honey. They’re easy to make, require no oven, and are perfect for grabbing on the go between classes or study sessions. Try this recipe for a tasty boost of energy anytime you need it.',
    image: '/blog/b7.jpg',
    category: 'Desserts',
  },
  {
    title: 'Mindfulness for Students',
    description: 'Stress and anxiety are common among students, but practicing mindfulness can help you stay calm and focused. Learn simple mindfulness exercises, such as deep breathing and meditation, that you can incorporate into your daily routine. These techniques will help you manage stress, improve concentration, and enhance your overall academic performance.',
    image: '/blog/b8.jpg',
    category: 'Health Tips',
  },
  {
    title: 'Dorm Room Decor Ideas',
    description: 'Transform your dorm room into a cozy and personalized space with these creative decor ideas. From DIY wall art and string lights to affordable storage solutions, we’ll show you how to make your room feel like home without breaking the bank. Express your personality and create a comfortable environment that inspires you every day.',
    image: '/blog/b9.jpg',
    category: 'Student Life',
  },
];

const BlogPage = () => {
  const [search, setSearch] = useState('');
  const filteredPosts = blogPosts.filter(
    post =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="bg-[#f7f7f7] text-[#2d2d2d] min-h-screen">
       <div className="relative w-full h-[220px] md:h-[300px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/10.jpg)' }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="text-white text-3xl md:text-5xl font-bold mt-8 dancing-script">Blog</h1>
          <div className="flex items-center gap-2 text-white mt-2">
            <span className="text-sm">Home</span>
            <span className="mx-1">&gt;&gt;</span>
            <span className="text-sm font-semibold">Blog</span>
          </div>
        </div>
     </div>
      {/* Our Values Section */}
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
        <div className="w-full max-w-md bg-white p-8 flex flex-col items-center">
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
      {/* Blog Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-sm text-right text-gray-400 mb-4">HOME / BLOG </div>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="w-full max-w-md px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="font-bold mb-4 berkshire-swash-regular">Top Posts</h3>
              <ul className="space-y-4 text-sm dancing-script">
                {[
                  'Aenean mattis tortor ac sapien congue molestie.',
                  'Vestibulum ante ipsum primis in orci faucibus luctus.',
                  'Sapien etiam eu odio imposuere vitae bibendum vitae lorem.',
                  'Etiam eu odio in sapien posuere bibendum vitae lorem.',
                  'Morbi eget leo a tellus gravida sagittis nec nec felis.'
                ].map((post, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-orange-500 font-bold">{i + 1}</span>
                    <div>
                      <p className="font-medium text-gray-700 leading-tight">{post}</p>
                      <p className="text-gray-400 text-xs">FOOD, TRAVEL - NOV 17, 2020</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 berkshire-swash-regular">Instagram</h3>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((num, i) => (
                  <div key={i} className="aspect-square bg-gray-300 overflow-hidden rounded">
                    <img 
                      src={`/images/${num}.jpg`} 
                      alt={`Instagram ${num}`} 
                      className="object-cover w-full h-full" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.length === 0 ? (
              <div className="col-span-full text-center text-gray-400 py-12 dancing-script">No articles found.</div>
            ) : (
              filteredPosts.map((post, i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="h-48 w-full object-cover" 
                  />
                  <div className="p-4">
                    <p className="text-xs text-gray-400 mb-2 dancing-script">{post.category} - NOV 17, 2020</p>
                    <h3 className="font-semibold text-md mb-2 leading-tight dancing-script">{post.title}</h3>
                    <p className="text-sm text-gray-500 dancing-script">{post.description}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
