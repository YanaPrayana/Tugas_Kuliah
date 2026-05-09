import React, { useEffect } from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import { dataOpenTrip } from "../../data/openTripData";

import "../../styles/open-trip-detail.css";

export default function OpenTripDetail() {
  const { id } = useParams();

  const navigate = useNavigate();

  const trip = dataOpenTrip.find(
    (t) => t.id === id
  );

  if (!trip) {
    return (
      <div className="trip-not-found">
        <p className="emoji">😢</p>

        <h2>
          Open Trip tidak ditemukan
        </h2>

        <button
          onClick={() =>
            navigate("/open-trip")
          }
        >
          ← Kembali ke Open Trip
        </button>
      </div>
    );
  }

  return (
    <section className="detail-page">
      {/* HERO */}
      <div className="detail-hero">
        <img
          src={trip.gambar}
          alt={trip.nama}
          className="detail-hero-image"
        />

        <div className="detail-overlay">
          <span className="trip-category">
            {trip.kategori}
          </span>

          <h1>{trip.nama}</h1>

          <p>
            {trip.deskripsiSingkat}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="detail-container">
        {/* LEFT */}
        <div className="detail-left">
          <div className="detail-card">
            <h2>Tentang Trip</h2>

            <p>
              {trip.deskripsiLengkap}
            </p>
          </div>

          <div className="detail-card">
            <h2>Fasilitas</h2>

            <div className="fasilitas-list">
              {trip.fasilitas.map(
                (fasilitas, index) => (
                  <div
                    className="fasilitas-item"
                    key={index}
                  >
                    ✓ {fasilitas}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="detail-card">
            <h2>Tags</h2>

            <div className="tags">
              {trip.tags.map(
                (tag, index) => (
                  <span
                    className="tag"
                    key={index}
                  >
                    #{tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="detail-right">
          <div className="booking-card">
            <h3>Informasi Trip</h3>

            <div className="info-item">
              <span>📍 Lokasi</span>

              <p>{trip.lokasi}</p>
            </div>

            <div className="info-item">
              <span>🕒 Durasi</span>

              <p>{trip.durasi}</p>
            </div>

            <div className="info-item">
              <span>
                📅 Keberangkatan
              </span>

              <p>
                {trip.tanggalKeberangkatan}
              </p>
            </div>

            <div className="info-item">
              <span>⭐ Rating</span>

              <p>{trip.rating}/5</p>
            </div>

            <div className="info-item">
              <span>
                👥 Kuota Tersisa
              </span>

              <p>
                {trip.kuotaTersisa} /{" "}
                {trip.kuota} seat
              </p>
            </div>

            <div className="price-box">
              <small>Mulai dari</small>

              <h2>
                Rp{" "}
                {trip.harga.toLocaleString(
                  "id-ID"
                )}
              </h2>

              <p>/orang</p>
            </div>

            <button className="btn-book-now" onClick={() => navigate(`/open-trip/booking/${trip.id}`)}>
              Booking Sekarang
            </button>

            <button
              className="btn-back"
              onClick={() =>
                navigate("/open-trip")
              }
            >
              ← Kembali
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}