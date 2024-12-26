import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Resume,
} from "./components";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";
import NotFoundPage from "./components/NotFoundPage"; // Import your 404 page

import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toasts

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
     
          <Navbar />
          <Routes>
            {/* Define routes for your pages */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Resume />
                  <About />
                  <Education />
                  <Experience />
                  <Tech />
                  {/* Add an id="projects" to the Works component */}
                  <div id="projects">
                    <Works />
                  </div>
                  <Feedbacks />
                  <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                  </div>
                

                </>
              }
            />
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
          
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
