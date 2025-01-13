import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <main className="h-screen font-serif flex justify-between p-4 gap-4">
      <div className="bg-slate-300 w-[50%]">
        <div className="h-full relative rounded-lg">
          <div>Logo</div>
          <div>Image</div>
          <div>Brief Description</div>
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
            <div>Form</div>
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
