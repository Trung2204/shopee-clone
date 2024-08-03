"use client";

import Link from "next/link";
import Image from "next/image";
import { ChangeEvent, FC, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Header: FC = () => {
  const [searchText, setsearchText] = useState("");
  const handleSearchChange = (e: ChangeEvent) => {};

  return (
    <header className="sticky-header bg-orange-primary">
      <div className="main-content py-2">
        <nav className="nav-bar">
          <div className="main-content flex items-center gap-4 mx-[62px] justify-end">
            {/* Sign up */}
            <button type="button" onClick={() => {}}>
              Sign up
            </button>
            <span>|</span>
            {/* Sign in */}
            <button type="button" onClick={() => signIn()}>
              Sign in
            </button>
          </div>
        </nav>
        <div className="logo-with-search-bar-and-cart">
          <div className="main-content flex items-center justify-between py-4 mx-[62px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="../../assets/images/logo.svg"
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
            <form className="search-bar w-[840px] bg-white flex flex-center p-1">
              <input
                type="text"
                placeholder="Search on Shopee"
                value={searchText}
                onChange={handleSearchChange}
                className="w-full ml-2"
              />
              <button className="right-0 top-0 bg-orange-primary px-6 py-2">
                <Image
                  src="../../assets/icons/search.svg"
                  alt="Search Icon"
                  width={25}
                  height={25}
                />
              </button>
            </form>

            {/* Shopping Cart */}
            <Image
              src="../../assets/icons/shopping-cart.svg"
              alt="Shopping Cart Icon"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
