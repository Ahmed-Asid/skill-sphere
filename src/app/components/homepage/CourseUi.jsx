'use client'

import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CourseUi = ({ course }) => {

    return (
        <div
            className="p-2 rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-md relative animate__animated animate__zoomIn bg-slate-100"
        >
            {
                course.new && <div className="absolute top-3 right-3 badge badge-success text-white z-10">NEW</div>
            }
            <Image
                src={course.image} loading="eager" alt={course.title} width={300} height={200} className="w-full h-60 object-fit rounded-xl opacity-90 hover:opacity-100"
            />

            <div className="p-4 flex flex-col gap-2">
                <h2 className="text-lg font-semibold text-[#2563eb]">
                    {course.title}
                </h2>

                <p className="text-sm">
                    Instructor: {course.instructor}
                </p>

                <p className="text-sm font-medium text-yellow-500 flex gap-2 items-center">
                    <Star size={16} /> {course.rating}
                </p>
                <Link href={`/course-details/${course.id}`}>
                    <button
                        className="w-full mt-3 bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition duration-300 hover:bg-[#2563eb] hover:shadow-md active:scale-95"
                    >
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CourseUi;