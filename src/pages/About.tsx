import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export interface IAboutPageProps {};

const AboutPage: React.FC<IAboutPageProps> = (props) => {

    const [ message, setMessage ] = useState('');
    const { number} = useParams();

    useEffect(() => {
        if(number)
        {
            setMessage('The number is ' + number);
        }else {
            setMessage("There was no number provided")
        }
    }, [])
    
  return (
    <div>
        <p>AboutPage</p>
        <p>{message}</p>
    </div>
  )
}

export default AboutPage