import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '~/apis'
import heart from '../images/heart-icon.png'
import { Product } from '~/common/Product'

const ProductDetailPage = () => {
  const [product, setProduct] = useState<Product>()
  const { id } = useParams()
  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await instance.get(`products/${id}`)
        setProduct(data)
      } catch (error) {
        console.error('Error fetching product:', error)
      }
    })()
  }, [id])

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className=' container mt-20'>
      <div className='ml-20 col-md-12 col-lg-9 d-flex align-items-stretch'>
        <img width={'540px'} src={product.image} className='w-200px mr-3' alt={product.name} />
        <div className='ml-20 max-w-xl'>
          <h3 className='font-bold'>{product.name}</h3>
          <h5 className='font-bold mt-3'>{product.price} đ</h5>
          <hr />
          <div className='mt-5 mb-0'>{product.description}</div>
          <a href='#'>
            <div className='btn-love flex items-center justify-center'>
              <span>Yêu thích</span>
              <img className='ml-1' src={heart} />
            </div>
          </a>
          <div className='box-chitiet__size'>
            <form action='' method=''>
              <input type='submit' className='btn-cart' name='addtocart' value='Thêm vào giỏ hàng' />
              <br />
              <label className='ml-2 mt-2'>Kích cỡ :</label>
              <select name='kichco' id='' className='select-size'>
                <option value='36'>36</option>
                <option value='37'>37</option>
                <option value='38'>38</option>
                <option value='39'>39</option>
                <option value='40'>40</option>
                <option value='41'>41</option>
                <option value='42'>42</option>
                <option value='43'>43</option>
                <option value='44'>44</option>
                <option value='45'>45</option>
              </select>
              <span className='spchitiet-gach'>|</span>
              <label>Số lượng :</label>
              <select name='soluong' id='' className='select-size'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
