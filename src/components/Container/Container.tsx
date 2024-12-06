/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 04/03/2024 16:53:35
*/
import React, { FC, useEffect } from 'react';
import './Container.css';



interface ContainerProps {

}


const Container: FC<ContainerProps> = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="Container">
      Header Component
    </div>
  );
}

export default Container;