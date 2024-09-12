import { useLocation, Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

const MyRoute = ({ element: Component, isClosed = false, requireAdmin = false, ...rest }) => {
    const { isLoggedIn, user } = useSelector(state => state.auth);
    const location = useLocation();

    if (isClosed && !isLoggedIn) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    if (isLoggedIn && location.pathname === '/login') {
        return <Navigate to="/" replace />;
    }

    if (requireAdmin && (!user || !user.admin)) {
        return <Navigate to="/" replace />;
    }

    return <Component {...rest} />;
};

MyRoute.propTypes = {
    element: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func]).isRequired,
    isClosed: PropTypes.bool,
    requireAdmin: PropTypes.bool, 
};

export default MyRoute;
