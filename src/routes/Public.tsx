import { Navigate } from "react-router-dom";

import { AppRootState } from "../store/appStoreImplementation";
import { UserStoreState } from "../core/user/data/userReducer";
import { useSelector } from "react-redux";
import { userSelector } from "../core/user/data/userStoreImplementation";

export const PublicRoute = ({ children }: any) => {
  const { user } = useSelector<AppRootState, UserStoreState>(
    userSelector
  );

  return user?.authenticated === false ? children : <Navigate to="/home" />;
};
