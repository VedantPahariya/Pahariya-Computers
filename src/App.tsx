import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './components/About';
import Chatbot from './components/Chatbot';
import { ProductPage } from './pages/ProductPage';
import { Login } from './pages/Login';


function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      <Chatbot />
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 TechFix Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </Router>
  );
}

export default App;