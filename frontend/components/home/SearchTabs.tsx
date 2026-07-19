'use client';

import { useState } from 'react';

const tabs = ['Flight', 'Hotels', 'Tours', 'Packages'];

export default function SearchTabs() {
  const [activeTab, setActiveTab] = useState('Flight');

  return (
    <div className="w-full rounded-2xl bg-white shadow-2xl sm:rounded-3xl">
      <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 px-4 py-4 sm:gap-3 sm:px-6 sm:py-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-4 py-2 text-xs font-medium transition sm:px-5 sm:text-sm ${
              activeTab === tab
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-4 sm:p-6">
        {activeTab === 'Flight' && (
          <form className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                From
              </label>
              <input
                type="text"
                placeholder="Colombo"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                To
              </label>
              <input
                type="text"
                placeholder="Dubai"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Departure
              </label>
              <input
                type="date"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Return Date
              </label>
              <input
                type="date"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Travelers
              </label>
              <input
                type="number"
                min={1}
                placeholder="2"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Search
              </button>
            </div>
          </form>
        )}

        {activeTab === 'Hotels' && (
          <div className="py-6 text-sm text-gray-500 sm:py-8">
            Hotel search form goes here.
          </div>
        )}

        {activeTab === 'Tours' && (
          <div className="py-6 text-sm text-gray-500 sm:py-8">
            Tour search form goes here.
          </div>
        )}

        {activeTab === 'Packages' && (
          <div className="py-6 text-sm text-gray-500 sm:py-8">
            Package search form goes here.
          </div>
        )}
      </div>
    </div>
  );
}