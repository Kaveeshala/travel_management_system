"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[url('/images/loginpage.jpg')] bg-cover bg-center">
      {/* Dark overlay over the background */}
      <div className="min-h-screen bg-black/40">
        <div className="flex min-h-screen items-center px-16">
          {/* LEFT SIDE TEXT */}
          <div className="flex-1 text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              Explore Your Dream Destination
            </h2>
            <p className="mt-4 max-w-md text-sm md:text-base text-gray-100">
              Discover popular destinations, flights, hotels, and tours in one
              place. Plan and book your perfect travel experience with our
              agency.
            </p>
          </div>

          {/* RIGHT SIDE LOGIN CARD */}
          <div className="flex-1 flex justify-end">
            <div className="w-full max-w-lg">
              <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl shadow-xl p-8">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-2xl font-semibold text-white mb-2">
                    Welcome Back
                  </h1>
                  <p className="text-sm text-gray-100 mb-6">
                    Login to manage your travel plans and bookings.
                  </p>
                </div>

                <form className="flex flex-col gap-4">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-100 mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-white/40 bg-white/70 px-3 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-100 mb-1"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="w-full rounded-lg border border-white/40 bg-white/70 px-3 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-2 text-sm">
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-sky-500 px-4 py-2 font-medium text-white hover:bg-sky-600 transition-colors"
                    >
                      Login
                    </button>

                    <button
                      type="button"
                      className="w-full rounded-lg border border-white/50 bg-transparent px-4 py-2 font-medium text-white hover:bg-white/10 transition-colors"
                    >
                      Login with Google
                    </button>
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between text-xs mt-2">
                    <a
                      href="#"
                      className="text-sky-200 hover:text-sky-100 underline"
                    >
                      Forgot password?
                    </a>
                    <p className="text-gray-100">
                      Don&apos;t have an account?{" "}
                      <a
                        href="/signup"
                        className="text-sky-200 hover:text-sky-100 underline font-medium"
                      >
                        Sign up
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
