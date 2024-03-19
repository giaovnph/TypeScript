import logo from '../images/logo.png'
import search from '../images/search-icon.png'
import heart from '../images/heart-icon.png'
import cart from '../images/cart-icon.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <header className='nikestore-header'>
        <div className='header-top'>
          <Link to={`signin`} className=' sign-btn '>
            Đăng nhập
            <i className='fa-regular fa-user ml-1 ' />
          </Link>
        </div>
        <div className='header-bot'>
          <div className='logo-nike'>
            <Link to={`/`}>
              <img src={logo} />
            </Link>
          </div>
          <ul className='header-menu'>
            <li>
              <a>Mới và nổi bật</a>
            </li>
            <li>
              <a>Trẻ em</a>
            </li>
            <li>
              <a>Nữ</a>
            </li>
            <li>
              <a>Nam</a>
            </li>{' '}
          </ul>
          <div className='header-icon'>
            <div className='search-box'>
              <form className='search-form' action='index.php?act=sanpham' method='post'>
                <button className='search-btn' type='submit'>
                  <img className='search-icon' src={search} />
                </button>
                <input className='search-box__text' type='text' name='kyw' placeholder='Tìm kiếm' required />
              </form>
            </div>
            <div className='love-icon'>
              <div>
                <img src={heart} />
              </div>
            </div>
            <div className='cart-icon'>
              <div>
                <img src={cart} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
