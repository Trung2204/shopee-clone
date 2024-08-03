"use client";

import Link from "next/link";
import Image from "next/image";
import { ChangeEvent, FC, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Header: FC = () => {
  const [searchText, setsearchText] = useState("");
  const handleSearchChange = (e: ChangeEvent) => {};

  return (
    <header className="sticky-header bg-orange-primary text-white py-2">
      <div className="main-content">
        <nav className="nav-bar flex items-center gap-4 justify-end">
          {/* Sign up */}
          <button
            type="button"
            onClick={() => {}}
            className="text-base font-semibold hover:text-white/70"
          >
            Sign up
          </button>
          <div className="h-4 border-r-[1.5px] border-r-white"></div>
          {/* Sign in */}
          <button
            type="button"
            onClick={() => {}}
            className="text-base font-semibold hover:text-white/70"
          >
            Sign in
          </button>
        </nav>

        <div className="logo-with-search-bar-and-cart grid grid-cols-12 items-center gap-4 py-4">
          {/* Logo */}
          <Link href="/" className="col-span-2 flex items-center gap-2">
            <Image
              src="/assets/images/logo.svg"
              alt="Shopee Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="logo-text text-white text-2xl font-bold">
              Shopee
            </span>
          </Link>

          {/* Search bar */}
          <form className="search-bar col-span-9">
            <div className="flex rounded-sm bg-white p-1">
              <input
                type="text"
                placeholder="Search on Shopee"
                value={searchText}
                onChange={handleSearchChange}
                className="flex-grow border-none bg-transparent px-3 py-2 text-black outline-none"
              />
              <button className="flex-shrink-0 rounded-sm bg-orange-primary px-6 py-2 hover:opacity-90">
                <Image
                  src="/assets/icons/search.svg"
                  alt="Search Icon"
                  width={25}
                  height={25}
                />
              </button>
            </div>
          </form>

          {/* Shopping Cart */}
          <div className="col-span-1 justify-self-end">
            <a href="/">
              <Image
                src="/assets/icons/shopping-cart.svg"
                alt="Shopping Cart Icon"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
