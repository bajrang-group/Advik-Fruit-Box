"use client";

import { useState } from "react";

export default function SearchArea() {
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");

  // dummy products (connect to DB later)
  const products = [
    "Strawberry Box",
    "Mixed Fruit Box",
    "Citrus Box",
    "Tropical Pack",
    "Seasonal Fruit Box",
  ];

  const filtered = products.filter((p) =>
    p.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <>
      {/* 🔍 button to open (add inside navbar/menu) */}
      <button
        onClick={() => setOpen(true)}
        className="text-white text-xl cursor-pointer search-bar-icon"
      >
        <i className="fas fa-search"></i>
      </button>

      {/* POPUP */}
      {open && (
        <div className="search-area search-active">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">

                {/* Close button */}
                <span
                  className="close-btn"
                  onClick={() => setOpen(false)}
                >
                  <i className="fas fa-window-close"></i>
                </span>

                <div className="search-bar">
                  <div className="search-bar-tablecell">

                    <h3>Search For:</h3>

                    {/* Input */}
                    <input
                      type="text"
                      placeholder="Keywords"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                    />

                    {/* Search Button */}
                    <button type="submit">
                      Search <i className="fas fa-search"></i>
                    </button>

                    {/* Results List */}
                    {keyword && (
                      <div className="mt-3 bg-white p-3 rounded" style={{ color: "black" }}>
                        {filtered.length > 0 ? (
                          filtered.map((item, i) => (
                            <p className="py-1 border-b" key={i}>
                              {item}
                            </p>
                          ))
                        ) : (
                          <p className="text-red-500">No results found.</p>
                        )}
                      </div>
                    )}

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
