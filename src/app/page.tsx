'use client';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import style from './page.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Cart } from './components/Cart';
import { Loader } from './components/Loader';
import { ICart } from './types';
import { useAuthStore } from './store/authStore';

const PRODUCT_URL = 'https://dummyjson.com/products?limit=12';


export default function Home() {
  const [data, setData] = useState<ICart[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const isAuth = useAuthStore(state => state.isAuth())
  
  
  useEffect(() => {
    
    async function getCarts() {
      setLoading(true)
      axios.get(PRODUCT_URL)
        .then((res) => {
          setData(res.data.products);
        })
        .catch(err => {
          setIsError(true)
        })
        .finally(() => setLoading(false))
    }

    getCarts() 
   
  }, [setData]);


  if(isError){
    return <>Somethis has wrong</>
  }


  return (
    <div>
      <Header />
      {loading && <Loader />}
      <div className={style.carts__container}>
        {data?.length &&
          data.map((cart) => {
            return (
              <Cart
                key={cart.id}
                category={cart.category}
                images={cart.images[0]}
                price={cart.price}
                title={cart.title}
                isAuth={isAuth}
              />
            );
          })}
      </div>
      <Footer />
    </div>
  );
}
