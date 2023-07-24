import "./nacigation.scss"
import {Link, Outlet} from 'react-router-dom'
import { Fragment } from 'react';
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg"

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
        <Link className="Logo-container" to="/">
          <CrwnLogo className='logo'/>
        </Link>
          <div className='nav-link-container'>
            <Link className='nav-link' to='/shop'>
              Shop
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;