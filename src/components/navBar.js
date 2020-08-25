import React from 'react'

const Navbar = ( props ) => {

return (

  <nav class="opacity-5 navbar mb-4 navbar-light shadow">
    <a class="navbar-brand" href="#"><img class="img-fluid rounded mx-auto d-block" src= {require('../assets/Logo.png')} width = '500' alt ="Dog Facts"/><h5 class ="text-wrap">Come back every day for some new facts about dogs!</h5></a>
  </nav>
  )
};

export default Navbar
//  <center><h1>NASA:  Picture of the Day</h1></center>
