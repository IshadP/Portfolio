"use client";

import { useEffect } from "react";

export function ScrollRestoration() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(200, 0);
  }, []);

  return null;
}
