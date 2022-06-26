import React from "react";

import { useUserViewModel } from "../../core/user/controller/userViewModel";
import { useUserStoreImplementation } from "../../core/user/data/userStoreImplementation";

function Home() {
  const store = useUserStoreImplementation();
  const { setUser } = useUserViewModel(store);

  function logout() {
    setUser();
  }

  return (
    <div>
      <p>Home</p>
      <p>Name: {store.user?.name}</p>
      <p>Email: {store.user?.email}</p>
      <button type="submit" onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
}
export default Home;
