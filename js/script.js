// Ini Javascript
// Fungsi untuk menampilkan kalkulator yang sesuai
function showCalculator(calculator, buttonId) {
    // Sembunyikan semua kalkulator
    document.getElementById("segitiga").style.display = "none";
    document.getElementById("jajarGenjang").style.display = "none";
  
    // Tampilkan kalkulator yang dipilih
    document.getElementById(calculator).style.display = "block";
  
    // Hapus kelas 'active' dari semua tombol
    const buttons = document.querySelectorAll(".menu button");
    buttons.forEach((button) => button.classList.remove("active"));
  
    // Tambahkan kelas 'active' ke tombol yang diklik
    document.getElementById(buttonId).classList.add("active");
  
    // Kosongkan hasil sebelumnya
    document.getElementById("hasilLuasSegitiga").innerHTML = "";
    document.getElementById("HasilKelilingSegitiga").innerHTML = "";
    document.getElementById("hasilLuasJajarGenjang").innerHTML = "";
    document.getElementById("hasilKelilingJajarGenjang").innerHTML = "";
  }
  
  // Fungsi untuk menghitung luas segitiga
  function calculateTriangleArea() {
    const alas = parseFloat(document.getElementById("alasSegitiga").value);
    const tinggi = parseFloat(document.getElementById("tinggiSegitiga").value);
    const luas = 0.5 * alas * tinggi;
    document.getElementById("hasilLuasSegitiga").innerHTML = `
        Hasilnya:<br/> L = 1/2 × a × t<br>
        L = 1/2 × ${alas} × ${tinggi} <br>
        L = ${luas} cm²`;
  }
  
  // Fungsi untuk menghitung keliling segitiga
  function calculateTrianglePerimeter() {
    const sisi1 = parseFloat(document.getElementById("sisiSegitiga1").value);
    const sisi2 = parseFloat(document.getElementById("sisiSegitiga2").value);
    const sisi3 = parseFloat(document.getElementById("sisiSegitiga3").value);
    const keliling = sisi1 + sisi2 + sisi3;
    document.getElementById("HasilKelilingSegitiga").innerHTML = `
        Hasilnya:<br/> K = S1 + S2 + S3<br>
        K = ${sisi1} + ${sisi2} + ${sisi3} <br>
        K = ${keliling} cm`;
  }
  
  // Fungsi untuk menghitung luas jajar genjang
  function calculateParallelogramArea() {
    const alas = parseFloat(document.getElementById("alasJajarGenjang").value);
    const tinggi = parseFloat(
      document.getElementById("tinggiUntukLuasJajarGenjang").value
    );
    const luas = alas * tinggi;
    document.getElementById("hasilLuasJajarGenjang").innerHTML = `
        Hasilnya:<br/> L = a × t<br>
        L = ${alas} × ${tinggi} <br>
        L = ${luas} cm²`;
  }
  
  // Fungsi untuk menghitung keliling jajar genjang
  function calculateParallelogramPerimeter() {
    const alas = parseFloat(
      document.getElementById("alasJajarGenjangKeliling").value
    );
    const sisiMiring = parseFloat(
      document.getElementById("sisiMiringJajarGenjang").value
    );
    const keliling = 2 * (alas + sisiMiring);
    document.getElementById("hasilKelilingJajarGenjang").innerHTML = `
        Hasilnya:<br/> K = 2 × (a + b)<br>
        K = 2 × (${alas} + ${sisiMiring}) <br>
        K = ${keliling} cm`;
  }
  
  // Fungsi untuk mereset kalkulator Segitiga
  function resetTriangleCalculator() {
    document.getElementById("alasSegitiga").value = "";
    document.getElementById("tinggiSegitiga").value = "";
    document.getElementById("sisiSegitiga1").value = "";
    document.getElementById("sisiSegitiga2").value = "";
    document.getElementById("sisiSegitiga3").value = "";
    document.getElementById("hasilLuasSegitiga").innerHTML = "";
    document.getElementById("HasilKelilingSegitiga").innerHTML = "";
  }
  
  // Fungsi untuk mereset kalkulator Jajar Genjang
  function resetParallelogramCalculator() {
    document.getElementById("alasJajarGenjang").value = "";
    document.getElementById("tinggiUntukLuasJajarGenjang").value = "";
    document.getElementById("alasJajarGenjangKeliling").value = "";
    document.getElementById("sisiMiringJajarGenjang").value = "";
    document.getElementById("hasilLuasJajarGenjang").innerHTML = "";
    document.getElementById("hasilKelilingJajarGenjang").innerHTML = "";
  }
  