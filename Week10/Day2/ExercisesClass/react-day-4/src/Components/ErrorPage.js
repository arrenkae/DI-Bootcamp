import { useRouteError } from "react-router-dom";

const ErrorPage = (props) => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, the page you are looking for is unavailable</p>
            <h2>404</h2>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage;