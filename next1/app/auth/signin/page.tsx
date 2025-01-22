"use client";
const Signup = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex border rounded-2xl bg-slate-200 bg-gradient-to-r p-8  space-y-5 w-[70%] justify-center shadow-lg shadow-slate-600 drop-shadow-lg text-black">
        <div className="space-y-5">
          <div className=" flex flex-col justify-center space-y-5  text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <h3 className="text-slate-500">Don't have an account?</h3>
          </div>
          <div className="flex flex-col pt-4 space-y-2 w-full">
            <label className="font-semibold mb-1 text-sm block">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              className="rounded-md p-2 block w-full"
            />
            <label className="font-semibold mb-1 text-sm block">Password</label>
            <input
              type="text"
              name="password"
              placeholder="Enter Password"
              className="rounded-md p-2 block w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
