import HeroAnimation from "./HeroAnimation";

const Banner = () => {
    return (
        <div >

            <div className="py-10 lg:py-0 lg:h-[80vh] flex items-center px-6 lg:px-16">

                <div className="grid lg:grid-cols-2 gap-10 items-center justify-center w-full max-w-7xl mx-auto">

                    <div className="text-center lg:text-start">
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#2563eb]">
                            Build Fast. Learn Faster.
                        </h1>

                        <p className="mt-6 text-lg max-w-xl">
                            Skip outdated learning. Gain real-world digital skills, build projects,
                            and move from idea to execution—without wasting time.
                        </p>

                        <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                            <button className="btn bg-[#10b981] border-none shadow-none text-white font-medium rounded-full px-8">
                                Get Started
                            </button>
                            <button className="btn bg-[#2563eb] border-none shadow-none text-white font-medium rounded-full px-8">
                                Browse Courses
                            </button>
                        </div>
                    </div>

                    <HeroAnimation />


                </div>
            </div>
        </div>
    );
};

export default Banner;