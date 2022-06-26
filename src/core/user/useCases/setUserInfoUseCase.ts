import UserStore from "../domain/userStore";

type SetUserStore = Pick<UserStore, "setUser">;

const setUserUseCase = (store: SetUserStore) => {
  store.setUser({ name: "", email: "", authenticated: false });
};

export { setUserUseCase };
