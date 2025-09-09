"use client";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    window.location.replace("/MyWeb/en/");
  }, []);
  return null;
}

