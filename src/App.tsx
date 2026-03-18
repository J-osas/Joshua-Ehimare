/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Work } from './pages/Work';
import { CaseStudy } from './pages/CaseStudy';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { ScrollToTop } from './components/ScrollToTop';
import Studio from './pages/Studio';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Studio Route - Outside Layout */}
        <Route path="/studio/*" element={<Studio />} />

        {/* Portfolio Routes - Inside Layout */}
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/work/:slug" element={<CaseStudy />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
