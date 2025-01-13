import SigninForm from "@/app/components/forms/SigninForm";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <main className="h-screen font-serif flex justify-between p-4 gap-4">
      <div className="bg-slate-300 w-[50%] rounded-lg">
        <div className="h-full relative rounded-lg">
          <div className="absolute p-2">
            <Image
              src={"/images/logo-small-removebg.png"}
              height={150}
              width={150}
              alt="Logo"
              priority
            />
          </div>
          <Image
            src={"/images/login-new.jpg"}
            sizes="100vw"
            width={0}
            height={0}
            className="w-full h-full object-cover rounded-lg"
            priority
            alt="Login"
            title="https://unsplash.com/photos/a-wallet-with-a-stack-of-twenty-dollar-bills-sticking-out-of-it-NvqlamJfnk8?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
          />
          <div className="absolute top-[80%] w-[100%] text-center">
            <p className="text-4xl font-semibold text-white">
              Best way to manage your finances
            </p>
          </div>
        </div>
      </div>
      <div className="w-[50%] flex flex-col justify-center items-center">
        <div className="w-[560px]">
          <div className="text-center mb-2">
            <h2 className="text-2xl mb-2 font-semibold">Welcome back!</h2>
            <p className="text-slate-500">
              Zero One is the best platform to manage your finances. Start and
              enjoy your journey 🤘
            </p>
          </div>
          <hr />
          <div className="mt-2">
            <SigninForm />
            <p>
              Do not have an account yet.{" "}
              <Link href={"/register"} className="text-blue-500">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
