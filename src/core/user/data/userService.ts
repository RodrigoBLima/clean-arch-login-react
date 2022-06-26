import type User from "../domain/userEntity";

function getUser(): Promise<User> {
 
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        ({
          name: "Rodrigo Lima",
          email: "limarodrigo@gmail.com",
          authenticated: true,
        })
      );
    }, 1000);
  });
}

export { getUser };
