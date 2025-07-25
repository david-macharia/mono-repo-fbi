// pages/HomePage.tsx
import React from "react";
import { SearchProvider } from "../context/SearchContext";
import SearchLayout from "./SearchLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";

const HomePage = () => {
  return (
    <SearchProvider>
      <Router>
        <Header />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<SearchLayout />} />
          </Routes>
        </main>
      </Router>
    </SearchProvider>
  );
};

export default HomePage;
