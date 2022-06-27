import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.css";

const HomeItem = ({blog:{id,category,title,description,cover,published}}) => {
  return (
    <div class ="blogItem-wrap">
       <Link to={`/category/Home/${id}/${category}`} className='blogItem-link' ><img src={cover} alt="cover" className='blogItem-cover'></img>
        <h3>{title}</h3>
        <p className='blogItem-desc'>{description}</p>
        <p className='blogItem-publish'>{published}</p></Link>
    </div>
  )
}

export default HomeItem;