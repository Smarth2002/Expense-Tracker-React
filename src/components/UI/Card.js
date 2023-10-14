import "./Card.css";

// Wrapper component that just create a div with css of (rounded corners and box shadow) and render children 
function Card(props) {

    const classes='card '+props.class; // concatenating card and recieved class

    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;