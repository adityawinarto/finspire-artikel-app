# 💰 Finspire

> **Financial Inspiration** — Aplikasi mobile edukasi keuangan berbasis konten artikel untuk generasi muda Indonesia.

---

## 📱 Tentang Aplikasi

**Finspire** adalah aplikasi mobile yang dibangun menggunakan **React Native + Expo** yang menyajikan artikel edukatif seputar literasi keuangan. Konten dikelola secara dinamis melalui backend **PocketBase**, memungkinkan artikel baru ditampilkan secara real-time tanpa perlu update aplikasi.

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|---|---|
| 🏠 **Home** | Menampilkan artikel *featured* (carousel otomatis) dan *trending* |
| 🔍 **Search** | Pencarian artikel secara real-time berdasarkan judul |
| 📖 **Detail Artikel** | Halaman baca artikel lengkap dengan konten Markdown |
| 📂 **Kategori** | Filter artikel berdasarkan topik keuangan |
| 🌐 **Web Support** | Dapat dijalankan sebagai aplikasi web via Expo |

### 📂 Kategori Artikel

- 💰 **Menabung Cerdas** — Tips dan strategi menabung yang efektif
- 📈 **Pengenalan Investasi** — Dasar-dasar dunia investasi
- 📊 **Dasar Keuangan** — Literasi keuangan untuk pemula
- 💳 **Kredit & Hutang** — Cara bijak mengelola kredit dan utang

---

## 🛠️ Tech Stack

| Layer | Teknologi |
|---|---|
| **Framework** | [Expo](https://expo.dev) ~53 + React Native 0.79 |
| **Language** | TypeScript |
| **Navigation** | Expo Router v5 (file-based routing) |
| **Styling** | NativeWind v4 (Tailwind CSS for React Native) |
| **Backend / CMS** | [PocketBase](https://pocketbase.io) (hosted on PocketHost) |
| **Icons** | `@expo/vector-icons` (FontAwesome) |
| **Animations** | React Native Animated API + Reanimated |

---

## 🗂️ Struktur Proyek

```
finspire/
├── app/
│   ├── index.tsx              # Splash screen dengan animasi huruf
│   ├── home.tsx               # Halaman utama (featured + trending articles)
│   ├── search.tsx             # Halaman pencarian artikel
│   ├── creditdebt.tsx         # Halaman kategori Kredit & Hutang
│   ├── financialbasic.tsx     # Halaman kategori Dasar Keuangan
│   ├── investment.tsx         # Halaman kategori Investasi
│   ├── smartsaving.tsx        # Halaman kategori Menabung Cerdas
│   ├── article/
│   │   └── [id].tsx           # Detail artikel
│   ├── review/
│   │   └── [id].tsx           # Review artikel
│   ├── footer.tsx             # Komponen navigasi footer
│   ├── _layout.tsx            # Root layout dengan Stack navigator
│   └── lib/
│       └── pocketbase.ts      # Konfigurasi & fungsi API PocketBase
├── assets/
│   └── images/                # Icon dan gambar aplikasi
├── app.json                   # Konfigurasi Expo
├── tailwind.config.js         # Konfigurasi Tailwind/NativeWind
└── package.json
```

---

## 🚀 Cara Menjalankan

### Prasyarat

Pastikan sudah terinstall:
- [Node.js](https://nodejs.org/) (v18 atau lebih baru)
- [Git](https://git-scm.com/)
- [Expo Go](https://expo.dev/go) di smartphone (untuk preview langsung)

### Langkah Instalasi

```bash
# 1. Clone repository
git clone https://github.com/username/finspire.git
cd finspire

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm start
```

### Menjalankan di Platform Tertentu

```bash
# Android
npm run android

# iOS
npm run ios

# Web Browser
npm run web
```

Setelah menjalankan `npm start`, scan QR code menggunakan aplikasi **Expo Go** di smartphone.

---

## 📡 Backend (PocketBase)

Aplikasi ini menggunakan **PocketBase** yang di-host di [pockethost.io](https://pockethost.io) sebagai CMS konten artikel.

### Koleksi Database

| Koleksi | Deskripsi |
|---|---|
| `article` | Konten artikel (title, article, thumbnail, tags) |
| `tags` | Tag/kategori artikel |

### Fungsi API (`app/lib/pocketbase.ts`)

| Fungsi | Deskripsi |
|---|---|
| `getArticles()` | Ambil semua artikel dengan paginasi |
| `getArticleById(id)` | Ambil detail satu artikel |
| `getFeaturedArticles(limit)` | Ambil artikel unggulan secara acak |
| `getTrendingArticles()` | Ambil artikel terbaru (trending) |
| `searchArticles(query)` | Cari artikel berdasarkan keyword |
| `getArticlesByTag(tagId)` | Filter artikel berdasarkan tag |
| `getArticlesByCategory(category)` | Filter artikel berdasarkan kategori |

---

## 📸 Screenshots

> *(Tambahkan screenshot aplikasi di sini)*

---

## 📦 Scripts Tersedia

| Script | Perintah | Deskripsi |
|---|---|---|
| Start | `npm start` | Jalankan Expo dev server |
| Android | `npm run android` | Build & jalankan di Android |
| iOS | `npm run ios` | Build & jalankan di iOS |
| Web | `npm run web` | Jalankan di browser |
| Lint | `npm run lint` | Cek kualitas kode |

---

## 🤝 Kontribusi

1. Fork repository ini
2. Buat branch fitur baru: `git checkout -b feature/nama-fitur`
3. Commit perubahan: `git commit -m 'feat: tambah fitur baru'`
4. Push ke branch: `git push origin feature/nama-fitur`
5. Buat Pull Request

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan **tugas akademik Semester 4**.

---

<div align="center">
  <p>Dibuat dengan ❤️ menggunakan React Native & Expo</p>
</div>
