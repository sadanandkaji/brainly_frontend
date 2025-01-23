import { useRef } from "react";
import { Button } from "../component/button";
import { Inputcomponent } from "../component/inputcomponent";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const usernameref = useRef<HTMLInputElement>(null);
  const passwordref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signup() {
    const username = usernameref.current?.value;
    const password = passwordref.current?.value;

    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await axios.post(BACKEND_URL + "/api/v1/signup", {
        username,
        password,
      });

      navigate("/signin", { replace: true });
    } catch (error) {
        //@ts-ignore
      alert(error.response?.data?.message || "An error occurred. Please try again.");
    }
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="bg-gray-400 p-12 rounded-lg">
        <Inputcomponent reference={usernameref} placeholder="Username" />
        <Inputcomponent reference={passwordref} placeholder="Password"  />
        <div className="flex justify-center p-4">
          <Button OnClick={signup} loading={false} fullwidth={true} size="sm" variant="primary" text="Sign Up" />
        </div>
      </div>
    </div>
  );
}
