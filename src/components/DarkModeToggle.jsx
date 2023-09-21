import React from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const DarkModeToggle = ({ toggleTheme, theme }) => {
    return (
        <div className='mb-5 mt-2 cursor-pointer' onClick={toggleTheme}>
            {theme === 'light' ? (
                <MdOutlineDarkMode size={30} />
            ) : (
                <MdOutlineLightMode size={30} className='text-white' />
            )}
        </div>
    )
}

export default DarkModeToggle