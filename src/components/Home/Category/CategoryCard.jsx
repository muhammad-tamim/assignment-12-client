import React from 'react'
import { Link } from 'react-router'

const CategoryCard = ({ id, name, image, count }) => {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] overflow-hidden border border-[#e0f7ff] flex flex-col">
            {/* Image */}
            <img
                src={image}
                alt={name}
                className="size-40 mx-auto py-5 object-contain"
            />

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1 text-center">
                    <h3 className="text-xl font-bold text-[#25A8D6]">{name}</h3>
                    <p className="text-sm text-gray-600">{count} medicines</p>
                </div>

                {/* See More Button */}
                <div className="mt-4 text-center">
                    <Link
                        to={`/categoryDetails/${id}`}
                        className="inline-block px-5 py-2 bg-[#25A8D6] text-white text-sm font-medium rounded-lg shadow hover:bg-[#1c89b2] transition"
                    >
                        See More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard
