// src/app/(auth)/signup/page.tsx
'use client';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[url('/images/loginpage.jpg')] bg-cover bg-center">
      {/* Dark overlay */}
      <div className="min-h-screen bg-black/40">
        <div className="flex min-h-screen items-center px-16">
          {/* LEFT SIDE TEXT */}
          <div className="flex-1 text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              Explore Your Dream Destination
            </h2>
            <p className="mt-4 max-w-md text-sm md:text-base text-gray-100">
              Join our travel community to create custom packages with flights,
              hotels, and tours tailored to your perfect trip.
            </p>
          </div>

          {/* RIGHT SIDE SIGNUP CARD */}
          <div className="flex-1 flex justify-end">
            <div className="w-full max-w-md">
              <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl shadow-xl p-8">
                <h1 className="text-2xl font-semibold text-white mb-2">
                  Create Account
                </h1>
                <p className="text-sm text-gray-100 mb-6">
                  Sign up to start planning and booking your dream journeys.
                </p>

                <form className="space-y-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-100 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-lg border border-white/40 bg-white/70 px-3 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                  </div>

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

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-100 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+94 7X XXX XXXX"
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
                      Sign up
                    </button>

                    <button
                      type="button"
                      className="w-full rounded-lg border border-white/50 bg-transparent px-4 py-2 font-medium text-white hover:bg-white/10 transition-colors"
                    >
                      Sign up with Google
                    </button>
                  </div>

                  {/* Link to login */}
                  <div className="text-xs mt-2 text-gray-100 text-center">
                    Already have an account?{' '}
                    <a
                      href="/login"
                      className="text-sky-200 hover:text-sky-100 underline font-medium"
                    >
                      Login
                    </a>
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