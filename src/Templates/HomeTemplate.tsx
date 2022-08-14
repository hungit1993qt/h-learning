//tsrfce
import { Outlet } from 'react-router-dom'
import HeaderHome from '../Components/HeaderHome/HeaderHome'
import  '_Playground/SCSS/index.scss'
import FooterHome from 'Components/FooterHome/FooterHome'


type Props = {}

function HomeTemplate({}: Props) {
  return (
    <div>
        <HeaderHome />
        <Outlet />
        <FooterHome />
    </div>
  )
}

export default HomeTemplate