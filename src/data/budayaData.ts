export interface Budaya {
  id: string;
  nama: string;
  kategori: "kesenian" | "kuliner" | "tradisi" | "sejarah" | "bangunan";
  deskripsiSingkat: string;
  deskripsiLengkap: string;
  gambar: string;
  lokasi: string;
  tahunBerdiri?: string;
  tags: string[];
}

export interface Artikel {
  id: string;
  judul: string;
  penulis: string;
  tanggal: string;
  isi: string;
  gambar: string;
  kategori: string;
}

export const dataBudaya: Budaya[] = [
  {
    id: "1",
    nama: "Wayang Kulit",
    kategori: "kesenian",
    deskripsiSingkat:
      "Seni pertunjukan bayangan boneka kulit yang telah ada sejak abad ke-10.",
    deskripsiLengkap:
      "Wayang Kulit adalah salah satu warisan budaya dunia yang diakui UNESCO. Pertunjukan ini menggunakan boneka yang terbuat dari kulit kerbau dan dimainkan oleh seorang dalang yang juga bertugas sebagai narator dan pengisi suara semua karakter. Kisah yang dibawakan biasanya bersumber dari epos Mahabharata dan Ramayana.",
    gambar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/ShadowPuppet.jpg/640px-ShadowPuppet.jpg",
    lokasi: "Seluruh Yogyakarta",
    tahunBerdiri: "Abad ke-10",
    tags: ["UNESCO", "seni", "tradisional", "pertunjukan"],
  },
  {
    id: "2",
    nama: "Kraton Yogyakarta",
    kategori: "bangunan",
    deskripsiSingkat:
      "Istana resmi Kesultanan Ngayogyakarta Hadiningrat yang dibangun tahun 1755.",
    deskripsiLengkap:
      "Kraton Yogyakarta atau Keraton Ngayogyakarta Hadiningrat adalah istana resmi Kesultanan Ngayogyakarta Hadiningrat yang kini berlokasi di Kota Yogyakarta. Istana ini dibangun oleh Sri Sultan Hamengku Buwono I pada tahun 1755. Kompleks istana ini mencakup museum, tempat tinggal sultan, dan berbagai bangunan bersejarah lainnya.",
    gambar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Kraton_Yogyakarta.jpg/640px-Kraton_Yogyakarta.jpg",
    lokasi: "Jl. Raton No.1, Yogyakarta",
    tahunBerdiri: "1755",
    tags: ["istana", "sejarah", "sultan", "wisata"],
  },
  {
    id: "3",
    nama: "Batik Yogyakarta",
    kategori: "kesenian",
    deskripsiSingkat:
      "Kerajinan batik khas Yogyakarta dengan motif parang, kawung, dan truntum.",
    deskripsiLengkap:
      "Batik Yogyakarta memiliki ciri khas tersendiri dibandingkan batik daerah lain. Motif-motif seperti Parang, Kawung, dan Truntum merupakan motif asli Yogyakarta yang memiliki makna filosofis mendalam. Batik dibuat dengan teknik tulis tangan menggunakan malam (lilin) yang ditorehkan pada kain dengan alat bernama canting.",
    gambar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Batik_indonesia.jpg/640px-Batik_indonesia.jpg",
    lokasi: "Prawirotaman & Malioboro",
    tahunBerdiri: "Abad ke-17",
    tags: ["UNESCO", "kain", "kerajinan", "motif"],
  },
  {
    id: "4",
    nama: "Sekaten",
    kategori: "tradisi",
    deskripsiSingkat:
      "Perayaan tradisional memperingati Maulid Nabi Muhammad SAW di Yogyakarta.",
    deskripsiLengkap:
      "Sekaten adalah upacara tradisional yang diselenggarakan setiap tahun untuk memperingati Maulid Nabi Muhammad SAW. Acara ini berlangsung selama tujuh hari di alun-alun utara Kraton Yogyakarta. Puncak acara adalah Grebeg Maulud, yaitu arak-arakan gunungan berisi hasil bumi yang kemudian diperebutkan oleh masyarakat.",
    gambar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Grebeg_Maulud.jpg/640px-Grebeg_Maulud.jpg",
    lokasi: "Alun-alun Utara Yogyakarta",
    tags: ["festival", "Islam", "tradisi", "tahunan"],
  },
  {
    id: "5",
    nama: "Gudeg",
    kategori: "kuliner",
    deskripsiSingkat:
      "Masakan khas Yogyakarta berbahan dasar nangka muda yang dimasak dengan santan.",
    deskripsiLengkap:
      "Gudeg adalah masakan khas Yogyakarta yang terbuat dari nangka muda (gori) yang dimasak dengan santan dan berbagai bumbu selama berjam-jam hingga menghasilkan warna coklat kemerahan yang khas. Gudeg biasanya disajikan dengan nasi, ayam, telur pindang, tahu, tempe, dan sambal krecek.",
    gambar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Gudeg_Yogyakarta.jpg/640px-Gudeg_Yogyakarta.jpg",
    lokasi: "Wijilan & seluruh Yogyakarta",
    tags: ["makanan", "khas", "nangka", "tradisional"],
  },
  {
    id: "6",
    nama: "Candi Prambanan",
    kategori: "sejarah",
    deskripsiSingkat:
      "Kompleks candi Hindu terbesar di Indonesia, dibangun pada abad ke-9.",
    deskripsiLengkap:
      "Candi Prambanan adalah kompleks candi Hindu terbesar di Indonesia dan salah satu yang terbesar di Asia Tenggara. Dibangun pada abad ke-9 oleh Rakai Pikatan dari Dinasti Mataram Kuno, candi ini dipersembahkan untuk Trimurti — Brahma (pencipta), Wisnu (pemelihara), dan Siwa (pemusnah). Candi Prambanan telah ditetapkan sebagai Situs Warisan Dunia UNESCO.",
    gambar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Prambanan_temple_%28edit%29.jpg/640px-Prambanan_temple_%28edit%29.jpg",
    lokasi: "Sleman, Yogyakarta",
    tahunBerdiri: "Abad ke-9",
    tags: ["UNESCO", "candi", "Hindu", "sejarah"],
  },
];

