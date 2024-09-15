import React from 'react';
import {Link} from 'react-router-dom';

const Profile = () => {

  return(
    <>
    <div className='profile-main-container'>
      <div className="user-main-options">
        <label>Buscar alumno por Nombre: </label>
        <input type="text" placeholder="Nombre" />
        <label>Buscar alumno por DNI: </label>
        <input type="text" placeholder="DNI" />
        
      </div>
      <div className="students-match">
        
      </div>
    </div>
  </>
  )


}

export default Profile;