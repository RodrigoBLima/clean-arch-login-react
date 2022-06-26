import type User  from "./userEntity";

export default interface UserStore {
  // State
  user: User | undefined;
  isLoading: boolean;

  // Actions
  getUser(): Promise<User>;
  setUser(user: User): void;
}

