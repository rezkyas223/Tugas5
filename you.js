// Define a class for Pendaftar
class Pendaftar {
    constructor(nama, umur, uangSangu) {
        this.nama = nama;
        this.umur = umur;
        this.uangSangu = uangSangu;
    }
}

// Inisialisasi array untuk menyimpan data pendaftar
const pendaftarList = [];

// Event listener untuk form submit
document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const umur = parseInt(document.getElementById("umur").value);
    const uangSangu = parseInt(document.getElementById("uangSangu").value);

    // Validasi kriteria
    if (nama.length < 10 || umur < 25 || uangSangu < 100000 || uangSangu > 1000000) {
        alert("Mohon isi form dengan benar!");
        return;
    }

    // Tambahkan pendaftar ke daftar pendaftar
    const pendaftar = new Pendaftar(nama, umur, uangSangu);
    pendaftarList.push(pendaftar);

    // Reset form
    document.getElementById("nama").value = "";
    document.getElementById("umur").value = "";
    document.getElementById("uangSangu").value = "";

    // Update tabel
    updateTable();
});

// Fungsi untuk mengupdate tabel pendaftar
function updateTable() {
    const pendaftarTableBody = document.getElementById("pendaftarTableBody");
    pendaftarTableBody.innerHTML = "";

    let totalUangSangu = 0;
    let totalUmur = 0;

    pendaftarList.forEach((pendaftar) => {
        const row = pendaftarTableBody.insertRow();
        const cellNama = row.insertCell(0);
        const cellUmur = row.insertCell(1);
        const cellUangSangu = row.insertCell(2);

        cellNama.innerHTML = pendaftar.nama;
        cellUmur.innerHTML = pendaftar.umur;
        cellUangSangu.innerHTML = pendaftar.uangSangu;

        totalUangSangu += pendaftar.uangSangu;
        totalUmur += pendaftar.umur;
    });

    const avgUangSangu = totalUangSangu / pendaftarList.length;
    const avgUmur = totalUmur / pendaftarList.length;

    document.getElementById("avgUangSangu").textContent = avgUangSangu.toFixed(2);
    document.getElementById("avgUmur").textContent = avgUmur.toFixed(2);
}

