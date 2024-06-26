import React from "react"
import { team } from "../../dummydata"
import { useHistory } from "react-router-dom"

const TeamCard = () => {
  const history = useHistory();
  function Move(){
    window.location.href = 'https://www.facebook.com';

  }
  return (
    <>
      {team.map((val) => (
        <div className='items shadow' onClick={Move}>
          <div className='img'>
            <img src={val.cover} alt='' />
            <div className='overlay'>
              <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-instagram icon'></i>
              <i className='fab fa-tiktok icon'></i>
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard
