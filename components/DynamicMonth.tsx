"use client";

import { useEffect, useState } from "react";

export default function DynamicMonth() {
  const [month, setMonth] = useState<string>("");

  useEffect(() => {
    const now = new Date();
    const monthName = now.toLocaleString("en-US", { month: "long" });
    setMonth(monthName);
  }, []);

  return (
    <span className="dynamic-month animate-pulse text-orange-400">
      {month}
    </span>
  );
}
