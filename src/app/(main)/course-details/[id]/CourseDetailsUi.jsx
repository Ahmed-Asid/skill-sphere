
import React from 'react';
import { Clock, Star, BarChart, User, Tag, ArrowRight } from 'lucide-react';
import { fetchCourseData } from '@/lib/data';

const CourseDetailsUi = async ({ id }) => {


    const courses = await fetchCourseData();
    console.log('hello', courses)
    const course = courses.find(c => c.id === Number(id));
    console.log('hello', course, id)

    return (
        <div className="max-w-6xl mx-auto bg-base-100 shadow-2xl rounded-3xl overflow-hidden border border-base-300">
            <div className="flex flex-col lg:flex-row">

                <div className="lg:w-1/2 relative group">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                        <div className="badge badge-primary font-anta p-4">{course.category}</div>
                        <div className="badge badge-secondary font-anta p-4">{course.level}</div>
                    </div>
                </div>

                <div className="lg:w-1/2 p-8 flex flex-col justify-between space-y-6">
                    <div>
                        <h1 className="text-4xl font-anta font-bold text-base-content mb-2 leading-tight">
                            {course.title}
                        </h1>
                        <div className="flex items-center gap-2 text-warning mb-4">
                            <Star fill="currentColor" size={20} />
                            <span className="font-bold text-lg">{course.rating}</span>
                            <span className="text-base-content/50 text-sm">(Verified Student Rating)</span>
                        </div>
                        <p className="text-lg text-base-content/70 leading-relaxed italic">
                            {course.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 py-6 border-y border-base-300">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <User size={24} />
                            </div>
                            <div>
                                <p className="text-xs uppercase opacity-50 font-bold">Instructor</p>
                                <p className="font-semibold">{course.instructor}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                                <Clock size={24} />
                            </div>
                            <div>
                                <p className="text-xs uppercase opacity-50 font-bold">Duration</p>
                                <p className="font-semibold">{course.duration}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-accent/10 rounded-xl text-accent">
                                <Tag size={24} />
                            </div>
                            <div>
                                <p className="text-xs uppercase opacity-50 font-bold">Category</p>
                                <p className="font-semibold">{course.category}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-info/10 rounded-xl text-info">
                                <BarChart size={24} />
                            </div>
                            <div>
                                <p className="text-xs uppercase opacity-50 font-bold">Skill Level</p>
                                <p className="font-semibold">{course.level}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="btn bg-[#2563eb] btn-lg text-white flex-1 rounded-2xl font-anta text-lg shadow-lg shadow-primary/20">
                            Enroll Now <ArrowRight size={20} />
                        </button>
                        <button className="btn bg-[#10b981] text-white btn-lg rounded-2xl font-anta">
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsUi;