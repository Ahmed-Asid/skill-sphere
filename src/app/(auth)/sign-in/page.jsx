'use client'

import { Eye, EyeClosed, Lock, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { FaChrome, FaEye } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { useState } from "react";

const LoginPage = () => {
    const [showPass, setShowPass] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignIn = async (data) => {

        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        })

        if (error) {
            toast.error(error.message);
        }

        if (res) {
            toast.success('Sign in successful')
        }
    }
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
            <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-slate-100 p-8 lg:p-10 relative z-10">


                <div className="text-center mb-10">
                    <h2 className="font-anta text-3xl font-bold text-[#0f172a] tracking-tight">
                        SkillSphere
                    </h2>
                    <p className="text-slate-500 mt-2">Welcome back! Please enter your details.</p>
                </div>


                <button className="flex items-center justify-center gap-3 w-full py-3.5 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-semibold text-slate-700 group">
                    <FaChrome size={20} className="text-[#2563eb] group-hover:scale-110 transition-transform" />
                    Sign in with Google
                </button>

                <div className="relative my-8 text-center">
                    <hr className="border-slate-200" />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-xs uppercase tracking-widest text-slate-400">
                        Or use email
                    </span>
                </div>


                <form className="space-y-6" onSubmit={handleSubmit(handleSignIn)}>
                    <div>
                        <label className="block font-bold text-sm text-slate-700 mb-2 font-anta uppercase tracking-wider">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                placeholder="you@example.com"
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all"
                            />
                        </div>
                        {
                            errors.email && <p className="text-red-500" >{errors.email.message}</p>
                        }
                    </div>

                    <div>
                        <label className="block font-bold text-sm text-slate-700 mb-2 font-anta uppercase tracking-wider">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type={showPass ? "text" : "password"}
                                {...register("password", { required: "Password is required" })}
                                placeholder="••••••••"
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all"
                            />
                            <span onClick={() => setShowPass(!showPass)} className='absolute right-4 top-3.5'>
                                {
                                    showPass ? <Eye /> : <EyeClosed />
                                }
                            </span>
                        </div>
                        {
                            errors.password && <p className="text-red-500" >{errors.password.message}</p>
                        }
                    </div>

                    {/* <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                            <input type="checkbox" className="rounded border-slate-300 text-[#2563eb]" />
                            Remember me
                        </label>
                    </div> */}

                    <button className="w-full py-4 bg-[#2563eb] text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-0.5">
                        Sign In
                    </button>
                </form>

                <p className="text-center mt-8 text-slate-600">
                    Don&apos;t have an account?
                    <a href="/sign-up" className="text-[#10b981] font-bold hover:underline underline-offset-4 decoration-2"> Create Account</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;