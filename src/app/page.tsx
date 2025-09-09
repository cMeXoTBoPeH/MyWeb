"use client";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    // Let Next.js basePath handle prefix
    window.location.replace("/en/");
  }, []);
  return null;
}

