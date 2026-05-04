
import { User, Mail, Lock } from 'lucide-react';
import Link from 'next/link';
import { FaChrome } from 'react-icons/fa6';
import { FaImage } from 'react-icons/fa';


const RegisterPage = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center p-6"
            style={{
                background: 'url(/assets/bg2.png)',
                backgroundColor: '#f8fafc',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >

            <div className="w-full max-w-lg bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-100 p-8 lg:p-12 relative z-10">

                <div className="text-center mb-8">
                    <h2 className="font-anta text-4xl font-bold text-[#0f172a] tracking-tight">
                        Join SkillSphere
                    </h2>
                    <p className="text-slate-500 mt-3">Start your journey into modern web development.</p>
                </div>

                <div className="mb-8">
                    <button className="flex items-center justify-center gap-3 w-full py-3.5 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-semibold text-slate-700 group">
                        <FaChrome size={20} className="text-[#2563eb] group-hover:scale-110 transition-transform" />
                        Sign up with Google
                    </button>

                    <div className="relative my-8 text-center">
                        <hr className="border-slate-100" />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">
                            Or register manually
                        </span>
                    </div>
                </div>

                <form className="space-y-5">

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2 font-anta uppercase tracking-wider">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2 font-anta uppercase tracking-wider">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="email"
                                placeholder="name@email.com"
                                className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2 font-anta uppercase tracking-wider">Photo URL</label>
                        <div className="relative">
                            <FaImage className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="url"
                                placeholder="https://example.com/photo.jpg"
                                className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2 font-anta uppercase tracking-wider">Create Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all"
                                required
                            />
                        </div>
                    </div>

                    <button className="w-full py-4 mt-4 bg-[#2563eb] text-white rounded-2xl font-bold shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all transform hover:-translate-y-1 active:scale-95">
                        Create Account
                    </button>
                </form>

                <p className="text-center mt-10 text-slate-600 font-medium">
                    Already have an account?{' '}
                    <Link href="/sign-in" className="text-[#10b981] font-bold hover:underline underline-offset-4 decoration-2">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;