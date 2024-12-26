import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-primary text-white">
    <h1 className="text-6xl font-bold mb-4">404</h1>
    <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
    <Link to="/" className="text-lg font-medium underline">
      Go Back to Homepage
    </Link>
  </div>
);

export default NotFoundPage;
