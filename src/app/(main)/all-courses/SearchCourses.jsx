'use client'

import { PanelRight, Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const SearchCourses = () => {
    const [searchInput, setSearchInput] = useState('');
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleSearch = () => {
        const params = new URLSearchParams(searchParams);

        if (searchInput) {
            params.set("search", searchInput);
        }
        else {
            params.delete("search")
        }
        router.push(`${pathname}?${params.toString()}`)
    }
    return (
        <div className='flex gap-2'>
            <label className="input">
                <input type="search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} required placeholder="Search" />
            </label>
            <button onClick={handleSearch} className='btn btn-outline btn-neutral'><Search opacity={50} /></button>
        </div>
    );
};

export default SearchCourses;