import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export interface IHomePageProps {};


const HomePage: React.FC<IHomePageProps> = (props) => {

  const navigate = useNavigate();

  
  return (
    <div>
      <p>This is the home page</p>
      <Link to="/about">Go to the About Page</Link>
      <button onClick={()=> navigate('/layout/20')}>Go to layout, with a number</button>
    </div>

  )
}

export default HomePage