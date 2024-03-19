/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom'
import Footer from '~/components/Footer'
import Header from '~/components/Header'

const LayoutWebsite = () => {
  return (
    <div>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default LayoutWebsite
