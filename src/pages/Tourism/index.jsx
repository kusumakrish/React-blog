import React, { useState } from 'react'
import HomeModule from "../../component/Home/HomeList/Home";
import Bollywood from "../Bollywood";
import Food from "../Food";
import Tourism from "../Home";
import "../styles.css";
import Technology from "../Technology";
import { DataHome } from '../../confic/dataHome';


function Home () {
    const [blogs] = useState(DataHome);
    return(
        <div> 
    {!blogs.length ?  null : <HomeModule blogs={blogs}/> }
     <h1 className="topHead">Top posts</h1>
     <Tourism/>
     <h1 className="topHead">Related posts</h1>
     <Technology />
     <h1 className="topHead">Latest posts</h1>
     <Bollywood />
     <h1 className="topHead">related posts</h1>
     <Food />
     
     
    </div>
    )
}

export default Home;