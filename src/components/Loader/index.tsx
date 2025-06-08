
import style from "./style.module.scss"

export const Loader = () => {
    return (
    <div className={style.loader}>
      <div className={style.circle}>
        <div className={style.dot}></div>
        <div className={style.outline}></div>
      </div>
      <div className={style.circle}>
        <div className={style.dot}></div>
        <div className={style.outline}></div>
      </div>
      <div className={style.circle}>
        <div className={style.dot}></div>
        <div className={style.outline}></div>
      </div>
      <div className={style.circle}>
        <div className={style.dot}></div>
        <div className={style.outline}></div>
      </div>
    </div>
    )
} 