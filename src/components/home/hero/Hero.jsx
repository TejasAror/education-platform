import React from "react"
import { useHistory } from "react-router-dom";
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  const history = useHistory();
  function Move(){
    history.push("/contact");
  }

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='button'>
              <button className='primary-btn' onClick={Move}>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <a href="/courses" target="_blank">
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
