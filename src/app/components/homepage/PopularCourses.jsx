import courses from '@/data/data.json'
import CourseUi from './CourseUi';

const PopularCourses = () => {

    const popularCourses = courses.sort((a, b) => b.rating - a.rating).slice(0, 3);
    console.log(popularCourses)
    return (
        <div className='w-[80%] mx-auto space-y-8 my-8'>
            <h2 className='text-2xl font-semibold text-center text-[#2563eb]'>Our Most Popular Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    popularCourses.map(c => <CourseUi course={c} key={c.id}></CourseUi>)
                }
            </div>
        </div>
    );
};

export default PopularCourses;