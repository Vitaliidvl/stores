import {Fragment} from 'react'
import classes from './Store.module.css'
import HeartIcon from './HeartIcon'

const Store = (props) => {
    return (
          <Fragment>
          <div className={classes.store}>
            <HeartIcon />
            
              <div className={classes['store-logo']}>
                  <img src={props.logo} alt="store-logo" />
             </div>

        <div className={classes['store-info']}>
          <div className={classes['store-brand']}>
            {props.title}
          </div>
          <div className={classes['store-descr']}>
            {props.descr}
          </div>
        </div>
      </div>
      </Fragment>
      
    )
}
export default Store;