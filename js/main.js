/**
 * FAKHRI RIZAL - PORTFOLIO JAVASCRIPT
 * Features:
 * - Bilingual support (English & Indonesian) with persistent local storage
 * - Dual-channel contact dispatcher (Direct to WhatsApp & Direct to Email)
 * - Floating WhatsApp Chat Widget
 * - One-click Email & Info copy
 * - Mobile navigation menu toggle
 * - Smooth scroll & active nav link tracking
 */

// ==========================================
// CONFIGURATION (Easily customize these values)
// ==========================================
const CONFIG = {
  // Replace with your actual WhatsApp phone number with country code (e.g., '6281234567890' for Indonesia)
  // Ganti dengan nomor WhatsApp Anda yang sebenarnya (format internasional tanpa tanda +, contoh: 6281234567890)
  WHATSAPP_NUMBER: '6281378062556', 
  
  // Destination email address
  EMAIL_ADDRESS: 'fakhririzal710@gmail.com',
  
  // Web3Forms Public Access Key (Free instant email service for static sites)
  // Cara dapatkan access key gratis (1 menit): Buka https://web3forms.com lalu masukkan email fakhririzal710@gmail.com
  // Setelah dapat, masukkan key di bawah ini:
  WEB3FORMS_ACCESS_KEY: 'YOUR_ACCESS_KEY_HERE' 
};

