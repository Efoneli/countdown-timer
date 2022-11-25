import React from 'react'
import { Outlet } from 'react-router-dom'
//import Footer from '../Footer';
//import Header from '../Header';


const Layouts = () => {
  return (
    <div>
       {/* <Header />  */}

        <main style={{ minHeight: '60vh' }}>
            <Outlet />
        </main>

        {/* <Footer /> */}
    </div>
  )
}

export default Layouts