export const dataArtikel: Artikel[] = [
  {
    id: "1",
    judul: "Mengenal Filosofi Batik Yogyakarta",
    penulis: "Aditya Pratama",
    tanggal: "2024-01-15",
    isi: "Batik bukan sekadar kain bermotif indah. Di balik setiap goresan canting, tersimpan makna filosofi yang mendalam tentang kehidupan manusia Jawa...",
    gambar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Batik_indonesia.jpg/640px-Batik_indonesia.jpg",
    kategori: "kesenian",
  },
  {
    id: "2",
    judul: "Sejarah Panjang Kraton Yogyakarta",
    penulis: "Aditya Pratama",
    tanggal: "2024-02-10",
    isi: "Berdiri sejak tahun 1755, Kraton Yogyakarta telah menjadi pusat kebudayaan Jawa selama berabad-abad. Dari sinilah lahir berbagai tradisi yang masih hidup hingga kini...",
    gambar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Kraton_Yogyakarta.jpg/640px-Kraton_Yogyakarta.jpg",
    kategori: "sejarah",
  },
  {
    id: "3",
    judul: "Wayang Kulit: Warisan Dunia dari Yogyakarta",
    penulis: "Aditya Pratama",
    tanggal: "2024-03-05",
    isi: "UNESCO mengakui Wayang Kulit sebagai Masterpiece of the Oral and Intangible Heritage of Humanity. Apa yang membuat seni ini begitu istimewa?...",
    gambar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/ShadowPuppet.jpg/640px-ShadowPuppet.jpg",
    kategori: "kesenian",
  },
];
