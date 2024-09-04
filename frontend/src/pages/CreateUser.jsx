import { useState } from "react";
import { createUser } from "../api";

export function CreateUser() {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    let response = await createUser(user);
    console.log(response);
    if (response.status != 200) {
      alert("Error");
    }
  }
  function handleChange(e) {
    setuser({ ...user, [e.target.name]: e.target.value });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder={"Name"}
        onChange={handleChange}
        name="name"
        required
        maxLength={20}
      />
      <input
        placeholder={"Email"}
        onChange={handleChange}
        name="email"
        required
        maxLength={40}
      />
      <input
        placeholder={"Password"}
        onChange={handleChange}
        name="password"
        type="password"
        required
        maxLength={20}
      />
      <button type="submit">Create Account</button>
    </form>
  );
}
