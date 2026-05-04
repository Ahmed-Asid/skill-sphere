import CourseUi from '@/app/components/homepage/CourseUi';
import courses from '@/data/data.json'

const AllCoursesPage = () => {

    return (
        <div className='w-[80%] mx-auto space-y-8 my-8'>
            <h2 className='text-2xl font-semibold text-center text-[#2563eb]'>Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    courses.map(c => <CourseUi course={c} key={c.id}></CourseUi>)
                }
            </div>
        </div>
    );
};

export default AllCoursesPage;