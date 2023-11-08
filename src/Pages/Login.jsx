import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { HiEyeOff, HiEye } from "react-icons/hi";
import { FaGoogle } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const { userSignIn, handleGoogleSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIcon, setShowPassword] = useState(false);

  // make password input visible
  const showPassword = () => {
    setShowPassword(!passwordIcon);
  };
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    userSignIn(trimmedEmail, trimmedPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          toast.success("User Logged in Successfully.");
          // Navigate after Login
          setTimeout(() => {
            navigate(location?.state ? location.state : "/");
          }, 2000);
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage) {
          toast.error("Invalid Email & Password");
        }
      });
  };

  // Google
  const handleGoogle = () => {
    handleGoogleSignIn()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        toast.success("Sign In successfully");
        console.log(credential);
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 3000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <div className="mb-5 md:mb-20 ">
        <div className="mt-10 flex justify-center ">
          <Card className="w-96 ">
            <CardHeader
              variant="gradient"
              className="mb-4 grid h-24 place-items-center bg-[#FF7F56]"
            >
              <Typography className="text-2xl" variant="h3" color="white">
                Login your account
              </Typography>
            </CardHeader>
            <CardBody className=" relative flex flex-col gap-4 ">
              <Input
                label="Email"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Input
                label="Password"
                size="lg"
                type={passwordIcon ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div onClick={showPassword} className="absolute top-24 right-8">
                {passwordIcon ? <HiEye></HiEye> : <HiEyeOff></HiEyeOff>}
              </div>

              <small className="-mt-3 cursor-pointer font-medium">
                Forget Password?
              </small>

              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button className="bg-[#FF7F56]" onClick={handleClick} fullWidth>
                Login
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don&apos;t have an account?
                <Link className="ml-1 font-bold text-[] " to="/register">
                  {" "}
                  Register
                </Link>
              </Typography>
              <div className="mt-6 ">
                <Button
                  onClick={handleGoogle}
                  size="md"
                  variant="outlined"
                  className="flex text-[#5352ED] font-extrabold items-center justify-center gap-3 w-11/12 mx-auto"
                >
                  <FaGoogle className="h-4 w-4  font-poppins border border-[#333333]"></FaGoogle>
                  Login with Google
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
