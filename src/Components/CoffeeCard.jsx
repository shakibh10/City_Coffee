import React from 'react';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';

const CoffeeCard = ({ coffee }) => {

  const { name, chef, price, photo } = coffee;

  return (
   <div className=" ">
       <div className="flex p-12 items-center bg-gray-100 rounded shadow">
          {/* Coffee Image */}
          <img
            src={photo}
            className="w-24 h-24 object-cover rounded"
          />

          {/* Coffee Details */}
          <div className="flex-1 ml-4 text-left">
            <h2 className="text-lg font-bold">Name: {name}</h2>
            <p className="text-sm text-gray-600">Chef: {chef}</p>
            <p className="text-sm font-semibold">Price: {price} Taka</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 ml-4">
            <button className="bg-[#D2B48C] hover:bg-[#c19a6b] text-white p-2 rounded">
              <FaEye />
            </button>
            <button className="bg-gray-700 hover:bg-gray-800 text-white p-2 rounded">
              <FaPen />
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded">
              <FaTrash />
            </button>
          </div>
        </div>
   </div>
  );
};

export default CoffeeCard;
