//tsrfce
import { Outlet } from 'react-router-dom'
import HeaderHome from '../Components/HeaderHome/HeaderHome'
import  '_Playground/SCSS/index.scss'
import FooterHome from 'Components/FooterHome/FooterHome';




function HomeTemplate() {
  return (
    <div>
        <HeaderHome />
        <Outlet />
        <FooterHome />
    </div>
  )
}

export default HomeTemplate