import { Suspense } from "react";
import CourseDetailsUi from "./CourseDetailsUi";

const CourseDetails = async ({ params }) => {

    const { id } = await params;

    return (
        <div className='w-[80%] mx-auto space-y-8 my-8'>
            <Suspense fallback={<div className='flex justify-center items-center w-full h-[60vh]'><span className="loading loading-dots loading-xl"></span></div>}>
                <CourseDetailsUi id={id}></CourseDetailsUi>
            </Suspense>
        </div>
    );
};

export default CourseDetails;