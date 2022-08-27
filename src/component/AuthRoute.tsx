import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

export interface IAuthRouteProps {
    children:React.ReactNode;
};

const AuthRoute: React.FC<IAuthRouteProps> = (props) => {

    const { children } = props;

    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // subscribed to any changes on auth function
        AuthCheck();


        //return a function that point back to auth function to prevent memory leaks and clear subscription
        return () => AuthCheck();
    }, [])

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if (user){
            setLoading(false)
        } else {
            console.log('unauthorized');
            navigate('/login');
        }
    })

    if (loading) return <p>Loading ...</p>

  return <>{ children }</>
}

export default AuthRoute