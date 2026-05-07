
import { fetchCourseData } from '@/lib/data';
import Slider from './Slider';

const PopularCourses = async () => {

    const courses = await fetchCourseData();

    const popularCourses = courses.sort((a, b) => b.rating - a.rating).slice(0, 3);
    console.log(popularCourses)
    return (
        <div className='w-[80%] mx-auto space-y-8 my-8'>
            <h2 className='text-2xl font-semibold text-center text-[#2563eb]'>Our Most Popular Courses</h2>
            <Slider courses={popularCourses} />
        </div>
    );
};

export default PopularCourses;