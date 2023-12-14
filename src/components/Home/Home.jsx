import { useEffect } from 'react';
import './Home.css';
import { useState } from 'react';
import Food from '../Food/Food';

const Home = () => {
 const [foods, setFoods] = useState([])
    
  useEffect(() =>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
    .then(res => res.json())
    .then(data => setFoods(data.meals))
  }, [])

    return (
        <div className='foods'>
           {
             foods.map((food, index) => (  
             
             <Food 
             key={index}
             food={food}
             ></Food>))
             
           }
        </div>
    );
};

export default Home;

// {
//     navbar.map((data, index) => (
//       <li key={index}><Link className={`${router.pathname === data.link && 'text-sky-400' } hover:text-sky-400 duration-500`} href={data.link}>{data.title}</Link></li>
//     ))
//   }