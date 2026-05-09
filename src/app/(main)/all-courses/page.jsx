import CourseUi from '@/app/components/homepage/CourseUi';
import data from "@/../public/data/data.json";
import { Suspense } from 'react';
import SearchCourses from './SearchCourses';

export const metadata = {
    title: 'SkillSphere - All Courses',
    description: 'Discover all of our courses',
};


export const fetchCourseData = async (search = "") => {

    await new Promise(resolve =>
        setTimeout(resolve, 2000)
    );

    if (!search) {
        return data;
    }

    return data.filter(course =>
        course.title
            .toLowerCase()
            .includes(search.toLowerCase())
    );
};

const AllCoursesPage = async ({ searchParams }) => {

    const sp = await searchParams;
    const search = sp.search || "";

    const courses = await fetchCourseData(sp.search);

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className='w-[80%] mx-auto space-y-8 my-8'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-semibold text-center text-[#2563eb]'>Our Courses</h2>
                <SearchCourses />
            </div>
            <Suspense fallback={<div className='flex justify-center items-center w-full h-[60vh]'><span className="loading loading-dots loading-xl"></span></div>}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {
                        filteredCourses.map(c => <CourseUi course={c} key={c.id}></CourseUi>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default AllCoursesPage;