"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";

const navigation = [
  { name: "Job Board", href: "#" },
  { name: "Companies", href: "#" },
  { name: "About", href: "/about" },
];

export default function Header(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return(
        <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
        <nav aria-label="Global" className="flex items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex lg:flex-1 justify-start">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Next Hire</span>
              <img
                alt="Next Hire"
                src="/job-board-logo.png"
                className="h-18 w-20 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-gray-900 hover:text-blue-600 hover:scale-105 transition-all"
              >
                {item.name}
              </a>
            ))}
            {/* Register Link */}
            <Link
             to="/sign-up"
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 hover:scale-105 transition-all"
            >
              Sign up
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold text-gray-900 hover:text-blue-600 hover:scale-105 transition-all">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/30" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <img
                  alt="Next Hire"
                  src="/job-board-logo.png"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-blue-600"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#"
                className="mt-4 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-blue-600"
              >
                Log in
              </a>
              {/* Mobile Register Link */}
              <a
                href="#"
                className="mt-4 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-blue-600"
              >
                Register
              </a>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    )
}