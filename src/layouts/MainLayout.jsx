import {Outlet} from 'react-router-dom'
import Navi from '../components/Navi'

const MainLayout = () => {

  return (
    <div>
      <Navi />
      <Outlet />
    </div>
  )
}

export default MainLayout;
