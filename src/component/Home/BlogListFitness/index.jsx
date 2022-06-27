import React from 'react'
import BlogItemFitness from '../BlogList/BlogItemFitness';
// import BlogItemFitness from '../BlogList/BlogItemFitness/index';
import "./styles.css";

export const BlogListFitness = ({blogs}) => {
  return (
    <div className="bloglist-wrap"> 
         {blogs.map((blog=> <BlogItemFitness blog={blog} key={blog.id} />))}
    </div>
  )
}

export default BlogListFitness;