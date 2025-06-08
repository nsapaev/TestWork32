import Image from "next/image"
import style from "./style.module.scss"

interface ICartProps {
  title: string,
  category: string,
  price: string,
  images: string,
  isAuth: boolean
}

export const Cart = (props: ICartProps ) => {
    const {category, images, price, title, isAuth = false} = props

    return (
        <div className={style.card}>
            <Image width={100} height={130} src={images} alt={title} />
            <p className={style.heading}>
                {title}
            </p>
            <p>
                {category}
            </p>
            <p> {price}  { isAuth ? <button>Add to card</button>:null} </p>
        </div>
    )
}