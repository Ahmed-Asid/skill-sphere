

import Instructor from './Instructor';

const TopInstructors = () => {

    const instructors = [
        {
            id: 1,
            name: "John Doe",
            role: "Full Stack Developer",
            image: "/assets/jon.jpg",
            bio: "10+ years of experience building scalable web applications at top tech firms."
        },
        {
            id: 2,
            name: "will Smith",
            role: "JavaScript Architect",
            image: "/assets/will.jpg",
            bio: "Open-source contributor and expert in modern frontend design patterns."
        },
        {
            id: 3,
            name: "Michael Lee",
            role: "Senior UI/UX Designer",
            image: "/assets/lee.jpg",
            bio: "Specializes in creating intuitive digital experiences for global brands."
        }
    ];

    return (
        <section className="py-20">
            <div className="w-[90%] mx-auto px-4 flex flex-col justify-center items-center md:items-start">
                <div className="] mb-12 gap-4">
                    <div className="text-center md:text-start max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2563eb] mb-4">
                            Learn from the Best
                        </h2>
                        <p>
                            Our instructors are industry veterans, researchers, and creators
                            who are passionate about sharing their expertise.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 ">
                    {instructors.map((instructor) => <Instructor instructor={instructor} key={instructor.id}></Instructor>)}
                </div>
            </div>
        </section>
    );
};

export default TopInstructors;