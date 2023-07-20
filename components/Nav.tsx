"use client";

import Link from "next/link";
// import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = false;
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setProviders();
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <img
          src="https://jusan.kz/file-server/filename?dir=logo&filename=logo-desktop2.webp"
          alt="LogoJus"
          height={150}
          width={150}
          className="object-contain rounded-full"
        />
        <p className="logo_text">Bank of Future</p>
      </Link>
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="/create-news" className="black_btn">
            Share my news!
          </Link>
          <button type="button" className="outline_btn">
            Sign out
          </button>
          <Link href="/profile">
            <img
              src="https://www.kindpng.com/picc/m/302-3022566_michael-de-santa-michael-townley-hd-png-download.png"
              alt="profile_avatar"
              height={100}
              width={50}
            />
          </Link>
        </div>
      </div>
      <div className="sm:hidden flex relative">
        <div className="flex">
        <img
          src="https://jusan.kz/file-server/filename?dir=logo&filename=logo-desktop2.webp"
          alt="LogoJus"
          height={150}
          width={150}
          className="object-contain rounded-full"
        />

        </div>
      </div>
    </nav>
  );
};

export default Nav;
