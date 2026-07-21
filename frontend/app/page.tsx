"use client";

import HomeNavbar from "@/components/layout/HomeNavbar";
import SearchTabs from "@/components/home/SearchTabs";
import {
  Plane,
  MoveRight,
  Tag,
  Headphones,
  ShieldCheck,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import PopularDestinations from "@/components/home/PopularDestinations";
import WhyChoose from "@/components/home/WhyChoose";
import NewsletterFooter from "@/components/home/NewsletterFooter";

export default function HomePage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-visible bg-[url('/images/homescreen4.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30" />

        <HomeNavbar />

        <div className="relative z-10 flex min-h-screen items-start px-4 pb-56 pt-28 sm:px-6 sm:pb-64 sm:pt-32 md:px-10 md:pb-72 md:pt-36 lg:px-16">
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

        <div className="absolute bottom-0 left-1/2 z-20 w-full max-w-6xl -translate-x-1/2 translate-y-1/3 px-4 sm:px-6 md:translate-y-1/2">
          <SearchTabs />
        </div>
      </section>

      <section className="px-4 pb-16 pt-36 sm:px-6 sm:pt-40 md:px-10 md:pt-44 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-4 rounded-2xl bg-white p-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <Tag className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-gray-900">
                  Best Price Guarantee
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  We ensure you get the best deals always.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <Headphones className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-gray-900">
                  24/7 Customer Service
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  We&apos;re here to help you anytime, anywhere.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <ShieldCheck className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-gray-900">
                  Secure Booking
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Your data and payments are 100% safe with us.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <Award className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-gray-900">
                  Handpicked Experiences
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Curated hotels and tours for unforgettable trips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PopularDestinations />

      <WhyChoose />

      <NewsletterFooter />

    </main>
  );
}