import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import Container from "../../container/Container";
import Heading from "../../Elements/Heading";

const Review = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    return (
        <section >

            <div
                ref={ref}
                className=" py-8 px-5 max-w-6xl mx-auto"
            >
                <Heading title={"Our Achievements"}></Heading>

                <section className="p-6">
                    <div className="grid justify-center grid-cols-2 gap-8 text-center lg:grid-cols-3">
                        <div className="flex flex-col justify-center m-2">
                            <p className="text-4xl font-bold lg:text-6xl ">
                                {inView ? <CountUp end={1000000} duration={2} separator="," /> : "0"}+
                            </p>
                            <p className="text-sm sm:text-base">Satisfied Patients</p>
                        </div>

                        <div className="flex flex-col justify-center m-2">
                            <p className="text-4xl font-bold lg:text-6xl ">
                                {inView ? <CountUp end={2000} duration={2} separator="," /> : "0"}+
                            </p>
                            <p className="text-sm sm:text-base">Medicines Available</p>
                        </div>

                        <div className="flex flex-col justify-center m-2">
                            <p className="text-4xl font-bold lg:text-6xl ">
                                {inView ? <CountUp end={8500000} duration={2} separator="," /> : "0"}+
                            </p>
                            <p className="text-sm sm:text-base">Orders Delivered</p>
                        </div>

                        <div className="flex flex-col justify-center m-2">
                            <p className="text-4xl font-bold lg:text-6xl ">4.8/5</p>
                            <p className="text-sm sm:text-base">Customer Rating</p>
                        </div>

                        <div className="flex flex-col justify-center m-2">
                            <p className="text-4xl font-bold lg:text-6xl ">
                                {inView ? <CountUp end={10} duration={2} /> : "0"}
                            </p>
                            <p className="text-sm sm:text-base">Years of Service</p>
                        </div>

                        <div className="flex flex-col justify-center m-2">
                            <p className="text-4xl font-bold lg:text-6xl ">24/7</p>
                            <p className="text-sm sm:text-base">Online Support</p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Review;
