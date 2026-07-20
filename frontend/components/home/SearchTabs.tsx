"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const tabs = ["Flight", "Hotels", "Tours", "Packages"];

export default function SearchTabs() {
  const [activeTab, setActiveTab] = useState("Flight");

  return (
    <div className="w-full rounded-2xl bg-white shadow-2xl sm:rounded-3xl">
      <div className="flex flex-wrap gap-2 border-b border-gray-200 px-4 py-4 sm:gap-3 sm:px-6 sm:py-5">
        {tabs.map((tab) => (
          <Button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            variant="ghost"
            className={`cursor-pointer rounded-full px-4 py-2 text-xs sm:px-5 sm:text-sm ${
              activeTab === tab
                ? "bg-blue-700 text-white hover:bg-blue-800 hover:text-white"
                : "bg-blue-50 text-black hover:bg-blue-100 hover:text-black"
            }`}
          >
            {tab}
          </Button>
        ))}
      </div>

      <div className="p-4 sm:p-6">
        {activeTab === "Flight" && (
          <form className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                From
              </label>
              <Input
                type="text"
                placeholder="Colombo"
                className="h-12 rounded-xl border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus-visible:border-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                To
              </label>
              <Input
                type="text"
                placeholder="Dubai"
                className="h-12 rounded-xl border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus-visible:border-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Departure
              </label>
              <Input
                type="date"
                className="h-12 rounded-xl border-gray-200 text-sm text-gray-800 focus-visible:border-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Return Date
              </label>
              <Input
                type="date"
                className="h-12 rounded-xl border-gray-200 text-sm text-gray-800 focus-visible:border-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Travelers
              </label>
              <Input
                type="number"
                min={1}
                placeholder="2"
                className="h-12 rounded-xl border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus-visible:border-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="flex items-end">
              <Button
                type="submit"
                className="h-12 w-full cursor-pointer rounded-md bg-blue-700 px-5 text-sm font-medium text-white hover:bg-blue-800"
              >
                Search
              </Button>
            </div>
          </form>
        )}

        {activeTab === "Hotels" && (
          <form className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-6">
            <div className="space-y-2 md:col-span-2 xl:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Destination / Hotel
              </label>
              <Input
                type="text"
                placeholder="City, area, or hotel name"
                className="h-12 rounded-xl border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus-visible:border-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Check-in
              </label>
              <Input
                type="date"
                className="h-12 rounded-xl border-gray-200 text-sm text-gray-800 focus-visible:border-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Check-out
              </label>
              <Input
                type="date"
                className="h-12 rounded-xl border-gray-200 text-sm text-gray-800 focus-visible:border-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Guests
              </label>
              <Input
                type="number"
                min={1}
                placeholder="2"
                className="h-12 rounded-xl border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus-visible:border-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Rooms
              </label>
              <Input
                type="number"
                min={1}
                placeholder="1"
                className="h-12 rounded-xl border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus-visible:border-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="md:col-span-2 xl:col-span-6">
              <Button
                type="submit"
                className="h-12 w-full cursor-pointer rounded-md bg-blue-700 px-5 text-sm font-medium text-white hover:bg-blue-800 md:min-w-[180px] md:w-auto"
              >
                Search Hotels
              </Button>
            </div>
          </form>
        )}

        {activeTab === "Tours" && (
          <form className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-6">
            <div className="space-y-2 md:col-span-2 xl:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Destination
              </label>
              <Input
                type="text"
                placeholder="Bali, Maldives, Paris..."
                className="h-12 rounded-xl border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus-visible:border-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Tour Type
              </label>
              <Select>
                <SelectTrigger className="h-12 w-full cursor-pointer rounded-xl border-gray-200 text-sm text-gray-800 focus:border-blue-600 focus:ring-0 focus:ring-offset-0">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="beach">Beach</SelectItem>
                  <SelectItem value="honeymoon">Honeymoon</SelectItem>
                  <SelectItem value="family">Family</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="wildlife">Wildlife</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Travel Date
              </label>
              <Input
                type="date"
                className="h-12 rounded-xl border-gray-200 text-sm text-gray-800 focus-visible:border-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Travelers
              </label>
              <Input
                type="number"
                min={1}
                placeholder="2"
                className="h-12 rounded-xl border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus-visible:border-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Duration
              </label>
              <Select>
                <SelectTrigger className="h-12 w-full cursor-pointer rounded-xl border-gray-200 text-sm text-gray-800 focus:border-blue-600 focus:ring-0 focus:ring-offset-0">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-3">1 - 3 Days</SelectItem>
                  <SelectItem value="4-7">4 - 7 Days</SelectItem>
                  <SelectItem value="8-14">8 - 14 Days</SelectItem>
                  <SelectItem value="15-plus">15+ Days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="md:col-span-2 xl:col-span-6">
              <Button
                type="submit"
                className="h-12 w-full cursor-pointer rounded-md bg-blue-700 px-5 text-sm font-medium text-white hover:bg-blue-800 md:min-w-[180px] md:w-auto"
              >
                Search Tours
              </Button>
            </div>
          </form>
        )}

        {activeTab === "Packages" && (
          <form className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-6">
            <div className="space-y-2 md:col-span-2 xl:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Destination
              </label>
              <Input
                type="text"
                placeholder="Thailand, Switzerland, Bali..."
                className="h-12 rounded-xl border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus-visible:border-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Departure Date
              </label>
              <Input
                type="date"
                className="h-12 rounded-xl border-gray-200 text-sm text-gray-800 focus-visible:border-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Duration
              </label>
              <Select>
                <SelectTrigger className="h-12 w-full cursor-pointer rounded-xl border-gray-200 text-sm text-gray-800 focus:border-blue-600 focus:ring-0 focus:ring-offset-0">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2-4">2 - 4 Days</SelectItem>
                  <SelectItem value="5-7">5 - 7 Days</SelectItem>
                  <SelectItem value="8-10">8 - 10 Days</SelectItem>
                  <SelectItem value="11-plus">11+ Days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Travelers
              </label>
              <Input
                type="number"
                min={1}
                placeholder="2"
                className="h-12 rounded-xl border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus-visible:border-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Budget
              </label>
              <Select>
                <SelectTrigger className="h-12 w-full cursor-pointer rounded-xl border-gray-200 text-sm text-gray-800 focus:border-blue-600 focus:ring-0 focus:ring-offset-0">
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-500">Under $500</SelectItem>
                  <SelectItem value="500-1000">$500 - $1000</SelectItem>
                  <SelectItem value="1000-2000">$1000 - $2000</SelectItem>
                  <SelectItem value="2000-plus">$2000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:col-span-2 xl:col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Package Type
              </label>
              <Select>
                <SelectTrigger className="h-12 w-full cursor-pointer rounded-xl border-gray-200 text-sm text-gray-800 focus:border-blue-600 focus:ring-0 focus:ring-offset-0">
                  <SelectValue placeholder="Select package type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="family">Family Package</SelectItem>
                  <SelectItem value="honeymoon">Honeymoon Package</SelectItem>
                  <SelectItem value="adventure">Adventure Package</SelectItem>
                  <SelectItem value="luxury">Luxury Package</SelectItem>
                  <SelectItem value="weekend">Weekend Getaway</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end md:col-span-2 xl:col-span-3">
              <Button
                type="submit"
                className="h-12 w-full cursor-pointer rounded-md bg-blue-700 px-5 text-sm font-medium text-white hover:bg-blue-800 md:min-w-[190px] md:w-auto"
              >
                Search Packages
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}