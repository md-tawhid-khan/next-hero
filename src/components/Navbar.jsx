"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName=usePathname()
    const router=useRouter()
    const links=[{
        title:"About",
        path:"/about"
    },
    {
        title:"Services",
        path:"/services"
    },
    {
        title:"Blogs",
        path:"/blogs"
    },
    {
        title:"Contacts",
        path:"/contacts"
    },
    {
        title:"Protfolio",
        path:"/protfolio"
    }
];

const handler=()=>{
 router.push('/login')
}
    return (
        <div>
             <nav className="bg-orange-400 px-6 py-6 flex justify-between items-center">
                <h1 className='text-3xl'> next <span className='text-blue-500'>hero</span></h1>
          <ul className='flex justify-between items-center space-x-4' >          
            {
                links.map((link)=><Link className={`${pathName===link.path && "text-blue-500"}`} key={link.path} href={link.path}>{link.title}</Link>)
            }
          </ul>
          <button onClick={handler} className='text-blue-500'>Log in </button>
        </nav>
       
        </div>
    );
};

export default Navbar;