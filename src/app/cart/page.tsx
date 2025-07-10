import React from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

const cartItems = [
  {
    id: 1,
    name: "Chocolate Cake",
    price: 25.99,
    quantity: 2,
    image: "/shop/1.jpg",
    description: "Delicious chocolate cake with cream filling"
  },
  {
    id: 2,
    name: "Vanilla Cupcake",
    price: 3.99,
    quantity: 4,
    image: "/shop/2.jpg",
    description: "Classic vanilla cupcake with buttercream"
  },
  {
    id: 3,
    name: "Red Velvet Cake",
    price: 32.99,
    quantity: 1,
    image: "/shop/3.jpg",
    description: "Rich red velvet cake with cream cheese frosting"
  }
];

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">Review your items and proceed to checkout</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Cart Items ({cartItems.length})</h2>
              
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-4 border-b border-gray-200 last:border-b-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button className="p-2 hover:bg-gray-100">
                          <FaMinus size={12} />
                        </button>
                        <span className="px-4 py-2">{item.quantity}</span>
                        <button className="p-2 hover:bg-gray-100">
                          <FaPlus size={12} />
                        </button>
                      </div>
                      <span className="font-semibold text-orange-600">${item.price}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-800 mb-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button className="text-red-500 hover:text-red-700 p-2">
                      <FaTrash size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-800">Total</span>
                    <span className="text-lg font-bold text-orange-600">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition mb-4">
                Proceed to Checkout
              </button>
              
              <button className="w-full border border-orange-500 text-orange-500 py-3 rounded-lg font-semibold hover:bg-orange-50 transition">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 