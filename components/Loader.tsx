"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // hide loader after page fully mounts
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 600); // same as fade-out time

    return () => clearTimeout(timeout);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader">
      <div className="loader-inner">
        <div className="circle"></div>
      </div>
    </div>
  );
}
