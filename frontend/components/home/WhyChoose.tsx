import {
  Globe,
  ThumbsUp,
  WalletCards,
  BadgePercent,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Globe,
    title: "Wide Range of Choices",
    description:
      "Choose from thousands of flights, hotels and tours worldwide.",
  },
  {
    icon: ThumbsUp,
    title: "Trusted by Travelers",
    description: "Join millions of happy travelers around the world.",
  },
  {
    icon: WalletCards,
    title: "Flexible & Easy Booking",
    description: "Book with ease and adjust your plans if needed.",
  },
  {
    icon: BadgePercent,
    title: "Exclusive Deals",
    description: "Get access to exclusive discounts and special offers.",
  },
];

export default function WhyChoose() {
  return (
    <section className="px-4 pb-20 pt-6 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="mb-8">
            <h2 className="text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
              Why Choose{" "}
              <span className="font-handwritten text-blue-700">Wandeleys?</span>
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-blue-100" />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                    <Icon className="h-7 w-7" strokeWidth={2.2} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-gray-600 sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem]">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80"
            alt="Tropical beach travel"
            className="h-full min-h-[420px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-between p-6 text-white sm:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                Let&apos;s Go!
              </p>

              <h3 className="mt-6 max-w-sm text-3xl font-semibold leading-tight sm:text-4xl">
                Your Next Adventure Awaits!
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-white/85 sm:text-base">
                Discover breathtaking places and create unforgettable memories.
              </p>
            </div>

            <div>
              <Button className="inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-white px-6 py-6 text-base font-semibold text-blue-700 hover:bg-blue-50">
                <span>Plan Your Trip</span>
                <ArrowRight className="h-5 w-5" strokeWidth={2.2} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}