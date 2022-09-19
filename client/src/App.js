import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import Header from './container/Header';
import Footer from './container/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';

function App() {
  return (
    <Layout style={{ background: 'transparent' }}>
      <Router>
        <Header />
        <Routes>
          <Route exaxt path="/" element={<HomePage />} />
          <Route exaxt path="/about-me" element={<AboutPage />} />
          <Route exaxt path="/contact-me" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </Layout>
  );
}

export default App;