// ==========================================
// BILINGUAL TRANSLATION DICTIONARY
// ==========================================
const translations = {
  id: {
    // Nav
    nav_about: "Tentang",
    nav_projects: "Proyek",
    nav_experience: "Pengalaman",
    nav_skills: "Keahlian",
    nav_certifications: "Sertifikasi",
    nav_contact: "Kontak",
    nav_resume: "Unduh CV",
    status_available: "Terbuka untuk Kolaborasi & Proyek",

    // Hero
    hero_badge: "Cybersecurity Engineer & Backend Developer",
    hero_greeting: "Halo, saya",
    hero_name: "Fakhri Rizal",
    hero_tagline: "Mengamankan Sistem dari Telemetri Jaringan hingga Logika Aplikasi.",
    hero_desc: "Mahasiswa Rekayasa Keamanan Siber di Politeknik Negeri Batam (2024–2028). Berpengalaman langsung dalam intrusion detection, security monitoring, machine learning untuk deteksi ancaman, dan pengembangan backend Zero Trust.",
    hero_cta_contact: "Hubungi Saya",
    hero_cta_projects: "Lihat Portofolio",
    hero_card_title: "fakhri_terminal ~ status",
    hero_card_role: "Rekayasa Keamanan Siber",
    hero_meta_institution: "Institusi",
    hero_meta_major: "Program Studi",
    hero_meta_specialty: "Spesialisasi",
    hero_meta_status: "Status",
    hero_meta_status_val: "Aktif Mencari Peluang",

    // Stats
    stat_pbl: "Juara 1 PBL EXPO",
    stat_pbl_desc: "Kategori Networking & Cyber 2026",
    stat_ml: "4+ Model ML",
    stat_ml_desc: "Deteksi Anomali & UEBA",
    stat_sec: "Zero Trust",
    stat_sec_desc: "Arsitektur & Keamanan Berlapis",
    stat_gpa: "D4 Siber",
    stat_gpa_desc: "Politeknik Negeri Batam",

    // About
    about_eyebrow: "01. PROFIL PRIBADI",
    about_title: "Membangun Pertahanan Siber yang Presisi & Adaptif",
    about_p1: "Saya adalah mahasiswa Rekayasa Keamanan Siber di Politeknik Negeri Batam dengan fokus mendalam pada Intrusion Detection & Prevention System (IDS/IPS), Security Information and Event Management (SIEM), serta Machine Learning untuk keamanan siber.",
    about_p2: "Filosofi saya adalah keamanan tidak boleh menjadi pemikiran belakangan, melainkan harus tertanam di setiap lapisan arsitektur: dari transmisi paket jaringan hingga logika kode backend. Melalui platform SAWIT (Security Analysis Watch Intelligence Threat), saya memimpin integrasi deteksi anomali berbasis kecerdasan buatan dengan alat monitoring industri seperti Wazuh, Suricata, dan Keycloak.",
    about_p3: "Saya siap berkontribusi pada proyek keamanan siber dunia nyata, penelitian pertahanan digital, maupun rekayasa backend berstandar enterprise.",

    // Projects
    projects_eyebrow: "02. REKAYASA & PROYEK",
    projects_title: "Proyek Unggulan & Portofolio",
    projects_desc: "Kompilasi proyek sistem keamanan, integrasi SIEM, deteksi anomali machine learning, dan arsitektur backend.",
    
    // SAWIT Flagship
    sawit_badge: "PROYEK UTAMA • JUARA 1 PBL EXPO 2026",
    sawit_title: "SAWIT — Security Analysis Watch Intelligence Threat",
    sawit_subtitle: "Zero Trust Cybersecurity Platform with Multi-Model Machine Learning Anomaly Detection",
    sawit_desc: "Platform keamanan siber berarsitektur Zero Trust yang dirancang untuk memproteksi aplikasi web akademik aktif dari berbagai serangan siber modern secara real-time.",
    sawit_lead: "Peran: Team Lead & Security Architect",
    sawit_f1: "Engine deteksi anomali multi-model ML: Isolation Forest, One-Class SVM, Autoencoder, dan LSTM/GRU untuk menganalisis payload dan anomali perilaku trafik.",
    sawit_f2: "User & Entity Behavior Analytics (UEBA) untuk mendeteksi deviasi pola akses pengguna dan potensi pengambilalihan akun (account takeover).",
    sawit_f3: "Integrasi terpadu ekosistem SOC: Wazuh SIEM, Suricata IDS/IPS, Keycloak IAM, TheHive untuk case management, dan MISP untuk threat intelligence sharing.",
    sawit_result: "Pencapaian: 1st Place Winner - Networking & Cybersecurity Category, 6th International PBL EXPO 2026.",

    // Other Projects
    proj2_title: "Network Telemetry & SIEM Pipeline",
    proj2_desc: "Implementasi pipeline pemantauan trafik jaringan menggunakan Suricata IDS yang mengekstrak log EVE-JSON secara real-time ke Wazuh SIEM dan ELK Stack untuk analisis korelasi ancaman.",
    
    proj3_title: "Secure Identity & Zero Trust API Gateway",
    proj3_desc: "Arsitektur otentikasi terpusat berbasis OAuth2/OIDC menggunakan Keycloak dan backend Python Flask, di-containerize dengan Podman untuk isolasi layanan tanpa daemon root.",

    proj4_title: "UEBA & Anomaly Detection Service",
    proj4_desc: "Layanan microservice cerdas berbasis Python & Scikit-Learn/TensorFlow untuk memprediksi anomali aktivitas request HTTP dengan memetakan deviasi skor risiko per sesi pengguna.",

    proj_placeholder_title: "Slot Proyek Tambahan",
    proj_placeholder_desc: "Ruang ini disiapkan untuk proyek baru berikutnya. Anda dapat menambahkan tautan repositori GitHub, demo live, atau dokumentasi teknis dengan mudah.",

    // Experience & Education
    exp_eyebrow: "03. RIWAYAT & JEJAK",
    exp_title: "Pengalaman & Pendidikan",
    exp_work_title: "Pengalaman Kerja & Proyek",
    exp_edu_title: "Pendidikan Formal",
    
    work1_time: "Januari 2024 — April 2024",
    work1_role: "IT / Network Support Intern",
    work1_inst: "Dinas Perumahan dan Kawasan Pemukiman • Kampar, Riau",
    work1_b1: "Menjalani program magang kejuruan (SMK Tingkat 12) selama 4 bulan.",
    work1_b2: "Mendukung pemeliharaan komputer, router, dan infrastruktur jaringan lokal (LAN).",
    work1_b3: "Membantu administrasi data digital, dokumentasi teknis, dan asistensi operasional staf.",

    work2_time: "Agustus 2024 — Sekarang",
    work2_role: "Team Lead & Project Architect",
    work2_inst: "SAWIT Cybersecurity Research Team • Batam",
    work2_b1: "Memimpin tim perancangan platform keamanan siber Zero Trust untuk aplikasi web akademik.",
    work2_b2: "Mengorkestrasi pipeline integrasi IDS/IPS, Wazuh SIEM, dan model deteksi Machine Learning.",
    work2_b3: "Meraih Juara 1 Kategori Networking & Cybersecurity di International PBL EXPO 2026.",

    edu1_time: "2024 — 2028 (Diharapkan)",
    edu1_degree: "Sarjana Terapan (D4) Rekayasa Keamanan Siber",
    edu1_inst: "Politeknik Negeri Batam",
    edu1_desc: "Fokus studi: Pertahanan jaringan siber, arsitektur SIEM & SOC, keamanan cloud & kontainer, machine learning untuk cybersecurity, dan implementasi Zero Trust.",

    edu2_time: "Juni 2021 — Maret 2024",
    edu2_degree: "Teknik Jaringan Komputer (TKJ)",
    edu2_inst: "SMK Negeri 1 Bangkinang",
    edu2_desc: "Mempelajari fundamental jaringan komputer (routing, switching, subnetting, TCP/IP), administrasi server Linux, konfigurasi mikrotik, dan dasar-dasar keamanan sistem.",

    // Skills
    skills_eyebrow: "04. KUALIFIKASI TEKNIS",
    skills_title: "Keahlian & Kompetensi Utama",
    skills_desc: "Penguasaan teknologi dalam spektrum pertahanan siber, kecerdasan buatan, dan pengembangan perangkat lunak.",
    
    skill_cat_sec: "Keamanan Siber & Jaringan",
    skill_cat_ml: "Machine Learning untuk Sekuritas",
    skill_cat_dev: "Backend & Infrastruktur",
    skill_cat_tools: "Alat & Ekosistem SOC",

    // Certifications
    certs_eyebrow: "05. PENGAKUAN & LISENSI",
    certs_title: "Sertifikasi & Penghargaan",
    certs_desc: "Validasi kompetensi profesional dan pencapaian kompetisi tingkat nasional & internasional.",

    cert1_title: "1st Place Winner - Networking & Cybersecurity Category",
    cert1_issuer: "6th International PBL EXPO 2026",
    
    cert2_title: "Certified Cybersecurity Educator Professional (CCEP)",
    cert2_issuer: "Sertifikasi Profesional Pendidik Keamanan Siber",

    cert3_title: "Teknik Informasi Sistem Administrasi Jaringan",
    cert3_issuer: "Standar Kompetensi Kejuruan / Administrasi Jaringan Komputer",

    cert4_title: "Cyber Threat Management",
    cert4_issuer: "Manajemen dan Penanganan Ancaman Siber Terstruktur",

    cert5_title: "Red Hat OpenShift Development I: Introduction to Containers with Podman",
    cert5_issuer: "Red Hat • Pengembangan & Manajemen Kontainer",

    // Contact
    contact_eyebrow: "06. HUBUNGI SAYA",
    contact_title: "Mari Terhubung & Berdiskusi",
    contact_desc: "Apakah Anda memiliki peluang proyek, tawaran magang/kerja, atau ingin berdiskusi seputar keamanan siber? Hubungi saya melalui formulir di bawah ini — pesan Anda akan langsung diteruskan ke WhatsApp atau Email pribadi saya.",
    
    contact_wa_title: "Chat Langsung via WhatsApp",
    contact_wa_desc: "Respon cepat untuk diskusi mendesak",
    contact_email_title: "Email Pribadi",
    contact_email_desc: "fakhririzal710@gmail.com",
    contact_linkedin_title: "LinkedIn Profile",
    contact_linkedin_desc: "fakhri-rizal-96195a341",
    contact_location_title: "Lokasi",
    contact_location_desc: "Batam, Kepulauan Riau, Indonesia",
    
    form_title: "Kirim Pesan Langsung",
    form_desc: "Pilih untuk meneruskan pesan langsung ke WhatsApp atau kirim ke Email saya.",
    form_lbl_name: "Nama Lengkap *",
    form_lbl_contact: "Email atau Nomor WhatsApp Anda *",
    form_lbl_subject: "Topik Pembicaraan *",
    form_lbl_message: "Isi Pesan *",
    
    form_opt_project: "Peluang Proyek / Kolaborasi",
    form_opt_job: "Tawaran Magang / Pekerjaan",
    form_opt_discussion: "Diskusi Teknis / Riset Keamanan Siber",
    form_opt_other: "Pertanyaan Umum Lainnya",
    
    form_ph_name: "Contoh: Budi Santoso",
    form_ph_contact: "email@anda.com atau 08xxxxxxxxxx",
    form_ph_message: "Tuliskan pesan, rincian proyek, atau pertanyaan Anda di sini...",
    
    btn_send_wa: "Kirim via WhatsApp",
    btn_send_email: "Kirim via Email",
    btn_copy: "Salin",
    btn_copied: "Tersalin!",
    
    // WA Floating
    wa_float_tooltip: "Chat langsung dengan Fakhri di WhatsApp",
    wa_float_title: "Fakhri Rizal",
    wa_float_status: "Online • Respons Cepat",
    wa_float_greeting: "Halo! Terima kasih sudah mengunjungi web profil saya. Ada yang bisa saya bantu atau diskusikan?",
    wa_float_btn: "Buka Obrolan WhatsApp",

    // Footer
    footer_rights: "Hak Cipta Dilindungi.",
    footer_static_note: "Web Profil Statis Berkecepatan Tinggi • Bebas Kerentanan Backend"
  },

  en: {
    // Nav
    nav_about: "About",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_certifications: "Certifications",
    nav_contact: "Contact",
    nav_resume: "Download CV",
    status_available: "Open for Opportunities & Projects",

    // Hero
    hero_badge: "Cybersecurity Engineer & Backend Developer",
    hero_greeting: "Hello, I am",
    hero_name: "Fakhri Rizal",
    hero_tagline: "Securing Systems from Network Telemetry to Application Logic.",
    hero_desc: "Cybersecurity Engineering student at Politeknik Negeri Batam (2024–2028). Hands-on experience in intrusion detection, security monitoring, machine learning for threat detection, and Zero Trust backend development.",
    hero_cta_contact: "Get in Touch",
    hero_cta_projects: "Explore Projects",
    hero_card_title: "fakhri_terminal ~ status",
    hero_card_role: "Cybersecurity Engineering",
    hero_meta_institution: "Institution",
    hero_meta_major: "Major / Degree",
    hero_meta_specialty: "Specialization",
    hero_meta_status: "Current Status",
    hero_meta_status_val: "Actively Seeking Opportunities",

    // Stats
    stat_pbl: "1st Place PBL EXPO",
    stat_pbl_desc: "Networking & Cyber 2026 Winner",
    stat_ml: "4+ ML Models",
    stat_ml_desc: "Anomaly Detection & UEBA",
    stat_sec: "Zero Trust",
    stat_sec_desc: "Multi-layer Architecture",
    stat_gpa: "B.A.Sc Cyber",
    stat_gpa_desc: "Politeknik Negeri Batam",

    // About
    about_eyebrow: "01. PERSONAL PROFILE",
    about_title: "Engineering Resilient, Proactive Cyber Defenses",
    about_p1: "I am a Cybersecurity Engineering student at Politeknik Negeri Batam with a strong focus on Intrusion Detection & Prevention Systems (IDS/IPS), Security Information and Event Management (SIEM), and Machine Learning for cyber defense.",
    about_p2: "My core philosophy is that security cannot be an afterthought; it must be built into every layer of a system—from raw packet telemetry at the network layer to the business logic of backend applications. As Team Lead on the SAWIT platform (Security Analysis Watch Intelligence Threat), I spearheaded the integration of AI-driven anomaly detection with enterprise security tools like Wazuh, Suricata, and Keycloak.",
    about_p3: "I am actively looking for opportunities to contribute to real-world cybersecurity engineering, threat research, and robust backend architectures.",

    // Projects
    projects_eyebrow: "02. ENGINEERING & PROJECTS",
    projects_title: "Featured Works & Showcases",
    projects_desc: "A curated selection of security architectures, SIEM telemetry pipelines, ML anomaly detection engines, and backend integrations.",
    
    // SAWIT Flagship
    sawit_badge: "FLAGSHIP PROJECT • 1ST PLACE PBL EXPO 2026",
    sawit_title: "SAWIT — Security Analysis Watch Intelligence Threat",
    sawit_subtitle: "Zero Trust Cybersecurity Platform with Multi-Model Machine Learning Anomaly Detection",
    sawit_desc: "A Zero Trust cybersecurity platform engineered to protect an active, live academic web application from modern cyber threats in real time.",
    sawit_lead: "Role: Team Lead & Security Architect",
    sawit_f1: "Multi-model ML detection engine: Isolation Forest, One-Class SVM, Autoencoder, and LSTM/GRU for deep traffic payload and behavioral anomaly detection.",
    sawit_f2: "User & Entity Behavior Analytics (UEBA) to identify anomalous user patterns and mitigate account takeover threats.",
    sawit_f3: "Seamless SOC ecosystem integration: Wazuh SIEM, Suricata IDS/IPS, Keycloak IAM, TheHive for incident response, and MISP for threat intelligence sharing.",
    sawit_result: "Achievement: 1st Place Winner - Networking & Cybersecurity Category, 6th International PBL EXPO 2026.",

    // Other Projects
    proj2_title: "Network Telemetry & SIEM Pipeline",
    proj2_desc: "Engineered an end-to-end network telemetry pipeline with Suricata IDS, streaming EVE-JSON structured logs in real time to Wazuh SIEM and ELK Stack for threat correlation.",
    
    proj3_title: "Secure Identity & Zero Trust API Gateway",
    proj3_desc: "Centralized authentication architecture utilizing OAuth2/OIDC with Keycloak and a Python Flask backend, containerized via Podman for rootless service isolation.",

    proj4_title: "UEBA & Anomaly Detection Service",
    proj4_desc: "Microservice powered by Python & Scikit-Learn/TensorFlow to evaluate incoming HTTP request anomalies and assign dynamic session-level risk scores.",

    proj_placeholder_title: "Upcoming Project Slot",
    proj_placeholder_desc: "Reserved space for your next project release. You can quickly plug in GitHub repository links, live demos, or architecture diagrams here.",

    // Experience & Education
    exp_eyebrow: "03. TRACK RECORD",
    exp_title: "Experience & Education",
    exp_work_title: "Work Experience & Roles",
    exp_edu_title: "Academic Background",
    
    work1_time: "January 2024 — April 2024",
    work1_role: "IT / Network Support Intern",
    work1_inst: "Dinas Perumahan dan Kawasan Pemukiman • Kampar, Riau",
    work1_b1: "Completed a 4-month vocational internship (Grade 12 program).",
    work1_b2: "Supported computer and network maintenance across local office infrastructure.",
    work1_b3: "Assisted with data administration, technical documentation, and user support.",

    work2_time: "August 2024 — Present",
    work2_role: "Team Lead & Project Architect",
    work2_inst: "SAWIT Cybersecurity Research Team • Batam",
    work2_b1: "Led a team designing a Zero Trust cyber defense platform for live academic web applications.",
    work2_b2: "Orchestrated IDS/IPS telemetry pipelines, Wazuh SIEM rules, and Machine Learning models.",
    work2_b3: "Secured 1st Place Winner in the Networking & Cybersecurity Category at the 6th International PBL EXPO 2026.",

    edu1_time: "2024 — 2028 (Expected)",
    edu1_degree: "Bachelor of Applied Science (D4) in Cybersecurity Engineering",
    edu1_inst: "Politeknik Negeri Batam",
    edu1_desc: "Core study areas: Network defense, SIEM & SOC operations, cloud & container security, machine learning for threat detection, and Zero Trust implementation.",

    edu2_time: "June 2021 — March 2024",
    edu2_degree: "Computer and Network Engineering (TKJ)",
    edu2_inst: "SMK Negeri 1 Bangkinang",
    edu2_desc: "Studied networking fundamentals (routing, switching, subnetting, TCP/IP), Linux server administration, network device configuration, and foundational system security.",

    // Skills
    skills_eyebrow: "04. TECHNICAL COMPETENCIES",
    skills_title: "Skills & Core Capabilities",
    skills_desc: "Hands-on technical stack spanning cyber defense, artificial intelligence, and robust software engineering.",
    
    skill_cat_sec: "Cybersecurity & Network Defense",
    skill_cat_ml: "Machine Learning for Security",
    skill_cat_dev: "Backend & Infrastructure",
    skill_cat_tools: "SOC Tools & Ecosystem",

    // Certifications
    certs_eyebrow: "05. CREDENTIALS & AWARDS",
    certs_title: "Certifications & Honors",
    certs_desc: "Professional competency certifications and national/international competition honors.",

    cert1_title: "1st Place Winner - Networking & Cybersecurity Category",
    cert1_issuer: "6th International PBL EXPO 2026",
    
    cert2_title: "Certified Cybersecurity Educator Professional (CCEP)",
    cert2_issuer: "Cybersecurity Educator Professional Certification",

    cert3_title: "Teknik Informasi Sistem Administrasi Jaringan",
    cert3_issuer: "National Vocational Competency in Network System Administration",

    cert4_title: "Cyber Threat Management",
    cert4_issuer: "Structured Cyber Threat Identification & Incident Handling",

    cert5_title: "Red Hat OpenShift Development I: Introduction to Containers with Podman",
    cert5_issuer: "Red Hat • Containerization & Rootless Podman Management",

    // Contact
    contact_eyebrow: "06. GET IN TOUCH",
    contact_title: "Let's Connect & Collaborate",
    contact_desc: "Have an interesting cybersecurity project, internship opportunity, or technical inquiry? Reach out via the form below — your message will be dispatched directly to my WhatsApp or personal Email.",
    
    contact_wa_title: "Direct WhatsApp Chat",
    contact_wa_desc: "Fast response for immediate inquiries",
    contact_email_title: "Personal Email",
    contact_email_desc: "fakhririzal710@gmail.com",
    contact_linkedin_title: "LinkedIn Profile",
    contact_linkedin_desc: "fakhri-rizal-96195a341",
    contact_location_title: "Location",
    contact_location_desc: "Batam, Riau Islands, Indonesia",
    
    form_title: "Send a Direct Message",
    form_desc: "Choose to deliver your message instantly to my WhatsApp or send directly to my Email inbox.",
    form_lbl_name: "Full Name *",
    form_lbl_contact: "Your Email or WhatsApp Number *",
    form_lbl_subject: "Subject / Topic *",
    form_lbl_message: "Message *",
    
    form_opt_project: "Project Collaboration / Freelance",
    form_opt_job: "Internship / Job Opportunity",
    form_opt_discussion: "Technical Discussion / Cyber Research",
    form_opt_other: "General Inquiries",
    
    form_ph_name: "e.g., John Doe",
    form_ph_contact: "name@example.com or +62 812...",
    form_ph_message: "Write your message, project scope, or query here...",
    
    btn_send_wa: "Send via WhatsApp",
    btn_send_email: "Send via Email",
    btn_copy: "Copy",
    btn_copied: "Copied!",

    // WA Floating
    wa_float_tooltip: "Chat directly with Fakhri on WhatsApp",
    wa_float_title: "Fakhri Rizal",
    wa_float_status: "Online • Quick Response",
    wa_float_greeting: "Hello! Thank you for visiting my portfolio. How can I assist you today?",
    wa_float_btn: "Open WhatsApp Chat",

    // Footer
    footer_rights: "All Rights Reserved.",
    footer_static_note: "High-Performance Static Portfolio • Zero Backend Vulnerabilities"
  }
};

