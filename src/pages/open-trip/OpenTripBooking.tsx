import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dataOpenTrip } from "../../data/openTripData";
import "../../styles/open-trip-booking.css";

export default function OpenTripBooking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const trip = dataOpenTrip.find((t) => t.id === id);

  const [formData, setFormData] = useState({
    namaLengkap: "",
    email: "",
    nomorWa: "",
    jumlahOrang: 1,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!trip) return <div className="not-found">Trip tidak ditemukan.</div>;

  const totalHarga = trip.harga * formData.jumlahOrang;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // BACKEND SIMULATION (Lihat Penjelasan di bawah)
    const payload = {
      tripId: trip.id,
      tripNama: trip.nama,
      ...formData,
      totalBayar: totalHarga
    };

    console.log("Mengirim data ke Backend:", payload);
    alert("Booking Berhasil! Kami akan menghubungi Anda via WhatsApp.");
    navigate("/open-trip");
  };

  return (
    <section className="booking-page">
      <div className="booking-container">
        <div className="booking-header">
          <h2>Konfirmasi Booking</h2>
          <p>{trip.nama}</p>
        </div>

        <div className="booking-content">
          {/* FORM SECTION */}
          <form className="booking-form-card" onSubmit={handleSubmit}>
            <h3>Data Pemesan</h3>
            <div className="input-group">
              <label>Nama Lengkap</label>
              <input 
                type="text" name="namaLengkap" required 
                placeholder="Masukkan nama sesuai KTP"
                onChange={handleChange} 
              />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input 
                type="email" name="email" required 
                placeholder="contoh@email.com"
                onChange={handleChange} 
              />
            </div>
            <div className="input-group">
              <label>Nomor WhatsApp</label>
              <input 
                type="tel" name="nomorWa" required 
                placeholder="0812xxxx"
                onChange={handleChange} 
              />
            </div>
            <div className="input-group">
              <label>Jumlah Peserta</label>
              <input 
                type="number" name="jumlahOrang" min="1" 
                max={trip.kuotaTersisa} value={formData.jumlahOrang}
                onChange={handleChange} 
              />
            </div>
            <button type="submit" className="btn-confirm-booking">
              Bayar Sekarang
            </button>
          </form>

          {/* SUMMARY SECTION */}
          <div className="booking-summary-card">
            <h3>Ringkasan Pembayaran</h3>
            <div className="summary-item">
              <span>Harga per orang</span>
              <span>Rp {trip.harga.toLocaleString("id-ID")}</span>
            </div>
            <div className="summary-item">
              <span>Jumlah Peserta</span>
              <span>{formData.jumlahOrang} Orang</span>
            </div>
            <hr className="divider" />
            <div className="summary-total">
              <span>Total Bayar</span>
              <span className="total-price">
                Rp {totalHarga.toLocaleString("id-ID")}
              </span>
            </div>
            <div className="booking-note">
              <small>* Pembayaran akan dikonfirmasi secara manual oleh admin setelah Anda melakukan transfer.</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}