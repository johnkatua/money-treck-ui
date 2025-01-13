import SignupForm from "@/app/components/forms/SignupForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <main className="h-screen font-serif flex justify-between p-4 gap-4">
      <div className="w-[50%] h-[100%] flex flex-col">
        <div className="w-[150px] h-[150px]">
          <Image
            src={"/images/logo-small.png"}
            height={150}
            width={150}
            alt="Logo"
            priority
          />
        </div>
        <div className="flex  flex-1 justify-center items-center">
          <div className="w-[560px]">
            <div className="text-center mb-2">
              <h2 className="text-2xl mb-2 font-semibold">
                Create your account
              </h2>
              <p className="text-slate-500">
                Let's get started with you managing your finances
              </p>
            </div>
            <hr />
            <div className="mt-2">
              <SignupForm />
              <p className="px-2">
                Already have an account?{" "}
                <Link href={"/login"} className="text-blue-600">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <div className="h-full relative rounded-lg">
          <div className="absolute z-10 flex items-end justify-center mb-4 p-4 pb-12 text-center text-white w-[100%] h-[100%]">
            <h4 className="text-4xl font-semibold">
              Discovering the Best Resource to Manage Your Finances
            </h4>
          </div>
          <Image
            src={"/images/register.jpg"}
            alt="Register"
            sizes="100vw"
            width={0}
            height={0}
            className="w-full h-full object-cover rounded-lg"
            priority
            title="https://unsplash.com/photos/a-person-is-holding-a-wallet-with-money-in-it-w6tt6bFpKMA?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
          />
        </div>
      </div>
    </main>
  );
};

export default Register;
