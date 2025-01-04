// src/router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Typography from './pages/Typography/Typography';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/header';
import Footer from './components/footer';
import AccordionPage from './pages/Elements/AccordionPage';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <main id="main" className="main" role="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
          {/* Elements */}
          <Route path="/accordion" element={<AccordionPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRouter;
