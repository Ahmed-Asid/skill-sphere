
import { fetchCourseData } from '@/lib/data';
import CourseUi from './CourseUi';

const NewReleases = async () => {

    const courses = await fetchCourseData();

    const newReleases = courses.filter(c => c.new === true);
    console.log('new', newReleases)

    return (
        <div className='w-[80%] mx-auto space-y-8 my-8'>
            <h2 className='text-2xl font-semibold text-center text-[#10b981]'>New Releases</h2>
            <div className='flex gap-5 flex-col md:flex-row justify-center items-center'>
                {
                    newReleases.map(c => <CourseUi course={c} key={c.id} />)
                }
            </div>
        </div>
    );
};

export default NewReleases;