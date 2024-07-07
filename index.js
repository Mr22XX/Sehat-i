let man = document.getElementById("man");
let woman = document.getElementById("woman");
let inputTinggi = document.getElementById("tinggi");
let hasil = document.getElementById("hasil");
let cont0 = document.getElementById("cont0");
let cont1 = document.getElementById("cont1");
let cont2 = document.getElementById("cont2");
let foot = document.getElementById("foot")

function idealLaki(tinggi){
    tinggi = parseFloat(inputTinggi.value);
    return hasilPerhitungan = (tinggi - 100) - ((tinggi -100) * 0.1);
}

function idealPerempuan(tinggi){
    tinggi = parseFloat(inputTinggi.value);
    return hasilPerhitungan = (tinggi - 100) - ((tinggi - 100) * 0.15);
}

function perhitungan(){
    let tinggi = (inputTinggi.value);
    if(man.checked && woman.checked || man.checked == false && woman.checked == false){
        hasil.value = "Pilih satu Gender !!!";
    }
    else if (woman.checked && tinggi >= 140 && tinggi <= 200){
        hasil.value = idealPerempuan(tinggi).toFixed(2) + " Kg";
    }
    else if(man.checked && tinggi >= 140 && tinggi <= 200){
        hasil.value = idealLaki(tinggi).toFixed(2) + " Kg";
    }
    else{
        hasil.value = "Tinggi => 140 <= 200"
    }
}

const changeDisplay = () => {
        cont2.style.display = 'flex';
        cont1.style.display = 'none';
        cont0.style.display = 'none';
        foot.style.display = 'none'
}

const back = () =>{
    cont2.style.display = 'none';
    cont1.style.display = 'flex';
    cont0.style.display = 'flex' ;
    foot.style.display = 'flex';
}