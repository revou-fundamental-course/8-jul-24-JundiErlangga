
// fungsi untuk validasi form
function validasi(){
     // [form-name][input-name]
     const jeniskelamin = document.forms["form-BMI"]["Jenis-kelamin"].value;
     const berat = document.forms["form-BMI"]["berat"].value;
     const usia = document.forms["form-BMI"]["usia"].value;
     const tinggi = document.forms["form-BMI"]["tinggi"].value;
                             
     if (jeniskelamin == "" || berat == "" || usia == "" || tinggi == "" || berat < 0 || usia < 0 || tinggi < 0){
         alert("Tidak valid");
         return false;
     }
     // kalau tidak kosong maka manggil fungsi hitungBMI()
     else{
        hitungBMI()
     }
}

// Fungsi hitung BMI
function hitungBMI(){
    let berat = parseInt(document.getElementById("input-berat").value)
    let tinggi = parseInt(document.getElementById("input-tinggi").value)
    var BMI = berat / (tinggi^2)
    document.getElementById("hasil-angka").innerHTML = BMI
    //pengelompokan status
    if(BMI < 18.5){
        document.getElementById("ringkasan").innerHTML = "Anda memiliki berat badan kurang"
        document.getElementById("solusi").innerHTML = "Anda berada dalam kategori underweight atau berat badan yang kurang. Cara terbaik untuk menaikkan berat badan adala dengan perbanyak makan makanan yang bergizi seimbang. Jika BMI Anda berada di kategori ini, maka anda dianjurkan untuk menaikkan berat badan hingga bata normal."
        document.getElementById("penyakit-penyakit1").innerHTML = "Anemia"
        document.getElementById("penyakit-penyakit2").innerHTML = "Skorbut"
        document.getElementById("penyakit-penyakit3").innerHTML = "Sakit Kulit"
        document.getElementById("penyakit-penyakit4").innerHTML = "Imun Melemah"
        document.getElementById("judul-daftar-penyakit").innerHTML = "Beberapa kekurangan dari kekurangan berat badan:"
    } 
    else if(BMI >= 18.5 && BMI < 25.0){
        document.getElementById("ringkasan").innerHTML = "Anda memiliki berat badan yang ideal"
        document.getElementById("solusi").innerHTML = "Anda berada dalam kategori healthy atau berat badan sehat. Mantap, pertahankan berat badan ideal mu dengan menjaga pola makan, rajin berolahraga, dan istirahat yang cukup. Jika BMI Anda berada di kategori ini, maka Anda sehat."
    }
    else if(BMI >= 25.0 && BMI < 30){
        document.getElementById("ringkasan").innerHTML = "Anda memiliki berat badan yang lebih"
        document.getElementById("solusi").innerHTML = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal."
        document.getElementById("penyakit-penyakit1").innerHTML = "Diabetes"
        document.getElementById("penyakit-penyakit2").innerHTML = "Hipertensi"
        document.getElementById("penyakit-penyakit3").innerHTML = "Sakit Jantung"
        document.getElementById("penyakit-penyakit4").innerHTML = "Osteoarthritis"
        document.getElementById("judul-daftar-penyakit").innerHTML = "Beberapa kekurangan dari kelebihan berat badan:"
    }
    else if(BMI > 30){
        document.getElementById("ringkasan").innerHTML = "Anda memiliki mengalami obesitas"
        document.getElementById("solusi").innerHTML = "Anda berada dalam kategori Obesitas. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal."
        document.getElementById("penyakit-penyakit1").innerHTML = "Diabetes"
        document.getElementById("penyakit-penyakit2").innerHTML = "Hipertensi"
        document.getElementById("penyakit-penyakit3").innerHTML = "Sakit Jantung"
        document.getElementById("penyakit-penyakit4").innerHTML = "Osteoarthritis"
        document.getElementById("judul-daftar-penyakit").innerHTML = "Beberapa kekurangan dari kelebihan berat badan:"
    }
    else{
        document.getElementById("ringkasan").innerHTML = "gak tau"
    }
    //range BMI
    document.getElementById("antara").innerHTML = "BMI Anda di antara " + String(parseInt(BMI)-1) + " dan " + String(parseInt(BMI)+1)
    
}



// function tes(){
//     console.log(1);
//     document.getElementById("tes").value = 1 
// }
