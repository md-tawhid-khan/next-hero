import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {
    return (
        <div>
            <h1>this is  blogs</h1>
            {
                blogs.map(blog=><div key={blog.slug} className='border-2 p-12'>
                    <h1>{blog.title}</h1>
                    <p>{blog.description}</p>
                    <button className='bg-green-400 p-2'>
                        <Link href={`/blogs/${blog.slug}`}>view details</Link></button>
                </div>)
            }
        </div>
    );
};

const blogs=[
    {
      "slug": "introduction-to-nextjs",
      "title": "Introduction to Next.js: A Beginner's Guide",
      "description": "Learn the basics of Next.js, its features, and how to get started with building modern web applications."
    },
    {
      "slug": "react-vs-nextjs",
      "title": "React vs Next.js: Which One Should You Choose?",
      "description": "A detailed comparison between React and Next.js to help you decide the best framework for your project."
    },
    {
      "slug": "zustand-state-management",
      "title": "Managing State with Zustand in React",
      "description": "A guide to using Zustand for global state management in React applications with simple and scalable state handling."
    },
    {
      "slug": "tailwindcss-best-practices",
      "title": "Tailwind CSS: Best Practices for Clean and Maintainable Styles",
      "description": "Improve your Tailwind CSS workflow by following best practices to write clean and maintainable styles."
    },
    {
      "slug": "sqlite-for-beginners",
      "title": "SQLite for Beginners: Getting Started with a Lightweight Database",
      "description": "An introduction to SQLite, its advantages, and how to set up and interact with an SQLite database."
    },
    {
      "slug": "building-api-routes-nextjs",
      "title": "Building API Routes in Next.js",
      "description": "Learn how to create and manage API routes in Next.js for backend functionality within your application."
    },
    {
      "slug": "crud-operations-nextjs",
      "title": "Performing CRUD Operations in Next.js with API Routes",
      "description": "A step-by-step guide to implementing CRUD operations in a Next.js app using API routes and a database."
    },
    {
      "slug": "unit-testing-nextjs",
      "title": "Unit Testing Next.js Applications with Jest",
      "description": "A comprehensive guide on setting up and writing unit tests for Next.js applications using Jest and React Testing Library."
    },
    {
      "slug": "deploying-nextjs-on-vercel",
      "title": "Deploying a Next.js Application on Vercel",
      "description": "Learn how to deploy your Next.js project to Vercel with best practices for hosting and performance optimization."
    },
    {
      "slug": "git-best-practices",
      "title": "Git Best Practices for Developers",
      "description": "Master Git with essential best practices, including branching strategies, commit messages, and collaboration workflows."
    }
  ]
  

export default BlogsPage;