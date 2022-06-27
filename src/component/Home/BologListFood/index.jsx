import React from 'react'
import BlogItemFood from './BlogItemFood';
import "./styles.css";

export const BlogListFood = ({blogs}) => {
  return (
    <div className="bloglist-wrap"> 
         {blogs.map((blog=> <BlogItemFood blog={blog} key={blog.id} />))}
    </div>
  )
}

export default BlogListFood;