import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataBudaya, Budaya } from "../../data/budayaData";

const kategoriList = [
  "semua",
  "kesenian",
  "kuliner",
  "tradisi",
  "sejarah",
  "bangunan",
];

const kategoriIcon: Record<string, string> = {
  semua: "🏛️",
  kesenian: "🎭",
  kuliner: "🍛",
  tradisi: "🎪",
  sejarah: "📜",
  bangunan: "🏰",
};

const kategoriWarna: Record<string, string> = {
  kesenian: "#8b5cf6",
  kuliner: "#f59e0b",
  tradisi: "#ec4899",
  sejarah: "#6366f1",
  bangunan: "#14b8a6",
};

export default function BudayaList() {
  const navigate = useNavigate();
  const [aktifKategori, setAktifKategori] = useState("semua");
  const [search, setSearch] = useState("");

  const filtered = dataBudaya.filter((b) => {
    const cocokKategori =
      aktifKategori === "semua" || b.kategori === aktifKategori;
    const cocokSearch =
      b.nama.toLowerCase().includes(search.toLowerCase()) ||
      b.deskripsiSingkat.toLowerCase().includes(search.toLowerCase());
    return cocokKategori && cocokSearch;
  });

  return (
    <div style={styles.page}>
      {/* HERO */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>🏛️ Budaya & Sejarah Yogyakarta</h1>
          <p style={styles.heroSubtitle}>
            Jelajahi kekayaan warisan budaya dan sejarah dari Kota Istimewa
          </p>
          <input
            style={styles.searchInput}
            placeholder="🔍  Cari budaya, tradisi, kuliner..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div style={styles.container}>
        {/* FILTER KATEGORI */}
        <div style={styles.filterWrap}>
          {kategoriList.map((kat) => (
            <button
              key={kat}
              style={{
                ...styles.filterBtn,
                background: aktifKategori === kat ? "#92400e" : "white",
                color: aktifKategori === kat ? "white" : "#92400e",
                borderColor: "#92400e",
              }}
              onClick={() => setAktifKategori(kat)}
            >
              {kategoriIcon[kat]} {kat.charAt(0).toUpperCase() + kat.slice(1)}
            </button>
          ))}
        </div>

        {/* JUMLAH HASIL */}
        <p style={styles.hasilText}>
          Menampilkan <strong>{filtered.length}</strong> budaya
          {aktifKategori !== "semua" && ` dalam kategori "${aktifKategori}"`}
        </p>

        {/* GRID KARTU */}
        {filtered.length === 0 ? (
          <div style={styles.empty}>
            <p style={{ fontSize: "3rem" }}>😢</p>
            <p>Tidak ada hasil untuk pencarian "{search}"</p>
          </div>
        ) : (
          <div style={styles.grid}>
            {filtered.map((budaya) => (
              <div
                key={budaya.id}
                style={styles.card}
                onClick={() => navigate(`/budaya/${budaya.id}`)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div style={styles.cardImgWrap}>
                  <img
                    src={budaya.gambar}
                    alt={budaya.nama}
                    style={styles.cardImg}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/400x200?text=Budaya+Yogyakarta";
                    }}
                  />
                  <span
                    style={{
                      ...styles.badge,
                      background: kategoriWarna[budaya.kategori] || "#888",
                    }}
                  >
                    {kategoriIcon[budaya.kategori]} {budaya.kategori}
                  </span>
                </div>
                <div style={styles.cardBody}>
                  <h3 style={styles.cardTitle}>{budaya.nama}</h3>
                  <p style={styles.cardDesc}>{budaya.deskripsiSingkat}</p>
                  <div style={styles.cardFooter}>
                    <span style={styles.lokasi}>📍 {budaya.lokasi}</span>
                    {budaya.tahunBerdiri && (
                      <span style={styles.tahun}>📅 {budaya.tahunBerdiri}</span>
                    )}
                  </div>
                  <div style={styles.tagsWrap}>
                    {budaya.tags.slice(0, 3).map((tag) => (
                      <span key={tag} style={styles.tag}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <button style={styles.btnDetail}>Lihat Detail →</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { background: "#fdf8f0", minHeight: "100vh" },
  hero: {
    background:
      "linear-gradient(135deg, #78350f 0%, #92400e 40%, #b45309 100%)",
    padding: "80px 20px",
    textAlign: "center",
  },
  heroOverlay: { maxWidth: "700px", margin: "0 auto" },
  heroTitle: {
    color: "white",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "12px",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },
  heroSubtitle: { color: "#fde68a", fontSize: "1.1rem", marginBottom: "28px" },
  searchInput: {
    width: "100%",
    maxWidth: "500px",
    padding: "14px 20px",
    borderRadius: "50px",
    border: "none",
    fontSize: "1rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    outline: "none",
  },
  container: { maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" },
  filterWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "24px",
  },
  filterBtn: {
    padding: "8px 18px",
    borderRadius: "50px",
    border: "2px solid",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "0.88rem",
    transition: "all 0.2s",
  },
  hasilText: { color: "#78350f", marginBottom: "24px", fontSize: "0.95rem" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "white",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "transform 0.25s, box-shadow 0.25s",
  },
  cardImgWrap: { position: "relative", overflow: "hidden", height: "200px" },
  cardImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s",
  },
  badge: {
    position: "absolute",
    top: "12px",
    left: "12px",
    color: "white",
    padding: "4px 12px",
    borderRadius: "50px",
    fontSize: "0.78rem",
    fontWeight: "600",
  },
  cardBody: { padding: "18px" },
  cardTitle: {
    fontSize: "1.15rem",
    fontWeight: "bold",
    color: "#1c1917",
    marginBottom: "8px",
  },
  cardDesc: {
    color: "#57534e",
    fontSize: "0.88rem",
    lineHeight: "1.6",
    marginBottom: "12px",
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    flexWrap: "wrap",
    gap: "4px",
  },
  lokasi: { fontSize: "0.82rem", color: "#78350f" },
  tahun: { fontSize: "0.82rem", color: "#6b7280" },
  tagsWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginBottom: "14px",
  },
  tag: {
    background: "#fef3c7",
    color: "#92400e",
    padding: "2px 8px",
    borderRadius: "4px",
    fontSize: "0.78rem",
  },
  btnDetail: {
    width: "100%",
    padding: "10px",
    background: "linear-gradient(135deg, #92400e, #b45309)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "0.9rem",
  },
  empty: { textAlign: "center", padding: "60px", color: "#78350f" },
};
