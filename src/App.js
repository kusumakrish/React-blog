
import './App.css';
import Nav from './Nav';
import {BrowserRouter , Routes , Route} from "react-router-dom";
// import Home from './pages/Home/index';
import Blog from './pages/Blog/index';
import Tourism from './pages/Home/index';
import Fitness from './pages/Fitness';
import BlogFitness from './pages/Blog/blog';
import Technology from './pages/Technology';
import BlogTechnology from './pages/Blog/blogTechnology';
import Bollywood from './pages/Bollywood';
import BlogBollywood from './pages/Blog/blogBollywood';
import Food from './pages/Food';
import BlogFood from './pages/Blog/blogFood';
import Home from './pages/Tourism';

function App() {
  return (
    <div className='container'>
    <BrowserRouter>
    <Nav />
    <Routes>
    <Route path='/' element={<Home />}/>
      <Route path='/category/tourism' element={<Tourism/>}/>
      <Route path='/category/tourism/:id/:title' element={<Blog />}/>
      <Route path='/category/fitness' element={<Fitness/>}/>
      <Route path='/category/fitness/:id/:title' element={<BlogFitness />}/>
      <Route path='/category/techonology' element={<Technology/>}/>
      <Route path='/category/technology/:id/:title' element={<BlogTechnology />}/>
      <Route path='/category/bollywood' element={<Bollywood/>}/>
      <Route path='/category/bollywood/:id/:title' element={<BlogBollywood />}/>
      <Route path='/category/food' element={<Food/>}/>
      <Route path='/category/food/:id/:title' element={<BlogFood />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
