"use client";

import Link from "next/link";

export default function Error({
    error,
    reset,
}) {

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 via-white to-red-50 px-6">
            <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl border border-red-100 p-10 text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-red-100 flex items-center justify-center text-5xl mb-6 animate-pulse">
                </div>
                <h1 className="text-4xl font-bold text-slate-800 mb-4">
                    Something went wrong
                </h1>
                <p className="text-slate-500 leading-relaxed mb-8">
                    An unexpected error occurred while loading this page.
                    Please try again or return home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={() => reset()} className="px-6 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-200">
                        Try Again
                    </button>

                    <Link href="/" className="px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-all duration-300 hover:scale-105">
                        Go Home
                    </Link>
                </div>
                {
                    process.env.NODE_ENV === "development" && (
                        <p className="mt-8 text-xs text-red-400 break-all">
                            {error?.message}
                        </p>
                    )
                }
            </div>
        </div>
    );
}