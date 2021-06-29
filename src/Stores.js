
import classes from './Stores.module.css'
const Stores = (props) => {
    return (
        <div className={classes.stores}>
            {props.children}
            </div>
    )
}

export default Stores;