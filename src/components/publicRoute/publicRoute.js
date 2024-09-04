import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  {
    !isAuthenticated && <> {children}</>;
  }
};

export default PublicRoute ;