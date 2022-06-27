import React, { useState } from 'react'
import BlogListTechnology from '../../component/Home/BlogListTechnology';
import { DataTechnology } from '../../confic/Datatechnology';

function Technology () {
  const [blogs] = useState(DataTechnology);
  return (
    <div>
         {!blogs.length ?  null : <BlogListTechnology blogs={blogs}/> }
     </div>
  )
}

export default Technology;