import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Instructor = ({ instructor }) => {
    return (
        <div className='group rounded-2xl p-3'>
            <div className="relative w-full max-w-md mb-6 overflow-hidden rounded-xl mx-auto">
                <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-70 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-4 left-4 flex gap-2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="p-2 bg-white rounded-lg cursor-pointer hover:bg-blue-700 hover:text-white transition-colors">
                        <FaTwitter size={18} />
                    </div>
                    <div className="p-2 bg-white rounded-lg cursor-pointer hover:bg-blue-700 hover:text-white transition-colors">
                        <FaLinkedin size={18} />
                    </div>
                    <div className="p-2 bg-white rounded-lg cursor-pointer hover:bg-blue-700 hover:text-white transition-colors">
                        <FaGithub size={18} />
                    </div>
                </div>
            </div>

            <div className="text-center md:text-left px-2">
                <p className="text-[#10b981] font-medium text-sm mb-1 uppercase tracking-wider">
                    {instructor.role}
                </p>
                <h3 className="text-2xl font-bold text-[#2563eb] mb-3">
                    {instructor.name}
                </h3>
                <p className="text-sm leading-relaxed mb-4">
                    {instructor.bio}
                </p>
            </div>
        </div>
    );
};

export default Instructor;