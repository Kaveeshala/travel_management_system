"use client";

import HomeNavbar from "@/components/layout/HomeNavbar";
import SearchTabs from "@/components/home/SearchTabs";
import { Plane, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative w-full overflow-visible bg-[url('/images/homescreen4.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30" />

        <HomeNavbar />

        <div className="relative z-10 flex min-h-195 items-start px-4 pt-28 pb-72 sm:min-h-205 sm:px-6 sm:pt-32 sm:pb-80 md:min-h-screen md:px-10 md:pt-36 md:pb-72 lg:px-16">
          <div className="max-w-xl text-white">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-2 backdrop-blur-sm sm:mb-6 sm:px-4">
              <Plane
                className="h-4 w-4 text-blue-600 sm:h-5 sm:w-5"
                strokeWidth={2.2}
              />
              <span className="text-xs font-medium tracking-wide sm:text-sm">
                EXPLORE, DREAM, DISCOVER
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Discover Amazing
            </h1>
            <h2 className="mt-2 text-3xl font-handwritten leading-tight text-blue-800 sm:text-4xl md:text-5xl lg:text-6xl">
              Places with Us
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-black sm:mt-6 sm:max-w-lg sm:text-base">
              Find the best tours, hotels and flights: everything you need for
              the perfect trip.
            </p>

            <motion.div
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="mt-6 inline-block sm:mt-8"
            >
              <Button className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-6 text-sm font-semibold text-white hover:cursor-pointer hover:bg-blue-800 sm:px-6">
                <span>Explore Now</span>
                <motion.span
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="inline-flex"
                >
                  <MoveRight className="h-4 w-4" strokeWidth={2.2} />
                </motion.span>
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 z-20 w-full max-w-6xl -translate-x-1/2 translate-y-[22%] px-4 sm:translate-y-[30%] sm:px-6 md:translate-y-1/2">
          <SearchTabs />
        </div>
      </section>

      <section className="min-h-screen px-4 pb-16 pt-105 sm:px-6 sm:pt-115 md:px-10 md:pt-72 lg:px-16">
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Popular travel options
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-gray-600 sm:text-base">
          Add destinations, hotel cards, tour packages, and offers here.
        </p>
      </section>
    </main>
  );
}
