'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"

// Mock data for demonstration
const initialBlogs = [
  { id: 1, title: 'Introduction to AI', date: '2023-06-01' },
  { id: 2, title: 'Machine Learning Basics', date: '2023-06-05' },
  { id: 3, title: 'The Future of Robotics', date: '2023-06-10' },
]

export default function BlogList() {
  const [blogs, setBlogs] = useState(initialBlogs)

  const handleEdit = (id) => {
    // TODO: Implement edit functionality
    console.log('Editing blog with id:', id)
  }

  const handleDelete = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id))
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Blog List</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blogs.map((blog) => (
              <tr key={blog.id}>
                <td className="px-6 py-4 whitespace-nowrap">{blog.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{blog.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Button variant="outline" size="sm" className="mr-2" onClick={() => handleEdit(blog.id)}>Edit</Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(blog.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

