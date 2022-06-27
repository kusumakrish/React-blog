import React from 'react'
import HomeItem from './HomeItem';
import "./styles.css";

export const HomeModule= ({blogs}) => {
  return (
    <div className="bloglist-wrap"> 
         {blogs.map((blog=> <HomeItem blog={blog} key={blog.id} />))}
    </div>
  )
}

export default HomeModule;