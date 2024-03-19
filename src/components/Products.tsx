import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import instance from '~/apis'
import { Product } from '~/common/Product'
import NikeRed from '../images/NikeRed_One.png'
import NikeWhite from '../images/NikeWhite_One.png'
import banner13 from '../images/banner13.jpg'
const Products = () => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await instance.get('products')
        console.log(data)
        setProducts(data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <div>
      {/* Slide banner */}
      <div className='header-bot-1'>
        <span>Mua sắm, trải nghiệm và đồng hàng cùng chúng tôi.</span>
        <p>Cho dù hôm nay bạn muốn làm gì thì điều đó vẫn tốt hơn khi là Thành viên.</p>
        <p className='a'>Chúng tôi luôn đồng hành cùng bạn</p>
      </div>
      <div>
        <img src={banner13} alt='' />
      </div>
      <div className='listsp-des'>
        <h1 className='' style={{ textAlign: 'center' }}>
          SẢN PHẨM MỚI VÀ NỔI BẬT
        </h1>
        <p>Sự kết hợp hoàn hảo giữa thời trang và phong cách</p>
        <button className='cta-btn mb-20'>SHOP NOW</button>
      </div>
      <div className='container border border-gray-300'>
        <h3 className='main-title mt-10'>SẢN PHẨM</h3>
        <div className='flex flex-wrap justify-center mb-10 '>
          {products?.map((product, index) => (
            <div
              key={index}
              className='max-w-xs bg-white shadow-md rounded-lg overflow-hidden m-4 border border-gray-300'
            >
              <img src={product.image} alt={product.name} className='' />
              <div className='p-4'>
                <h2 className='font-bold text-xl mb-2'>
                  <Link to={`/products/${product.id}`} className='text-black-500'>
                    {product.name}
                  </Link>
                </h2>
                <div className='text-gray-500 font-semibold text-sl mb-2'>{product.price} vnđ</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-[100px]'>
        <h2 className='main-title'>SẢN PHẨM MANG TÍNH BIỂU TƯỢNG</h2>
        <div className='product_tb'>
          <div className='product_tb1'>
            <div className='product_tb0 ml-[135px]'>
              <div>
                <img src={NikeWhite} />
              </div>
            </div>
            <div className='product_tt1'>
              Vào những năm 70, Nike là mẫu giày mới trên thị trường, quá mới mẻ, chúng tôi vẫn đang thâm nhập vào lĩnh
              vực bóng rổ và thử nghiệm các nguyên mẫu trên đôi chân của đội địa phương của chúng tôi. Tất nhiên, thiết
              kế được cải thiện qua nhiều năm nhưng cái tên vẫn không thay đổi. Nike Blazer Mid 77 Vintage cổ điển ngay
              từ đầu.
            </div>
          </div>
          <div className='product_tb1 product_tb1-reverse'>
            <div className='product_tt2'>
              Air Jordan 1 hi flyease kết hợp phong cách đáng thèm muốn của đôi giày thể thao đặc trưng đầu tiên của
              Michael Jordan với hệ thống nhập bằng một tay nhanh chóng và dễ dàng. Không có dây để buộc, chỉ có một
              khóa kéo bao quanh và hai dây đai để đảm bảo vừa vặn tùy chỉnh.
            </div>
            <div className='product_tb0 '>
              <div className='red'>
                <img src={NikeRed} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
