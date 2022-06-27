import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import { DataHome } from '../../confic/dataHome';
import "./style.css";

 const HomeBlog = () => {
  const {id}=useParams();
  const[Blog , setBlog] = useState(null);

  useEffect(()=>{
    let blog = DataHome.find(blog=>blog.id === parseInt(id));
    if(blog){
      setBlog(blog);
    }
  },[id]);
  return (
    <div>
      {Blog ? <div className="blog-wrap">
      {/* <header className='blog-heading'>
         <h1>{Blog.title}</h1>
      </header> */}
      <img src={Blog.cover} alt="cover" className='blog-img'/>
      {/* <p className='blog-description'>{Blog.description}</p> */}
      </div>: null}
    </div>
  )
}
export default HomeBlog;