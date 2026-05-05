import CourseUi from '@/app/components/homepage/CourseUi';
import { FetchCourseData } from '@/lib/data';
import { Suspense } from 'react';


const AllCoursesPage = () => {

    const courses = FetchCourseData();
    return (
        <div className='w-[80%] mx-auto space-y-8 my-8'>
            <h2 className='text-2xl font-semibold text-center text-[#2563eb]'>Our Courses</h2>
            <Suspense fallback={<div className='flex justify-center items-center w-full h-[60vh]'><span className="loading loading-dots loading-xl"></span></div>}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {
                        courses.map(c => <CourseUi course={c} key={c.id}></CourseUi>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default AllCoursesPage;