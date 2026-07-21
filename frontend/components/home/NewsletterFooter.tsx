import { Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.03 3.66 9.2 8.44 9.93v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.48H15.2c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.73 8.43-4.9 8.43-9.93Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.85 1.35a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16ZM12 6.86A5.14 5.14 0 1 1 6.86 12 5.15 5.15 0 0 1 12 6.86Zm0 1.8A3.34 3.34 0 1 0 15.34 12 3.34 3.34 0 0 0 12 8.66Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M18.9 2H22l-6.77 7.74L23 22h-6.1l-4.78-6.26L6.64 22H3.53l7.24-8.28L1 2h6.25l4.32 5.7L18.9 2Zm-1.07 18.2h1.69L6.33 3.7H4.51L17.83 20.2Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M21.58 7.19a2.76 2.76 0 0 0-1.94-1.95C17.93 4.8 12 4.8 12 4.8s-5.93 0-7.64.44A2.76 2.76 0 0 0 2.42 7.2 28.66 28.66 0 0 0 2 12a28.66 28.66 0 0 0 .42 4.81 2.76 2.76 0 0 0 1.94 1.95c1.71.44 7.64.44 7.64.44s5.93 0 7.64-.44a2.76 2.76 0 0 0 1.94-1.95A28.66 28.66 0 0 0 22 12a28.66 28.66 0 0 0-.42-4.81ZM10 15.46V8.54L16 12l-6 3.46Z" />
    </svg>
  );
}

export default function NewsletterFooter() {
  return (
    <section className="px-4 pb-16 pt-6 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-blue-700 px-6 py-8 text-white shadow-xl sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-xl items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
              <Navigation className="h-6 w-6" strokeWidth={2.2} />
            </div>

            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Subscribe to our Newsletter
              </h2>
              <p className="mt-2 text-sm leading-7 text-blue-100 sm:text-base">
                Get the latest travel deals and inspiration straight to your inbox.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 lg:max-w-2xl lg:flex-row lg:items-center lg:justify-end">
            <div className="flex w-full flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 rounded-full border-white/20 bg-white text-gray-900 placeholder:text-gray-400 focus-visible:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="h-12 shrink-0 cursor-pointer rounded-full bg-gray-900 px-6 text-sm font-medium text-white hover:bg-black">
                Subscribe
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white hover:text-blue-700"
              >
                <FacebookIcon />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white hover:text-blue-700"
              >
                <InstagramIcon />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white hover:text-blue-700"
              >
                <TwitterIcon />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white hover:text-blue-700"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}