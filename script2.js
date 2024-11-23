// Membuat tag <link> untuk file CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'style.css'; // Ganti dengan URL file CSS yang benar di GitHub

// Menambahkan link ke dalam <head>
document.head.appendChild(link);
