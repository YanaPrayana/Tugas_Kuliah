export interface OpenTrip {
  id: string;
  nama: string;
  kategori:
    | "alam"
    | "budaya"
    | "pantai"
    | "kuliner"
    | "city-tour";

  deskripsiSingkat: string;
  deskripsiLengkap: string;

  gambar: string;

  lokasi: string;

  durasi: string;

  harga: number;

  kuota: number;

  kuotaTersisa: number;

  tanggalKeberangkatan: string;

  rating: number;

  fasilitas: string[];

  tags: string[];
}

export const dataOpenTrip: OpenTrip[] = [
  {
    id: "1",

    nama: "Open Trip Borobudur Sunrise",

    kategori: "budaya",

    deskripsiSingkat:
      "Nikmati keindahan sunrise di Candi Borobudur bersama traveler lain.",

    deskripsiLengkap:
      "Open Trip Borobudur Sunrise menawarkan pengalaman menikmati matahari terbit di salah satu keajaiban dunia, Candi Borobudur. Paket sudah termasuk transportasi, tiket masuk, guide lokal, dan dokumentasi perjalanan.",

    gambar:
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200&auto=format&fit=crop",

    lokasi: "Borobudur, Magelang",

    durasi: "1 Hari",

    harga: 450000,

    kuota: 16,

    kuotaTersisa: 8,

    tanggalKeberangkatan: "2026-05-25",

    rating: 4.9,

    fasilitas: [
      "Transportasi",
      "Tiket Masuk",
      "Guide",
      "Snack",
      "Dokumentasi",
    ],

    tags: [
      "sunrise",
      "candi",
      "UNESCO",
      "budaya",
      "favorit",
    ],
  },

  {
    id: "2",

    nama: "Open Trip Prambanan Heritage",

    kategori: "budaya",

    deskripsiSingkat:
      "Eksplorasi kemegahan Candi Prambanan dan sejarah kerajaan Jawa.",

    deskripsiLengkap:
      "Paket wisata budaya ke Candi Prambanan dengan pengalaman tur sejarah, pertunjukan budaya, dan city tour kawasan heritage Yogyakarta.",

    gambar:
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1200&auto=format&fit=crop",

    lokasi: "Prambanan, Sleman",

    durasi: "1 Hari",

    harga: 400000,

    kuota: 20,

    kuotaTersisa: 10,

    tanggalKeberangkatan: "2026-05-24",

    rating: 4.8,

    fasilitas: [
      "Bus Pariwisata",
      "Guide",
      "Tiket Wisata",
      "Makan Siang",
    ],

    tags: [
      "heritage",
      "candi",
      "budaya",
      "sejarah",
    ],
  },

  {
    id: "3",

    nama: "Open Trip Pantai Selatan",

    kategori: "pantai",

    deskripsiSingkat:
      "Jelajahi pantai eksotis Gunungkidul dengan panorama memukau.",

    deskripsiLengkap:
      "Trip wisata pantai ke kawasan Gunungkidul dengan destinasi Pantai Indrayanti, Pantai Drini, dan Pantai Timang. Cocok untuk healing dan fotografi.",

    gambar:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",

    lokasi: "Gunungkidul, Yogyakarta",

    durasi: "2 Hari 1 Malam",

    harga: 750000,

    kuota: 12,

    kuotaTersisa: 6,

    tanggalKeberangkatan: "2026-05-26",

    rating: 4.9,

    fasilitas: [
      "Hotel",
      "Transportasi",
      "Makan",
      "Tour Guide",
      "Dokumentasi",
    ],

    tags: [
      "pantai",
      "healing",
      "nature",
      "sunset",
    ],
  },

  {
    id: "4",

    nama: "Open Trip Lava Tour Merapi",

    kategori: "alam",

    deskripsiSingkat:
      "Petualangan jeep di kawasan Merapi dengan pengalaman seru.",

    deskripsiLengkap:
      "Nikmati sensasi jeep adventure menyusuri kawasan lereng Gunung Merapi, museum sisa erupsi, bunker Kaliadem, dan spot sunrise terbaik.",

    gambar:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",

    lokasi: "Kaliurang, Sleman",

    durasi: "1 Hari",

    harga: 350000,

    kuota: 18,

    kuotaTersisa: 9,

    tanggalKeberangkatan: "2026-05-28",

    rating: 4.7,

    fasilitas: [
      "Jeep Tour",
      "Guide",
      "Tiket Wisata",
      "Snack",
    ],

    tags: [
      "merapi",
      "jeep",
      "petualangan",
      "alam",
    ],
  },

  {
    id: "5",

    nama: "Open Trip Malioboro Night Tour",

    kategori: "city-tour",

    deskripsiSingkat:
      "Menikmati suasana malam Malioboro dan wisata kota Yogyakarta.",

    deskripsiLengkap:
      "City tour malam dengan destinasi Malioboro, Titik Nol Kilometer, Alun-Alun Kidul, dan wisata kuliner khas Jogja.",

   gambar: "https://images.unsplash.com/photo-1698245674677-6267b312d29d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    lokasi: "Kota Yogyakarta",

    durasi: "1 Hari",

    harga: 250000,

    kuota: 25,

    kuotaTersisa: 14,

    tanggalKeberangkatan: "2026-05-30",

    rating: 4.6,

    fasilitas: [
      "Transportasi",
      "Guide",
      "Kuliner",
      "Dokumentasi",
    ],

    tags: [
      "malioboro",
      "citylight",
      "kuliner",
      "malam",
    ],
  },

  {
    id: "6",

    nama: "Open Trip Wisata Kuliner Jogja",

    kategori: "kuliner",

    deskripsiSingkat:
      "Menjelajahi kuliner legendaris khas Yogyakarta.",

    deskripsiLengkap:
      "Trip wisata kuliner dengan destinasi Gudeg Wijilan, Sate Klathak, Bakpia Pathok, dan kopi khas Jogja bersama local guide.",

    gambar:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",

    lokasi: "Yogyakarta",

    durasi: "1 Hari",

    harga: 300000,

    kuota: 20,

    kuotaTersisa: 11,

    tanggalKeberangkatan: "2026-06-01",

    rating: 4.8,

    fasilitas: [
      "Transportasi",
      "Tour Kuliner",
      "Guide",
      "Snack",
    ],

    tags: [
      "kuliner",
      "gudeg",
      "sate",
      "bakpia",
    ],
  },
];