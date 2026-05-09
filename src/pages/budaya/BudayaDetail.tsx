import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dataBudaya } from "../../data/budayaData";

export default function BudayaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const budaya = dataBudaya.find((b) => b.id === id);

  if (!budaya)
    return (
      <div style={{ textAlign: "center", padding: "80px" }}>
        <p style={{ fontSize: "3rem" }}>😢</p>
        <h2>Budaya tidak ditemukan</h2>
        <button onClick={() => navigate("/budaya")} style={styles.btnKembali}>
          ← Kembali
        </button>
      </div>
    );

  const lainnya = dataBudaya
    .filter((b) => b.id !== id && b.kategori === budaya.kategori)
    .slice(0, 3);

  return (
    <div style={styles.page}>
      {/* HEADER GAMBAR */}
      <div style={styles.heroWrap}>
        <img
          src={budaya.gambar}
          alt={budaya.nama}
          style={styles.heroImg}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/1200x400?text=Budaya+Yogyakarta";
          }}
        />
        <div style={styles.heroOverlay}>
          <button onClick={() => navigate("/budaya")} style={styles.backBtn}>
            ← Kembali
          </button>
          <h1 style={styles.heroTitle}>{budaya.nama}</h1>
          <span style={styles.heroBadge}>{budaya.kategori}</span>
        </div>
      </div>

      <div style={styles.container}>
        <div style={styles.layout}>
          {/* KONTEN UTAMA */}
          <div style={styles.main}>
            <div style={styles.card}>
              <h2 style={styles.sectionTitle}>📖 Tentang {budaya.nama}</h2>
              <p style={styles.deskripsi}>{budaya.deskripsiLengkap}</p>
            </div>

            <div style={styles.card}>
              <h2 style={styles.sectionTitle}>🏷️ Tags</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {budaya.tags.map((tag) => (
                  <span key={tag} style={styles.tag}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* BUDAYA LAINNYA */}
            {lainnya.length > 0 && (
              <div style={styles.card}>
                <h2 style={styles.sectionTitle}>🔗 Budaya Sejenis</h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: "16px",
                  }}
                >
                  {lainnya.map((b) => (
                    <div
                      key={b.id}
                      style={styles.miniCard}
                      onClick={() => navigate(`/budaya/${b.id}`)}
                    >
                      <img
                        src={b.gambar}
                        alt={b.nama}
                        style={styles.miniImg}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://via.placeholder.com/200x100";
                        }}
                      />
                      <p style={styles.miniTitle}>{b.nama}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <div style={styles.sidebar}>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>ℹ️ Informasi</h3>
              <div style={styles.infoRow}>
                <span style={styles.infoLabel}>📍 Lokasi</span>
                <span style={styles.infoValue}>{budaya.lokasi}</span>
              </div>
              <div style={styles.infoRow}>
                <span style={styles.infoLabel}>🗂️ Kategori</span>
                <span style={styles.infoValue}>{budaya.kategori}</span>
              </div>
              {budaya.tahunBerdiri && (
                <div style={styles.infoRow}>
                  <span style={styles.infoLabel}>📅 Tahun</span>
                  <span style={styles.infoValue}>{budaya.tahunBerdiri}</span>
                </div>
              )}
            </div>

            <button style={styles.btnShare}>🔗 Bagikan</button>
            <button
              style={styles.btnKembali}
              onClick={() => navigate("/budaya")}
            >
              ← Kembali ke Daftar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { background: "#fdf8f0", minHeight: "100vh" },
  heroWrap: { position: "relative", height: "400px", overflow: "hidden" },
  heroImg: { width: "100%", height: "100%", objectFit: "cover" },
  heroOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
    padding: "30px 40px",
  },
  backBtn: {
    background: "rgba(255,255,255,0.2)",
    color: "white",
    border: "1px solid rgba(255,255,255,0.4)",
    padding: "6px 14px",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "12px",
    fontSize: "0.9rem",
  },
  heroTitle: {
    color: "white",
    fontSize: "2.2rem",
    fontWeight: "bold",
    marginBottom: "8px",
    textShadow: "0 2px 6px rgba(0,0,0,0.5)",
  },
  heroBadge: {
    background: "#f59e0b",
    color: "white",
    padding: "4px 14px",
    borderRadius: "50px",
    fontSize: "0.85rem",
    fontWeight: "600",
    textTransform: "capitalize",
  },
  container: { maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" },
  layout: { display: "grid", gridTemplateColumns: "1fr 300px", gap: "30px" },
  main: { display: "flex", flexDirection: "column", gap: "24px" },
  card: {
    background: "white",
    borderRadius: "12px",
    padding: "28px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
  },
  sectionTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#78350f",
    marginBottom: "16px",
    borderBottom: "2px solid #fef3c7",
    paddingBottom: "10px",
  },
  deskripsi: { color: "#44403c", lineHeight: "1.8", fontSize: "1rem" },
  tag: {
    background: "#fef3c7",
    color: "#92400e",
    padding: "4px 12px",
    borderRadius: "6px",
    fontSize: "0.85rem",
  },
  miniCard: {
    cursor: "pointer",
    borderRadius: "8px",
    overflow: "hidden",
    border: "1px solid #e7e5e4",
  },
  miniImg: { width: "100%", height: "100px", objectFit: "cover" },
  miniTitle: {
    padding: "8px",
    fontSize: "0.85rem",
    fontWeight: "600",
    color: "#1c1917",
  },
  sidebar: { display: "flex", flexDirection: "column", gap: "16px" },
  infoCard: {
    background: "white",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
  },
  infoTitle: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#78350f",
    marginBottom: "16px",
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #f5f5f4",
    gap: "8px",
  },
  infoLabel: { fontSize: "0.85rem", color: "#78350f", fontWeight: "600" },
  infoValue: { fontSize: "0.85rem", color: "#44403c", textAlign: "right" },
  btnShare: {
    width: "100%",
    padding: "12px",
    background: "white",
    color: "#92400e",
    border: "2px solid #92400e",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
  btnKembali: {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(135deg, #92400e, #b45309)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
};
