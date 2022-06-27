import React, { useState } from 'react'
import BlogList from '../../component/Home/BlogList';
import { blogList } from '../../confic/data';

function Tourism () {
  const [blogs] = useState(blogList);
  return (
    <div>
         {!blogs.length ?  null : <BlogList blogs={blogs}/> }
     </div>
  )
}

export default Tourism;