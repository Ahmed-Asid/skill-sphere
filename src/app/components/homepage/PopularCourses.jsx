
import { FetchCourseData } from '@/lib/data';
import CourseUi from './CourseUi';
import { Suspense } from 'react';

const PopularCourses = () => {

    const courses = FetchCourseData();

    const popularCourses = courses.sort((a, b) => b.rating - a.rating).slice(0, 3);
    console.log(popularCourses)
    return (
        <div className='w-[80%] mx-auto space-y-8 my-8'>
            <h2 className='text-2xl font-semibold text-center text-[#2563eb]'>Our Most Popular Courses</h2>
            <Suspense fallback={<div className='flex justify-center items-center w-full h-[60vh]'><span className="loading loading-dots loading-xl"></span></div>}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {
                        popularCourses.map(c => <CourseUi course={c} key={c.id}></CourseUi>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default PopularCourses;