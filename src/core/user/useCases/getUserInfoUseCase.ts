import UserStore from "../domain/userStore";

type GetUserStore = Pick<UserStore, "getUser">;

const getUserUseCase = (store: GetUserStore) => {
  store.getUser();
};

export { getUserUseCase };
