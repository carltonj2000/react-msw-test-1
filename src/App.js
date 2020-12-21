function App() {
  const onLogin = async () => {
    const res = await fetch("/login", { method: "POST" });
    if (res.ok) {
      console.log("logged in");
    } else {
      console.log("login failed with status", res.status);
    }
  };
  const onLogout = async () => {
    const res = await fetch("/logout", { method: "POST" });
    if (res.ok) {
      console.log("logged out");
    } else {
      console.log("logout failed with status", res.status);
    }
  };
  const onGetUser = async () => {
    const res = await fetch("/user");
    if (res.ok) {
      console.log(res);
      const json = await res.json();
      console.log("user data", json);
    } else {
      console.log("get user failed with status", res.status);
    }
  };
  return (
    <div>
      <button onClick={onLogin}>Login</button>
      <button onClick={onLogout}>Logout</button>
      <button onClick={onGetUser}>Get user</button>
    </div>
  );
}

export default App;
