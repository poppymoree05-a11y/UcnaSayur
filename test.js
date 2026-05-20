// ==========================
// INTERACTIVE WEBSITE SCRIPT
// Toko Sayur Bu Ani
// ==========================

// Ambil semua tombol tambah produk
const tombolTambah = document.querySelectorAll(".btn-tambah");

// Ambil semua baris produk
const rowsProduk = document.querySelectorAll("tbody tr");

// Total item keranjang
let totalKeranjang = 0;

// ==========================
// FITUR TAMBAH PRODUK
// ==========================
tombolTambah.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const namaProduk =
      rowsProduk[index].children[0].textContent;

    totalKeranjang++;

    // Animasi tombol
    btn.textContent = "✓ Ditambahkan";
    btn.style.backgroundColor = "#15803d";

    setTimeout(() => {
      btn.textContent = "+ Tambah";
      btn.style.backgroundColor = "#16a34a";
    }, 1200);

    // Alert sederhana
    alert(`${namaProduk} berhasil ditambahkan ke keranjang 🛒`);

    // Update judul navbar
    updateKeranjang();
  });
});

// ==========================
// UPDATE KERANJANG DI NAVBAR
// ==========================
function updateKeranjang() {
  const logo = document.querySelector(".logo");

  logo.textContent =
    `🥬 Toko Sayur Bu Ani (${totalKeranjang})`;
}

// ==========================
// FORM KONTAK
// ==========================
const formKontak = document.getElementById("form-kontak");
const pesanAprove = document.getElementById("pesan-aprove");

formKontak.addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil value input
  const nama = document.getElementById("nama").value.trim();
  const telepon = document
    .getElementById("telepon")
    .value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  // Validasi sederhana
  if (nama === "" || telepon === "" || pesan === "") {
    alert("Harap isi semua form terlebih dahulu!");
    return;
  }

  // Validasi nomor WA
  if (telepon.length < 10) {
    alert("Nomor WhatsApp tidak valid!");
    return;
  }

  // Tampilkan pesan sukses
  pesanAprove.style.display = "block";

  // Reset form
  formKontak.reset();

  // Hilangkan notif setelah beberapa detik
  setTimeout(() => {
    pesanAprove.style.display = "none";
  }, 5000);
});

// ==========================
// EFEK SCROLL NAVBAR
// ==========================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow =
      "0 4px 16px rgba(0,0,0,0.12)";
  } else {
    navbar.style.boxShadow =
      "0 1px 4px rgba(0,0,0,0.07)";
  }
});

// ==========================
// ANIMASI HERO IMAGE
// ==========================
const heroImage = document.querySelector(".hero-img");

heroImage.addEventListener("mouseenter", () => {
  heroImage.style.transform = "scale(1.03)";
  heroImage.style.transition = "0.3s";
});

heroImage.addEventListener("mouseleave", () => {
  heroImage.style.transform = "scale(1)";
});

// ==========================
// SMOOTH ACTIVE MENU
// ==========================
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((item) => {
      item.style.color = "#1f2937";
    });

    this.style.color = "#16a34a";
  });
});

// ==========================
// SAPAAN BERDASARKAN WAKTU
// ==========================
const heroText = document.querySelector(".hero-teks p");

const jam = new Date().getHours();

if (jam >= 5 && jam < 11) {
  heroText.innerHTML =
    "Selamat pagi 🌞 Sayur segar siap diantar ke rumah Anda!";
} else if (jam >= 11 && jam < 15) {
  heroText.innerHTML =
    "Selamat siang ☀️ Yuk belanja sayur segar hari ini!";
} else if (jam >= 15 && jam < 18) {
  heroText.innerHTML =
    "Selamat sore 🌿 Jangan lupa stok sayur sehat di rumah!";
} else {
  heroText.innerHTML =
    "Selamat malam 🌙 Pesan sayur sekarang untuk besok pagi!";
}

// ==========================
// ANIMASI MUNCUL SAAT SCROLL
// ==========================
const sections = document.querySelectorAll(
  ".section-produk, .section-cara-pesan, .section-kontak"
);

window.addEventListener("scroll", revealSection);

function revealSection() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const sectionTop =
      section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      section.style.transition =
        "all 0.6s ease";
    }
  });
}

// Kondisi awal animasi
sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
});

revealSection();