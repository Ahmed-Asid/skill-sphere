"use client";

import React from 'react';
import Link from 'next/link';
import { Edit } from 'lucide-react';
import { authClient } from '@/lib/auth-client';

const MyProfile = () => {

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user || {
        name: "Guest",
        email: "",
        image: "."
    };

    return (
        <div className="max-w-2xl mx-auto my-16 p-6 bg-base-100 shadow-xl rounded-2xl border border-base-300">
            <h1 className="text-3xl font-anta font-bold mb-8 text-center text-primary">My Profile</h1>

            <div className="flex flex-col items-center gap-6">

                <div className="avatar">
                    <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.image} alt={user.name} />
                    </div>
                </div>

                <div className="w-full space-y-4 mt-4">
                    <div className="flex flex-col items-center">
                        <p className="text-sm opacity-50 uppercase font-bold tracking-widest">Full Name</p>
                        <h2 className="text-2xl font-anta font-medium">{user.name}</h2>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="text-sm opacity-50 uppercase font-bold tracking-widest">Email Address</p>
                        <p className="text-lg">{user.email}</p>
                    </div>
                </div>

                <div className="w-full pt-6">
                    <Link href="/profile/update">
                        <button className="btn btn-primary btn-block gap-2 font-anta text-lg">
                            <Edit size={18} /> Update Information
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;