// ==========================================
// STATE & INITIALIZATION
// ==========================================
let currentLang = localStorage.getItem('profile_lang') || 'id';

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initContactForm();
  initFloatingWhatsApp();
  initMobileNav();
  initThemeToggle();
  initClipboardButtons();
  initActiveNavHighlight();
});

// ==========================================
// LANGUAGE SWITCHER
// ==========================================
function initLanguage() {
  setLanguage(currentLang);

  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      if (selectedLang && selectedLang !== currentLang) {
        setLanguage(selectedLang);
      }
    });
  });
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('profile_lang', lang);

  // Update active state of language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Apply translations to all matching data-i18n elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Apply translations to placeholders
  const placeholderElements = document.querySelectorAll('[data-i18n-ph]');
  placeholderElements.forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

// ==========================================
// CONTACT DISPATCHER (WHATSAPP & EMAIL)
// ==========================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  const btnWA = document.getElementById('btnSendWA');
  const btnEmail = document.getElementById('btnSendEmail');
  const alertBox = document.getElementById('formStatusAlert');
  const directWaCardLink = document.getElementById('directWaCardLink');

  // Dynamically synchronize direct WhatsApp card link with CONFIG.WHATSAPP_NUMBER
  if (directWaCardLink) {
    const defaultText = encodeURIComponent('Halo Fakhri, saya tertarik berdiskusi mengenai proyek keamanan siber.');
    directWaCardLink.href = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${defaultText}`;
  }

  if (!form) return;

  // 1. Dispatch via WhatsApp
  if (btnWA) {
    btnWA.addEventListener('click', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('senderName').value.trim();
      const contact = document.getElementById('senderContact').value.trim();
      const subject = document.getElementById('senderSubject').value;
      const message = document.getElementById('senderMessage').value.trim();

      if (!name || !message) {
        showAlert(alertBox, currentLang === 'id' ? 'Mohon isi Nama dan Pesan Anda terlebih dahulu.' : 'Please enter your Name and Message first.', 'error');
        return;
      }

      // Format WhatsApp Markdown message
      let waText = `*Pesan Baru dari Web Portfolio Fakhri Rizal*\n\n`;
      waText += `👤 *Nama:* ${name}\n`;
      if (contact) {
        waText += `📞 *Kontak:* ${contact}\n`;
      }
      waText += `📌 *Topik:* ${subject}\n\n`;
      waText += `💬 *Pesan:*\n${message}\n\n`;
      waText += `_Dikirim melalui Web Profile Fakhri Rizal_`;

      const encodedText = encodeURIComponent(waText);
      const waUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodedText}`;

      showAlert(alertBox, currentLang === 'id' ? 'Membuka WhatsApp untuk mengirim pesan...' : 'Opening WhatsApp to send your message...', 'success');
      
      // Open WhatsApp in a new tab
      window.open(waUrl, '_blank');
    });
  }

  // 2. Dispatch via Email (Static AJAX with Web3Forms or Mailto Fallback)
  if (btnEmail) {
    btnEmail.addEventListener('click', async (e) => {
      e.preventDefault();

      const name = document.getElementById('senderName').value.trim();
      const contact = document.getElementById('senderContact').value.trim();
      const subject = document.getElementById('senderSubject').value;
      const message = document.getElementById('senderMessage').value.trim();

      if (!name || !contact || !message) {
        showAlert(alertBox, currentLang === 'id' ? 'Mohon lengkapi Nama, Kontak, dan Pesan Anda.' : 'Please fill in Name, Contact, and Message.', 'error');
        return;
      }

      // If Web3Forms Access Key is not configured yet, fallback smoothly to mailto
      if (!CONFIG.WEB3FORMS_ACCESS_KEY || CONFIG.WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
        const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - ${name}`);
        const mailtoBody = encodeURIComponent(`Nama: ${name}\nKontak Pengirim: ${contact}\nTopik: ${subject}\n\nPesan:\n${message}`);
        const mailtoUrl = `mailto:${CONFIG.EMAIL_ADDRESS}?subject=${mailtoSubject}&body=${mailtoBody}`;
        
        showAlert(alertBox, currentLang === 'id' ? 'Membuka aplikasi Email Anda untuk mengirim pesan...' : 'Opening your email client to send message...', 'success');
        window.location.href = mailtoUrl;
        return;
      }

      // If Web3Forms Key is present, send asynchronously via AJAX
      btnEmail.disabled = true;
      btnEmail.textContent = currentLang === 'id' ? 'Mengirim...' : 'Sending...';

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: CONFIG.WEB3FORMS_ACCESS_KEY,
            name: name,
            email: contact,
            subject: `Portfolio Contact: ${subject} from ${name}`,
            message: message,
            to_email: CONFIG.EMAIL_ADDRESS
          })
        });

        const result = await response.json();
        if (response.status === 200) {
          showAlert(alertBox, currentLang === 'id' ? '✅ Pesan berhasil terkirim ke email Fakhri!' : '✅ Message successfully sent to Fakhri\'s email!', 'success');
          form.reset();
        } else {
          throw new Error(result.message || 'Error occurred');
        }
      } catch (err) {
        console.warn('Web3Forms dispatch fallback triggered:', err);
        // Fallback to mailto
        const mailtoUrl = `mailto:${CONFIG.EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Dari: ${name} (${contact})\n\n${message}`)}`;
        window.location.href = mailtoUrl;
        showAlert(alertBox, currentLang === 'id' ? 'Mengalihkan ke aplikasi email...' : 'Redirecting to your email client...', 'success');
      } finally {
        btnEmail.disabled = false;
        btnEmail.textContent = translations[currentLang].btn_send_email;
      }
    });
  }
}

