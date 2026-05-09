import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import BudayaList from "./pages/budaya/BudayaList";
import BudayaDetail from "./pages/budaya/BudayaDetail";
import ArtikelBudaya from "./pages/budaya/ArtikelBudaya";

function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav style={navStyles.nav}>
      <div style={navStyles.brand}>🏛️ Budaya Yogya</div>
      <div style={navStyles.links}>
        <Link
          to="/budaya"
          style={{
            ...navStyles.link,
            ...(isActive("/budaya") ? navStyles.linkActive : {}),
          }}
        >
          📜 Daftar Budaya
        </Link>
        <Link
          to="/artikel"
          style={{
            ...navStyles.link,
            ...(isActive("/artikel") ? navStyles.linkActive : {}),
          }}
        >
          📰 Artikel
        </Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BudayaList />} />
        <Route path="/budaya" element={<BudayaList />} />
        <Route path="/budaya/:id" element={<BudayaDetail />} />
        <Route path="/artikel" element={<ArtikelBudaya />} />
      </Routes>
    </BrowserRouter>
  );
}

const navStyles: Record<string, React.CSSProperties> = {
  nav: {
    background: "linear-gradient(135deg, #78350f, #92400e)",
    padding: "14px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  },
  brand: { color: "white", fontSize: "1.3rem", fontWeight: "bold" },
  links: { display: "flex", gap: "8px" },
  link: {
    color: "rgba(255,255,255,0.8)",
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    fontSize: "0.9rem",
    fontWeight: "600",
  },
  linkActive: { background: "rgba(255,255,255,0.2)", color: "white" },
};

export default App;
