import classes from './Wrapper.module.css'

const Wrapper = (props) => {
    return(
        <div className={classes.layout}>
            
            {props.children}
        </div>
    )
}

export default Wrapper;