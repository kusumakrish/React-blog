import React, { useState } from 'react'
import BlogListFitness from '../../component/Home/BlogListFitness';
import { DataFitness } from '../../confic/datafitness';
import "../styles.css";

function Fitness () {
  const [blogs] = useState(DataFitness);
  return (
    <div>
         {!blogs.length ?  null : <BlogListFitness blogs={blogs}/> }
     </div>
  )
}

export default Fitness;