import React from 'react'
import { getAuth, signOut} from 'firebase/auth';

export interface IHomePageProps {};

const HomePage: React.FC<IHomePageProps> = (props) => {

    const auth = getAuth();


  return (
    <div>
        <p>HomePage (Protected with Firebase!)</p>
        <button onClick={()=> signOut(auth)}>Sign out of Firebase</button>
    </div>
  );
};

export default HomePage