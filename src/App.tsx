import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { SkipLink } from '@/components/layout/SkipLink';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/layout/BackToTop';
import { PageTransition } from '@/components/layout/PageTransition';
import { Home } from '@/pages/Home';
import { Blog } from '@/pages/Blog';
import { ProjectDetail } from '@/pages/ProjectDetail';
import { StyleGuide } from '@/pages/StyleGuide';
import { NotFound } from '@/pages/NotFound';

/**
 * Route table plus the chrome every page shares.
 * Keeping the navbar and footer here means they are never remounted between
 * pages, so the theme toggle and mobile menu keep their state.
 */
export default function App() {
  const location = useLocation();

  return (
    <>
      <SkipLink />
      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/projects/:slug"
            element={
              <PageTransition>
                <ProjectDetail />
              </PageTransition>
            }
          />
          <Route
            path="/blog"
            element={
              <PageTransition>
                <Blog />
              </PageTransition>
            }
          />
          {/* Internal reference page for the design system. Safe to delete before launch. */}
          <Route
            path="/styleguide"
            element={
              <PageTransition>
                <StyleGuide />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
      <BackToTop />
    </>
  );
}
