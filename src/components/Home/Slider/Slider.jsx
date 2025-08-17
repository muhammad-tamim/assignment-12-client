import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Container from '../../container/Container'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import LoadingSpinner from '../../Spinner/LoadingSpinner'
import { Link } from 'react-router'

const Slider = () => {
    const axiosSecure = useAxiosSecure()

    const { data: slides = [], isLoading } = useQuery({
        queryKey: ['advertised-medicines'],
        queryFn: async () => {
            const res = await axiosSecure.get('/medicines/advertised')
            return res.data
        },
    })

    return (
        <Container>
            <div className="bg-gradient-to-r from-[#6BDCF6] to-[#25A8D6] rounded-xl shadow-lg py-10 px-6">
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000 }}
                        loop
                        className="rounded-lg"
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide._id}>
                                <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-lg p-6 shadow-md">
                                    {/* Left side: Text */}
                                    <div className="flex-1 text-center md:text-left space-y-6">
                                        <h3 className="text-2xl lg:text-5xl font-bold text-[#25A8D6] leading-snug">
                                            {slide.name}
                                        </h3>
                                        <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                                            {slide.description || 'No description provided.'}
                                        </p>

                                        {/* CTA Buttons */}
                                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                            <Link
                                                to="/shop"
                                                className="px-6 py-3 bg-[#25A8D6] text-white font-medium rounded-lg shadow hover:bg-[#1c89b2] transition"
                                            >
                                                Go to Shop
                                            </Link>
                                            <Link
                                                to="/discounted-products"
                                                className="px-6 py-3 bg-[#25A8D6] text-white font-medium rounded-lg shadow hover:bg-[#1c89b2] transition"
                                            >
                                                Discounted Products
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Right side: Image */}
                                    <div className="w-full md:w-1/3">
                                        <img
                                            src={slide.image}
                                            alt={slide.name}
                                            className="w-full h-auto object-center rounded-lg"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </Container>
    )
}

export default Slider
