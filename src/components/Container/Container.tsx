/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 04/03/2024 16:53:35
*/
import React, { FC, useState, useEffect } from 'react';
import VideoFormModal from '../VideoFormModal/VideoFormModal';
import './Container.css';
// import { title } from 'process';



interface ContainerProps {

}

  
const Container: FC<ContainerProps> = () => {


  const [displayModal, setDisplayModal] = useState<boolean>(true) // ne pas afficher par defaut le modal - Lorsque va valoir true
//changer l'affichage du modal  true reste ouvert - false ferme
  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

      // Logique asynchrone ici
    };
    runLocalData();
  }, []); // Ajout du tableau de dépendances vide

  const hideModal = () => {
    setDisplayModal(true); //changer l'affichage du modal  true reste ouvert - false ferme
  };

  return (
    <div className="container py-2">
      <button className="btn btn-primary" onClick={()=>setDisplayModal(true)}>
        Add Video
      </button>
      {displayModal && <VideoFormModal hideModal={hideModal}/>}
      <div className="video-list py-1">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Poster</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Formation React JS</td>
              <td>
                <img width={80} src="assets/images/Agnes.jpg" alt="Formation React" />
              </td>
              <td>
                <button className="btn btn-success m-1">View</button>
                <button className="btn btn-primary m-1">Edit</button>
                <button className="btn btn-danger m-1">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th> <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
              <td>Nana</td>
              <td>@twitter</td>
              <td>Larry the Bird</td>
              {/* <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
  
}

export default Container;