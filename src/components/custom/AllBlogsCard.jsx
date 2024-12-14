import { useState } from 'react';
import { BlogCard } from './BlogCard';
import { Button } from '@/components/ui/button';

function AllBlogsCard() {
    const blogPosts = [
        {
          id:1,
          title: "The Future of AI in Business",
          date: "May 15, 2023",
          publisher: "John Doe",
          imageUrl: "/placeholder.svg?height=200&width=384",
          publisherImageUrl: "/placeholder.svg?height=32&width=32",
          category:'ML Project',
        },
        {
          id:2,
          title: "Machine Learning Trends in 2023",
          date: "May 10, 2023",
          publisher: "Jane Smith",
          imageUrl: "/placeholder.svg?height=200&width=384",
          publisherImageUrl: "/placeholder.svg?height=32&width=32",
          category:'DL Project',
        },
        {
          id:3,
          title: "How AI is Transforming Healthcare",
          date: "May 5, 2023",
          publisher: "Alex Johnson",
          imageUrl: "/placeholder.svg?height=200&width=384",
          publisherImageUrl: "/placeholder.svg?height=32&width=32",
          category:'API Development',
        }
      ];

      const [blogCategory, setBlogCategory] = useState('All');
  return (
    <>
      <div className="w-full max-w-6xl mx-auto mb-10">
          <div className='flex flex-col justify-center text-center'>
          <h2 className="text-3xl font-bold text-gray-100 mb-2">Latest Blog Posts</h2>
            <div className='flex justify-center items-center my-10 gap-2'>
            
            <Button onClick={()=>setBlogCategory('All')} className={`bg-white hover:bg-blue-600 hover:text-white rounded-3xl ${blogCategory === 'All' ? 'bg-blue-600 text-white' : ''}`}>All</Button>

            <Button onClick={()=>setBlogCategory('ML Project')} className={`bg-white hover:bg-blue-600 hover:text-white rounded-3xl ${blogCategory === 'ML Project' ? 'bg-blue-600 text-white' : ''}`}>ML Project</Button>

            <Button onClick={()=>setBlogCategory('DL Project')} className={`bg-white hover:bg-blue-600 hover:text-white rounded-3xl ${blogCategory === 'DL Project' ? 'bg-blue-600 text-white' : ''}`}>DL Project</Button>

            <Button onClick={()=>setBlogCategory('API Development')} className={`bg-white hover:bg-blue-600 hover:text-white rounded-3xl ${blogCategory === 'API Development' ? 'bg-blue-600 text-white' : ''}`}>API Development</Button>

            <Button onClick={()=>setBlogCategory('MERN Stack')} className={`bg-white hover:bg-blue-600 hover:text-white rounded-3xl ${blogCategory === 'MERN Stack' ? 'bg-blue-600 text-white' : ''}`}>MERN Stack</Button>

            
        </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter((post)=> blogCategory === 'All'?true : post.category===blogCategory ).map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
    </>
  )
}

export default AllBlogsCard
