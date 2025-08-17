import React from 'react'
import { Link } from 'react-router'

const CategoryCard = ({ id, name, image, count }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg border border-gray-200 transition-transform hover:scale-105 flex flex-col items-center p-6 text-center">

            {/* Icon / Image */}
            <div className="w-20 h-20 mb-4 flex items-center justify-center bg-[#e0f7ff] rounded-full">
                <img
                    src={image}
                    alt={name}
                    className="w-12 h-12 object-contain"
                />
            </div>

            {/* Text */}
            <h3 className="text-lg md:text-xl font-semibold text-[#25A8D6] mb-1">{name}</h3>
            <p className="text-sm text-gray-500 mb-4">{count} medicines</p>

            {/* Button */}
            <Link
                to={`/categoryDetails/${id}`}
                className="inline-block px-4 py-2 bg-[#25A8D6] text-white text-sm font-medium rounded-full shadow hover:bg-[#1c89b2] transition"
            >
                Explore
            </Link>
        </div>
    )
}

export default CategoryCard
