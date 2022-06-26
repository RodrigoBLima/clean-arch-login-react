import React from "react";

import { useUserViewModel } from "../../core/user/controller/userViewModel";
import { useUserStoreImplementation } from "../../core/user/data/userStoreImplementation";

function Login() {
  const store = useUserStoreImplementation();
  const { shouldShowSpinner, getUser } = useUserViewModel(store);

  async function fetchUserData() {
    getUser();
  }

  if (shouldShowSpinner) return <p>Loading</p>;

  return (
    <>
      <p>login page</p>

      <button type="submit" onClick={() => fetchUserData()}>
        Logar
      </button>
    </>
  );
}
export default Login;
