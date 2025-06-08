'use client';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import style from './page.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Cart } from '../components/Cart';
import { Loader } from '../components/Loader';
import { useAuthStore } from '../store/authStore';

const URL = 'https://dummyjson.com/products?limit=12';

interface ICart {
  id: number;
  title: string;
  category: string;
  price: string;
  images: string[];
}

export default function Home() {
  const [data, setData] = useState<ICart[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const isAuth = useAuthStore((state) => state.isAuth);

  useEffect(() => {
    try {
      axios.get(URL).then((res) => {
        setData(res.data.products);
      });
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  }, [setData]);

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
