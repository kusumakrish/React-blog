import React from 'react'
import BlogItemBollywood from './BlogItemBollywood';
import "./styles.css";

export const BlogListBollywood = ({blogs}) => {
  return (
    <div className="bloglist-wrap"> 
         {blogs.map((blog=> <BlogItemBollywood blog={blog} key={blog.id} />))}
    </div>
  )
}

export default BlogListBollywood;
