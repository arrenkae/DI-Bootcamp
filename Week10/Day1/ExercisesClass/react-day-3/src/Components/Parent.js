const Parent = (props) => {
    console.log(props);
    if (props.auth === 'admin') {
        return props.children;
    } else {
        return <p>Not authorized to see this</p>
    }
}

export default Parent;