import React, { useState } from 'react'
import BlogListFood from '../../component/Home/BologListFood';
import { DataFood } from '../../confic/dataFood';
import "../styles.css";


function Food () {
  const [blogs] = useState(DataFood);
  return (
    <div>
         {!blogs.length ?  null : <BlogListFood blogs={blogs}/> }
     </div>
  )
}

export default Food;