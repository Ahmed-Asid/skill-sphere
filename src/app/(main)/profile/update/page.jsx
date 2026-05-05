"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Camera, ArrowLeft, RefreshCw } from 'lucide-react';
import { toast } from 'react-toastify';
import { authClient } from '@/lib/auth-client';

const UpdateProfile = () => {
    const router = useRouter();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await authClient.updateUser({
                image: image,
                name: name,
            })
            console.log("Updating:", { name, image });
            toast.success("Profile updated successfully!");
            router.push('/profile');
            router.refresh();
        } catch (error) {
            toast.error("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4">
            <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-300">
                <div className="card-body">

                    <button
                        onClick={() => router.back()}
                        className="btn btn-ghost btn-sm w-fit mb-4 gap-2"
                    >
                        <ArrowLeft size={16} /> Back
                    </button>

                    <h2 className="card-title font-anta text-2xl mb-2 text-primary">Update Information</h2>
                    <p className="text-sm opacity-60 mb-6">Change your public display name and profile picture.</p>

                    <form onSubmit={handleUpdate} className="space-y-5">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold flex items-center gap-2">
                                    <User size={16} /> Full Name
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered focus:input-primary font-anta"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold flex items-center gap-2">
                                    <Camera size={16} /> Image URL
                                </span>
                            </label>
                            <input
                                type="url"
                                placeholder="https://example.com/photo.jpg"
                                className="input input-bordered focus:input-primary font-anta"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className={`btn btn-primary font-anta text-lg ${loading ? 'loading' : ''}`}
                                disabled={loading}
                            >
                                {loading ? 'Updating...' : 'Update Information'}
                                {!loading && <RefreshCw size={18} className="ml-2" />}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;