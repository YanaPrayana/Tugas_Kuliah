import React from "react";
import { useNavigate } from "react-router-dom";
import { dataOpenTrip } from "../../data/openTripData";

import "../../styles/open-trip.css";

export default function OpenTrip() {
  const navigate = useNavigate();

  return (
    <section className="open-trip-page">
      {/* HERO */}
      <div className="open-trip-hero">
        <div className="hero-left">
          <h1>Open Trip</h1>

          <p>
            Temukan pengalaman terbaik menjelajahi
            Yogyakarta bersama travelers lain dalam
            perjalanan yang berkesan.
          </p>
        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200&auto=format&fit=crop"
            alt="Borobudur"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="open-trip-content">
        {/* FILTER */}
        <aside className="filter-box">
          <div className="filter-header">
            <h3>Filter Pencarian</h3>

            <button>Reset Filter</button>
          </div>

          <div className="filter-group">
            <label>Cari Destinasi</label>

            <input
              type="text"
              placeholder="Cari destinasi atau paket..."
            />
          </div>

          <div className="filter-group">
            <label>Tanggal Keberangkatan</label>

            <input type="date" />
          </div>

          <div className="filter-group">
            <label>Durasi Trip</label>

            <div className="duration-buttons">
              <button className="active">
                Semua
              </button>

              <button>1 Hari</button>

              <button>2 Hari</button>

              <button>3 Hari+</button>
            </div>
          </div>

          <div className="filter-group">
            <label>Kategori Trip</label>

            <div className="checkbox-group">
              <label>
                <input type="checkbox" />
                Alam & Petualangan
              </label>

              <label>
                <input type="checkbox" />
                Budaya & Sejarah
              </label>

              <label>
                <input type="checkbox" />
                Pantai
              </label>

              <label>
                <input type="checkbox" />
                Kuliner
              </label>

              <label>
                <input type="checkbox" />
                City Tour
              </label>
            </div>
          </div>

          <div className="filter-group">
            <label>Harga per Orang</label>

            <input type="range" />
          </div>

          <button className="btn-filter">
            Terapkan Filter
          </button>
        </aside>

        {/* LIST TRIP */}
        <div className="trip-list-container">
          <div className="trip-list-header">
            <p>
              Menampilkan{" "}
              {dataOpenTrip.length} open trip
            </p>

            <select>
              <option>
                Tanggal Terdekat
              </option>

              <option>
                Harga Termurah
              </option>

              <option>
                Rating Tertinggi
              </option>
            </select>
          </div>

          <div className="trip-list">
            {dataOpenTrip.map((trip) => (
              <div
                className="trip-card"
                key={trip.id}
              >
                {/* IMAGE */}
                <div className="trip-image">
                  <img
                    src={trip.gambar}
                    alt={trip.nama}
                  />

                  <span className="trip-badge">
                    Paling Populer
                  </span>
                </div>

                {/* CONTENT */}
                <div className="trip-content">
                  <h2>{trip.nama}</h2>

                  <div className="trip-meta">
                    <span>
                      🕒 {trip.durasi}
                    </span>

                    <span>
                      📍 {trip.lokasi}
                    </span>

                    <span>
                      🏷️ {trip.kategori}
                    </span>
                  </div>

                  <p className="trip-desc">
                    {trip.deskripsiSingkat}
                  </p>

                  <div className="trip-date">
                    📅 Keberangkatan:
                    {trip.tanggalKeberangkatan}
                  </div>
                </div>

                {/* PRICE */}
                <div className="trip-price">
                  <small>Mulai dari</small>

                  <h3>
                    Rp{" "}
                    {trip.harga.toLocaleString(
                      "id-ID"
                    )}
                  </h3>

                  <p>/orang</p>

                  <div className="kuota">
                    <span>
                      {trip.kuotaTersisa}
                    </span>
                    / {trip.kuota} seat
                  </div>

                  <button
                    onClick={() =>
                      navigate(
                        `/open-trip/${trip.id}`
                      )
                    }
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}