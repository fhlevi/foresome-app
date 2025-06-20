import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import clsx from "clsx";

type Props = {
  className?: string
}

function Header({ className }: Props) {
  return (
    <header className={clsx('flex items-center justify-center md:justify-between px-4 h-[90px] border border-solid border-[#D4E0D9] fixed w-full z-10 bg-white top-0', className)}>
      <Link href="/">
        <a className="px-10 py-[15px]">
          <Image 
            src="/images/header-logo.png"
            alt="Main-header Logo"
            width={127}
            height={60}
          />
        </a>
      </Link>
    </header>
  );
}

export default Header;
