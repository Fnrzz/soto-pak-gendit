const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  // Mendapatkan tinggi viewport
  const viewportHeight = window.innerHeight;

  // Mendapatkan posisi scroll dari atas halaman
  const scrollPosition = window.scrollY;

  // Memeriksa apakah sudah discroll 100vh
  if (scrollPosition >= viewportHeight) {
    // Menghapus kelas navbar-dark jika sudah discroll 100vh
    nav.classList.remove("navbar-dark");
    nav.classList.add("bg-white");
  } else {
    // Menambahkan kembali kelas navbar-dark jika belum discroll 100vh
    nav.classList.add("navbar-dark");
    nav.classList.remove("bg-white");
  }
});
