import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import NotFound from './pages/notfound/NotFound';
import Post from './pages/post/Post';
import Header from './container/Header';
import Footer from './container/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import { Flip, ToastContainer } from 'react-toastify';

function App() {
  return (
    <Layout style={{ background: 'transparent' }}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        draggablePercent={60}
        transition={Flip}
      />
      <Router>
        <Header />
        <Routes>
          <Route exaxt path="/" element={<HomePage />} />
          <Route exaxt path="/about-me" element={<AboutPage />} />
          <Route exaxt path="/contact-me" element={<ContactPage />} />
          <Route exaxt path="/post" element={<Post />}>
            <Route exaxt path="/post/:id" element={<Post />} />
            <Route exaxt path="*" element={<NotFound />} />
          </Route>
          <Route exaxt path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </Layout>
  );
}

export default App;
