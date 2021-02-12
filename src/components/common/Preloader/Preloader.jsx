import React from 'react'
import loading from './../../../assets/images/loading.gif'
import s from './Preloader.module.css'

function Preloader(props) {
   return (
      <div className={s.loading}>
         <img src={loading} alt="loading" />
      </div>
   )
}

export default Preloader