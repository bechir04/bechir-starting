import { useSelector } from "react-redux";

const AdminRoute = ({children}) =>{
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated) ;
    ( isAuthenticated &&
        <>
        {children}
        </>

    )
}

export default AdminRoute ;