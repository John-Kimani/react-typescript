import React from 'react'

export interface IHomePageProps {};

const HomePage: React.FC<IHomePageProps> = (props) => {
  return (
    <div>
        <p>HomePage (Protected with Firebase!)</p>
        <button>Sign out of Firebase</button>
    </div>
  );
};

export default HomePage