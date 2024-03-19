import twiter from '../images/twiter.png'
import facebook from '../images/facebook.png'
import youtube from '../images/youtube.png'
import instagram from '../images/instagram.png'
import local from '../images/local.png'
const Footer = () => {
  return (
    <div>
      {' '}
      <footer className='nikestore-footer'>
        <div className='top-footer'>
          <div className='top-footer__item'>
            <div className='top-footer-col'>
              <div>
                <h4>Hệ thống cửa hàng</h4>
              </div>
              <div>
                <h4>Bộ sưu tập</h4>
              </div>
              <div>
                <h4>Tin tức thị trường</h4>
              </div>
            </div>
            <div className='top-footer-col'>
              <div>
                <h4>Hỗ trợ khách hàng</h4>
              </div>
              <div>
                <p>Vận chuyển</p>
              </div>
              <div>
                <p>Trả lại hàng</p>
              </div>
              <div>
                <p>Quy trình thanh toán</p>
              </div>
              <div>
                <p>Liên hệ chúng tôi</p>
              </div>
            </div>
            <div className='top-footer-col'>
              <div>
                <h4>Giới thiệu về NikeStore</h4>
              </div>
              <div>
                <p>Triết lý kinh doanh</p>
              </div>
              <div>
                <p>Tổ chức - sự kiện</p>
              </div>
              <div>
                <p>Nhà đầu tư</p>
              </div>
              <div>
                <p>Lịch sử phát triển</p>
              </div>
            </div>
          </div>
          <div className='top-footer__logo'>
            <div className='top-footer__icon'>
              <div>
                <img src={twiter} />
              </div>
            </div>
            <div className='top-footer__icon'>
              <div>
                <img src={facebook} />
              </div>
            </div>
            <div className='top-footer__icon'>
              <div>
                <img src={youtube} />
              </div>
            </div>
            <div className='top-footer__icon'>
              <div>
                <img src={instagram} />
              </div>
            </div>
          </div>
        </div>
        <div className='bot-footer'>
          <div className='bot-footer__local'>
            <div>
              <img src={local} />
            </div>
            <h4>VietNam</h4>
            <p>© 2023 Nike, Inc. Mọi quyền được bảo lưu</p>
          </div>
          <div className='bot-footer__item'>
            <div>
              <p>Điều khoản bán hàng</p>
            </div>
            <div>
              <p>Điều khoản sử dụng</p>
            </div>
            <div>
              <p>Quyền riêng tư</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
