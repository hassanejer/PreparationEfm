import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    const a = 1
  return (
    <div >

        <Link to={`/covid/${a}`}>Covid</Link>
        <Link to='/poid'>Poids</Link>
      
    </div>
  )
}

export default Header
