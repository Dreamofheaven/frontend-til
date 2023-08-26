import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <Link to={'/'}><button>Home</button></Link>
      <Link to={'/diary'}><button>Diary</button></Link>
      <Link to={'/record'}><button>Record</button></Link>
    </div>
  )
}

export default Footer