function showAlert(box, msg, type) {
  if (!box) return;
  box.textContent = msg;
  box.className = `form-status-alert ${type}`;
  box.style.display = 'block';
  setTimeout(() => {
    box.style.display = 'none';
  }, 7000);
}

// ==========================================
// FLOATING WHATSAPP CHAT WIDGET
// ==========================================
function initFloatingWhatsApp() {
  const trigger = document.getElementById('floatingWaBtn');
  const popup = document.getElementById('floatingWaPopup');
  const openChatBtn = document.getElementById('waPopupStartBtn');

  if (!trigger || !popup) return;

  trigger.addEventListener('click', () => {
    popup.classList.toggle('open');
  });

  if (openChatBtn) {
    openChatBtn.addEventListener('click', () => {
      const defaultGreeting = currentLang === 'id' 
        ? 'Halo Fakhri, saya tertarik berdiskusi mengenai proyek / kolaborasi keamanan siber.' 
        : 'Hello Fakhri, I would like to discuss a cybersecurity project or collaboration opportunity.';
      const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultGreeting)}`;
      window.open(url, '_blank');
      popup.classList.remove('open');
    });
  }

  // Close popup when clicking outside
  document.addEventListener('click', (e) => {
    if (!trigger.contains(e.target) && !popup.contains(e.target)) {
      popup.classList.remove('open');
    }
  });
}

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
function initMobileNav() {
  const hamburger = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // Close menu when clicking on nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });
}

// ==========================================
// THEME TOGGLE (DARK / LIGHT)
// ==========================================
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('profile_theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('profile_theme', newTheme);
    });
  }
}

// ==========================================
// COPY TO CLIPBOARD BUTTONS
// ==========================================
function initClipboardButtons() {
  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          const originalText = btn.textContent;
          btn.textContent = translations[currentLang].btn_copied || 'Copied!';
          btn.style.borderColor = 'var(--accent-emerald)';
          btn.style.color = 'var(--accent-emerald)';
          setTimeout(() => {
            btn.textContent = originalText;
            btn.style.borderColor = '';
            btn.style.color = '';
          }, 2000);
        });
      }
    });
  });
}

// ==========================================
// ACTIVE NAV LINK TRACKING ON SCROLL
// ==========================================
function initActiveNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}
