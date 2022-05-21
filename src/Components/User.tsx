import { useState } from "react";

interface UserInterface {
  uid: string;
  name: string;
}

export const User = () => {
  const [user, setUser] = useState<UserInterface>();
  const login = () => {
    setUser({
      uid: "ABC123",
      name: "Tommy",
    });
  };

  return (
    <div className="mt-5">
      <h3>User</h3>
      <button onClick={login} className="btn btn-outline-primary">
        Login
      </button>
      {!user ? <pre>No hay usuario</pre> : <pre>{JSON.stringify(user)}</pre>}
    </div>
  );
};
