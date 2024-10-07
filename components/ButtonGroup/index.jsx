"use client";

import Link from "next/link";

export default function ButtonGroup() {
  return (
    <div>
      <Link href={"/log"}>Login</Link>
      <Link href={"/si"}>Sign UP</Link>
    </div>
  );
}
