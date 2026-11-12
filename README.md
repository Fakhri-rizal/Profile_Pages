# Fakhri Rizal — Professional Portfolio & Engineering Profile

[![Profile](https://img.shields.io/badge/Role-Cybersecurity%20Engineering%20%7C%20SecOps%20%7C%20Backend-0284c7?style=for-the-badge)](https://fakhririzal.github.io/)
[![Institution](https://img.shields.io/badge/Institution-Politeknik%20Negeri%20Batam-059669?style=for-the-badge)](https://www.polibatam.ac.id/)
[![Achievement](https://img.shields.io/badge/Achievement-1st%20Place%20PBL%20EXPO%202026-d97706?style=for-the-badge)](#-prestasi-utama--proyek-sawit)
[![Architecture](https://img.shields.io/badge/Architecture-Pure%20Static%20%7C%20Zero%20Vulnerability-38bdf8?style=for-the-badge)](#-arsitektur-dan-keamanan-web)

Selamat datang di repositori web profil profesional **Fakhri Rizal**. Web ini dirancang dengan pendekatan modern, performa tinggi, dan arsitektur statis yang berfokus pada pertahanan keamanan siber (*Zero Attack Surface*). Dilengkapi dengan antarmuka dwibahasa (**Bahasa Indonesia & English**), integrasi formulir kontak multi-kanal langsung ke WhatsApp dan Email pribadi, serta dokumentasi rekayasa sistem keamanan.

---

## 👨‍💻 Profil Singkat (Executive Summary)

**Fakhri Rizal** adalah mahasiswa Rekayasa Keamanan Siber (*Cybersecurity Engineering*) di **Politeknik Negeri Batam** (2024–2028). Berpengalaman praktis dalam rekayasa *Intrusion Detection & Prevention System* (IDS/IPS), pemantauan telemetri keamanan terpusat (*SIEM*), pemanfaatan *Machine Learning* untuk deteksi anomali ancaman, serta pengembangan arsitektur backend berprinsip *Zero Trust*.

> *"Mengamankan sistem di setiap lapisan arsitektur — mulai dari telemetri paket jaringan hingga logika aplikasi backend."*

### Kompetensi Inti
- **Keamanan Siber & Jaringan**: Arsitektur Zero Trust, SIEM (Wazuh, ELK Stack), IDS/IPS (Suricata, Snort), User & Entity Behavior Analytics (UEBA), Cyber Threat Management, Network Telemetry & Packet Analysis (Wireshark).
- **Machine Learning for Cybersecurity**: Algoritma Deteksi Anomali Trafik & Payload (Isolation Forest, One-Class SVM, Autoencoder, LSTM/GRU), Feature Engineering, Risk Scoring.
- **Backend & DevOps**: Python (Flask, FastAPI), TypeScript, Linux Administration (Debian/RHEL), Podman / Rootless Containers, Keycloak (OAuth2, OIDC, RBAC), RESTful APIs, Git.

---

## 🏆 Prestasi Utama & Proyek SAWIT

### **SAWIT (Security Analysis Watch Intelligence Threat)**
*Zero Trust Cybersecurity Platform with Multi-Model Machine Learning Anomaly Detection*

- **Pencapaian**: **Juara 1 (1st Place Winner)** — Kategori Networking & Cybersecurity, *6th International PBL EXPO 2026*.
- **Peran**: **Team Lead & Security Architect**.
- **Deskripsi Sistem**: Platform pertahanan siber aktif yang melindungi aplikasi web akademik live dari berbagai serangan digital modern secara waktu nyata (*real-time*).
- **Komponen Arsitektur**:
  1. **Multi-Model Anomaly Detection**: Mengombinasikan *Isolation Forest*, *One-Class SVM*, *Autoencoder*, dan *LSTM/GRU* untuk analisis payload HTTP dan anomali perilaku trafik jaringan.
  2. **UEBA (User & Entity Behavior Analytics)**: Menganalisis deviasi pola autentikasi dan aktivitas sesi pengguna guna mencegah *Account Takeover*.
  3. **Integrasi Ekosistem SOC**: Orkestrasi terpadu antara Wazuh SIEM, sensor Suricata IDS/IPS, manajemen identitas Keycloak (OAuth2/OIDC), respons insiden TheHive, dan intelijen ancaman MISP.

---

## 🎓 Pendidikan & Sertifikasi

### Pendidikan Formal
- **Politeknik Negeri Batam** (2024 – 2028)  
  *Sarjana Terapan (D4) Rekayasa Keamanan Siber (Cybersecurity Engineering)*
- **SMK Negeri 1 Bangkinang** (2021 – 2024)  
  *Teknik Komputer dan Jaringan (TKJ)*

### Sertifikasi & Lisensi
- **1st Place Winner** — Networking & Cybersecurity Category, 6th International PBL EXPO 2026
- **Certified Cybersecurity Educator Professional (CCEP)**
- **Teknik Informasi Sistem Administrasi Jaringan** — Standar Kompetensi Kejuruan
- **Cyber Threat Management** — Manajemen & Respons Insiden Siber
- **Red Hat OpenShift Development I: Introduction to Containers with Podman** — Red Hat

---

## 🌐 Fitur Unggulan Web Profile

1. **Bilingual Switcher (ID & EN)**:
   - Beralih bahasa secara instan tanpa memuat ulang (*reload*) halaman. Pilihan bahasa tersimpan otomatis di `localStorage`.
2. **Formulir Kontak Multi-Kanal (WhatsApp & Email)**:
   - **Kirim via WhatsApp**: Memformat otomatis data pengirim, topik, dan isi pesan ke format chat Markdown WhatsApp dan langsung mengarah ke nomor Anda.
   - **Kirim via Email**: Menggunakan API statis Web3Forms/Formspree sehingga notifikasi pesan pengunjung langsung masuk ke kotak masuk email `fakhririzal710@gmail.com` tanpa server backend sendiri.
3. **Floating WhatsApp Chat Widget**:
   - Widget obrolan mengapung di pojok kanan bawah layar untuk interaksi cepat dan profesional dengan pengunjung/klien.
4. **Dark / Light Mode**:
   - Pengunjung dapat memilih tampilan *Cyber Obsidian Dark* atau *Executive Clean Light*.
5. **Slot Portofolio Siap Pakai**:
   - Sudah disiapkan struktur kartu untuk proyek tambahan yang dapat Anda duplikasi kapan saja.

---

## 📁 Struktur Berkas

```text
profile/
├── index.html         # Struktur semantik HTML5, meta tag security, & konten dwibahasa
├── css/
│   └── style.css      # Desain bertema Cyber SecOps, responsive grid, glassmorphism
├── js/
│   └── main.js        # Logika dwibahasa, integrasi WhatsApp & form email, widget chat
└── README.md          # Dokumentasi teknis & panduan deployment
```

---

## ⚙️ Panduan Konfigurasi (Sebelum Deploy)

Buka berkas [`js/main.js`](js/main.js), lalu sesuaikan konfigurasi pada baris teratas:

```javascript
const CONFIG = {
  // Ganti dengan nomor WhatsApp aktif Anda (format internasional tanpa +, contoh: 6281234567890)
  WHATSAPP_NUMBER: '6281234567890', 
  
  // Email tujuan penerimaan pesan formulir kontak
  EMAIL_ADDRESS: 'fakhririzal710@gmail.com',
  
  // Access Key gratis Web3Forms (buka https://web3forms.com/ dan masukkan email Anda)
  WEB3FORMS_ACCESS_KEY: 'YOUR_ACCESS_KEY_HERE' 
};
```

> **Catatan Email**: Jika `WEB3FORMS_ACCESS_KEY` belum diisi, tombol *Kirim via Email* akan otomatis membuka aplikasi email (*mailto*) pengirim dengan subjek dan format pesan yang sudah terisi rapi (*graceful fallback*).

---

## 🚀 Panduan Step-by-Step Deploy ke Vercel

Vercel adalah platform hosting cloud modern yang cepat, andal, gratis selamanya untuk proyek personal, dan otomatis dilengkapi enkripsi **SSL/HTTPS**.

### Langkah 1: Buat Repository Baru di GitHub
1. Buka [github.com](https://github.com/) dan pastikan Anda sudah masuk ke akun Anda.
2. Klik tombol **New** (atau klik ikon **+** di pojok kanan atas) untuk membuat repository baru.
3. Beri nama repository, misalnya: `profile` atau `fakhri-portfolio`.
4. Pilih opsi **Public**, lalu klik tombol hijau **Create repository**.

---

### Langkah 2: Upload Project ke GitHub

Buka terminal (**PowerShell** atau **Git Bash**) di folder project Anda (`c:\Users\aei\Documents\profile`), lalu jalankan perintah berikut secara berurutan:

```bash
git init
git add .
git commit -m "Initial commit: professional profile website"
git branch -M main
git remote add origin https://github.com/USERNAME-ANDA/NAMA-REPO-ANDA.git
git push -u origin main
```
> *(Pastikan mengganti `USERNAME-ANDA` dan `NAMA-REPO-ANDA` sesuai dengan URL repository yang baru Anda buat di GitHub).*

#### 💡 Alternatif Tanpa Perintah Terminal:
Jika Anda tidak ingin menggunakan terminal Git:
1. Pada halaman repository baru di GitHub, klik tautan **"uploading an existing file"**.
2. *Drag & drop* seluruh file `index.html`, folder `css`, folder `js`, dan `README.md` ke browser.
3. Klik tombol hijau **Commit changes**.

---

### Langkah 3: Hubungkan Repository ke Vercel
1. Buka [vercel.com](https://vercel.com/) dan lakukan login (pilih opsi **Continue with GitHub**).
2. Setelah masuk ke Dashboard Vercel, klik tombol **"Add New..."** > pilih **Project**.
3. Di daftar repository GitHub yang terdeteksi, cari repository `profile` Anda, lalu klik tombol **Import**.

---

### Langkah 4: Konfigurasi & Deploy
1. Pada halaman konfigurasi project di Vercel:
   - **Project Name**: Masukkan nama proyek (contoh: `fakhririzal-profile`). Nama ini akan menjadi alamat web Anda: `https://fakhririzal-profile.vercel.app`.
   - **Framework Preset**: Pilih **Other** (karena website ini adalah web statis murni HTML/CSS/JS).
   - **Root Directory**: Biarkan `./`.
   - **Build and Output Settings**: Biarkan kosong/default (tidak membutuhkan proses kompilasi/build).
2. Klik tombol biru **Deploy**.
3. Tunggu proses deploy selama 10–20 detik hingga muncul ucapan selamat (*Congratulations!*).
4. Klik tautan domain yang diberikan Vercel untuk membuka web profil Anda yang sudah resmi online di seluruh dunia!

---

### 🔄 Pembaruan Otomatis (Auto CI/CD)
Kapan pun Anda mengedit atau menambahkan proyek baru di komputer, cukup jalankan:
```bash
git add .
git commit -m "Update portfolio projects"
git push
```
Vercel akan mendeteksi perubahan tersebut dan secara otomatis me-redeploy web Anda dalam hitungan detik tanpa perlu melakukan apa pun di dashboard Vercel.

---

## 🔒 Arsitektur dan Keamanan Web

Sebagai portofolio praktisi keamanan siber, web ini dirancang dengan standar keamanan tinggi:
- **Zero Attack Surface**: Tidak menggunakan database SQL, interpreter PHP, atau runtime server-side dinamis yang rentan terhadap SQLi, Local File Inclusion (LFI), maupun Remote Code Execution (RCE).
- **Security Headers**: Dilengkapi dengan meta tag keamanan `X-Content-Type-Options: nosniff` dan `Referrer-Policy: strict-origin-when-cross-origin`.
- **Supply-Chain Defense**: Semua ikon disematkan sebagai SVG inline lokal yang aman, menghilangkan risiko modifikasi skrip pihak ketiga dari CDN luar.

---

## 📬 Kontak & Tautan Profesional

- **Email**: [fakhririzal710@gmail.com](mailto:fakhririzal710@gmail.com)
- **LinkedIn**: [linkedin.com/in/fakhri-rizal-96195a341](https://www.linkedin.com/in/fakhri-rizal-96195a341)
- **Lokasi**: Batam, Kepulauan Riau, Indonesia
- **Institusi**: Politeknik Negeri Batam
