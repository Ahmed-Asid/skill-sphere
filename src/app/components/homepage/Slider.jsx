"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

import CourseUi from "./CourseUi";

export default function Slider({ courses }) {

    const extendedCourses =
        courses.length < 6
            ? [...courses, ...courses, ...courses]
            : courses;

    return (
        <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={800}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            {extendedCourses.map((course, index) => (
                <SwiperSlide key={`${course.id}-${index}`}>
                    <CourseUi course={course} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}