'use client'

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

export default function Page() {
    const [inputValue, setInputValue] = useState('');
    const history = useRouter();

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        if (inputValue.toLowerCase() === 'chortoq') {
            history.push('/admin');
        } else {
            history.push('/');
        }
    };

    return (
        <div className='flex mt-40 justify-center'>
            <div className='w-full text-center'>
                <input className='bg-[#1111] text-white w-full border py-2 px-8' placeholder='Admin parolingizni yozing...' type="text" value={inputValue} onChange={handleChange} />
                <button className='green mt-3' onClick={handleSubmit}>Kirish</button>
            </div>
        </div>
    );
}
