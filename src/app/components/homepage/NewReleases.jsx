
import { fetchCourseData } from '@/lib/data';
import CourseUi from './CourseUi';

const NewReleases = async () => {

    const courses = await fetchCourseData();

    const newReleases = courses.filter(c => c.new === true);

    return (
        <div className='w-[80%] mx-auto space-y-8 my-4 bg-slate-200 p-5 rounded-2xl'>
            <h2 className='text-2xl font-semibold text-center text-emerald-500'>New Releases</h2>
            <div className='flex gap-5 flex-col md:flex-row justify-center items-center'>
                {
                    newReleases.map(c => <CourseUi course={c} key={c.id} />)
                }
            </div>
        </div>
    );
};

export default NewReleases;