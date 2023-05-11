import {useState} from 'react'
import SectionInfo from '../../Shared/SectionInfo'
import ProductImg1 from "../../../assets/images/products/1.png";
import ProductImg2 from "../../../assets/images/products/2.png";
import ProductImg3 from "../../../assets/images/products/3.png";
import ProductImg4 from "../../../assets/images/products/4.png";
import ProductImg5 from "../../../assets/images/products/5.png";
import ProductImg6 from "../../../assets/images/products/6.png";
import ProductCard from './ProductCard';
const Products = () => {
  const products = [
    { id: 1,img:ProductImg1, name: 'Car Engine Plug', price: 20.00 },
    { id: 2,img:ProductImg2, name: 'Car Air Filter', price: 20.00 },
    { id: 3,img:ProductImg3, name: 'Cools Led Light', price: 20.00 },
    { id: 4,img:ProductImg4, name: 'Cools Led Light', price: 20.00 },
    { id: 5,img:ProductImg5, name: 'Cools Led Light', price: 20.00 },
    { id: 6,img:ProductImg6, name: 'Cools Led Light', price: 20.00 },
  ]
  const [showMore, setShowMore] = useState(false)
  const handleClick = () => { setShowMore(true) }

  return (
    <>
      <SectionInfo title="Popular Products" info="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. " heading="Browse Our Products" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5 mx-5">
        {/* ====card part start===== */}
        {products.slice(0, showMore ? products.length : 4).map(service => <ProductCard key={service.id} product={service} />)}
      </div>
      {!showMore &&
        <div className="flex items-center justify-center">
          <button className="btn btn-outline btn-error" onClick={handleClick}>More Services</button>
        </div>
      }
    </>
  )
}

export default Products