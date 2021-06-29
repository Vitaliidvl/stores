import heartSvg from './assets/heart.svg'
import classes from './HeartIcon.module.css'


const HeartIcon = () => {
    return(
        <div className={classes['store-wish-list']}>
              <img src={heartSvg} alt="heart" className={classes['heart-icon']} /> 
              </div>
    )
}

export default HeartIcon