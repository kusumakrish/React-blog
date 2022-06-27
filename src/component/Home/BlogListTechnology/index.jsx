import React from 'react'
import BlogItemTechnology from './blogitemTechnology';
// import BlogItemFitness from '../BlogList/BlogItemFitness/index';
import "./styles.css";

export const BlogListTechnology = ({blogs}) => {
  return (
    <div className="bloglist-wrap"> 
         {blogs.map((blog=> <BlogItemTechnology blog={blog} key={blog.id} />))}
    </div>
  )
}

export default BlogListTechnology;