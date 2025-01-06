import Link from 'next/link';
import React from 'react';

const AboutContents = () => {
    return (
        <div>
            <h1>this is about contents</h1>
            <div className='flex flex-col space-y-4'>
                <Link href='/about/history'>History</Link>
                <Link href='/about/mission'>Mission</Link>
            </div>
        </div>
    );
};

export default AboutContents;