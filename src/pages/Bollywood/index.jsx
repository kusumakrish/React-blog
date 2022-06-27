import React, { useState } from 'react'
import BlogListBollywood from '../../component/Home/BlogBollywood';
import { DataBollywood } from '../../confic/dataBollywood';
import "../styles.css";

function Bollywood () {
  const [blogs] = useState(DataBollywood);
  return (
    <div>
         {!blogs.length ?  null : <BlogListBollywood blogs={blogs}/> }
     </div>
  )
}

export default Bollywood;