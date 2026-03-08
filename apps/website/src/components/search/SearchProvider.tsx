"use client";

import { useState, useEffect } from "react";
import SearchModal from "./SearchModal";

export default function SearchProvider() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenSearch = () => setIsOpen(true);
    document.addEventListener("open-search", handleOpenSearch);
    return () => document.removeEventListener("open-search", handleOpenSearch);
  }, []);

  return <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}
