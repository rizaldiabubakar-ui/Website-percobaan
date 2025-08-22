// Menunggu hingga seluruh konten halaman HTML dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {

    // BARIS DEBUG: Pesan ini akan muncul di konsol jika script berjalan
    console.log("Script Otomatis Jeeystore Berhasil Dimuat!");

    // Inisialisasi variabel untuk slider
    let slideIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const totalSlides = testimonials.length;

    // Sembunyikan semua testimoni kecuali yang pertama saat halaman dimuat
    testimonials.forEach((testimonial, index) => {
        if (index !== 0) {
            testimonial.style.display = 'none';
        }
    });

    // Fungsi untuk menampilkan testimoni
    function showTestimonial(n) {
        // Sembunyikan testimoni yang sedang aktif
        testimonials[slideIndex].style.display = 'none';

        // Hitung indeks slide berikutnya, kembali ke 0 jika sudah di akhir
        slideIndex = (n + totalSlides) % totalSlides;

        // Tampilkan testimoni yang baru
        testimonials[slideIndex].style.display = 'block';
    }

    // Fungsi untuk ke testimoni selanjutnya
    function nextTestimonial() {
        showTestimonial(slideIndex + 1);
    }

    // Fungsi untuk ke testimoni sebelumnya
    function prevTestimonial() {
        showTestimonial(slideIndex - 1);
    }

    // Menambahkan event listener ke tombol agar tetap bisa diklik manual
    document.getElementById('nextBtn').addEventListener('click', nextTestimonial);
    document.getElementById('prevBtn').addEventListener('click', prevTestimonial);
    
    // Perintah untuk membuat slider bergerak otomatis setiap 5 detik
    setInterval(nextTestimonial, 5000); 

});