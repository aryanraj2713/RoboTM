import React from "react";



function Card(props) {
    const {name, email, id} = props;
    return (
      <div className='flex flex-row'>
        <div className='bg-gradient-to-r from-sky-500 to-indigo-500 mx-3 my-3 w-64 border-separate justify-center items-center text-center'>
          <img src={`https://robohash.org/${id}?200x200`} alt="photo" />
          <div>
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        </div>
      </div>
    );
  }
  

export default Card;