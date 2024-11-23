    const body = document.querySelector("body");
const swalst = Swal.mixin({
  timer: 2300,
  allowOutsideClick: false,
  showConfirmButton: false,
  timerProgressBar: true,
  imageHeight: 90,
});

const audio = new Audio('' + linkmp3.src); 
audio.loop = true; // Menambahkan properti loop agar audio berputar tanpa henti
audio.play(); // Memulai audio

let ftganti = 0;
let fungsi = 0;
let fungsiAwal = 0;
let deffotostiker = fotostiker.src;

Content.style = "opacity:1;margin-top:35vh";

const swals = Swal.mixin({
  allowOutsideClick: false,
  cancelButtonColor: '#FF0040',
  imageHeight: 80,
});
  var sudahKlik = true;
  document.getElementById("loveIn").onclick = function() {
    if (sudahKlik) {
    if(fungsiAwal==0){
      audio.play();fungsiAwal=1;loveIn.style="transition:all .8s ease;transform:scale(15);opacity:0";
      wallpaper.style="transform: scale(1.5);";ket.style="display:none";setTimeout(initengahan,300);
      setTimeout(inipesan,500)}
    } else {
      sudahKlik = true; // Tandai bahwa tombol sudah diklik
      document.getElementById('loveIn').innerHTML = '<a href="#" class="lovein">&#10084;</a>';
    }
  }
  
  async function inipesan() {
    var { value: nama } = await swals.fire({
        title: 'Masukin Nama Kamu 🫣', 
        input: 'text',
        confirmButtonText: 'Lanjut',
        inputAttributes: {
            autocapitalize: 'on',
            autocorrect: 'off',
            spellcheck: 'false',
            autocomplete: 'off'
        }
    });
    if (nama && nama.trim().length < 11) { // Validasi nama dengan .trim()
        window.nama = nama.trim(); // Hilangkan spasi di awal/akhir
        vketikutama = "Alooo, " + nama + " ✨";
        mulainama();
    } else {
        // Tampilkan pesan jika input tidak valid
        await swals.fire('Ups!', 'Nama tidak boleh kosong atau lebih dari 10 karakter, ya!');
        inipesan(); // Panggil ulang fungsi jika input tidak valid
    }
}
  
 

  function initengahan(){
    loveIn.style="display:none";ket.style="display:none";
    Content.style = "opacity:1;margin-top:30px";
    bodyblur.style="opacity:.7";
    wallpaper.style="transform: scale(1.5);";
  }
  
  async function mulainama() {
    bodyblur.style="opacity:.7";
    wallpaper.style="transform: scale(1);";
    fotostiker.style="display:inline-flex;";setTimeout(ftmuncul,200);
    setTimeout(ketutama,500);
  }
  
  function ftmuncul(){if(ftganti==0){fotostiker.src = deffotostiker;} if(ftganti==1){fotostiker.src = fotostiker1.src;} if(ftganti==2){fotostiker.src = fotostiker2.src;} if(ftganti==3){fotostiker.src = fotostiker3.src;} if(ftganti==4){fotostiker.src = fotostiker4.src;} if(ftganti==5){fotostiker.src = fotostiker5.src;} if(ftganti==6){fotostiker.src = fotostiker6.src;} if(ftganti==7){fotostiker.src = fotostiker7.src;} fotostiker.style="display:inline-flex;opacity:1;transform:scale(1)";}
  function fthilang(){fotostiker.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(.1)";}
  function jjfoto(){fotostiker.style.animation="rto .8s infinite alternate";}
  
  function bqmuncul(){bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0";mulaiketik1();fungsi=1;}
  function bqhilang(){wallpaper.style="transform: scale(2);";bodyblur.style="opacity:.3";bq.style = "position:relative;transition:all .7s ease;";}
  function ketutama(){new TypeIt("#utama", {strings: ["" + vketikutama], startDelay: 50, speed: 30, waitUntilVisible: true, afterComplete: function(){utama.innerHTML = vketikutama;setTimeout(bqmuncul,200);},}).go();}

  vketik1=kalimat.innerHTML;kalimat.innerHTML = "";kalimatb.innerHTML = "";
  function mulaiketik1(){
  new TypeIt("#kalimat", {
  strings: ["" + vketik1], startDelay: 400, speed: 20, cursor: false, deleteSpeed: 20, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    aktiopsL();
  },}).go();
  }
  
  opsLclick=0;opsLcheck=0;defopsL=opsL.innerHTML;
  document.getElementById("bq").onclick = function() {
    if(opsLclick==1){
      if(opsLcheck==1){setTimeout(aktipesan1,400);}
      if(opsLcheck==2){mulaiketik3();}
      if(opsLcheck==3){mulaiketik4();}
      if(opsLcheck==4){mulaiketik5();}
      if(opsLcheck==5){ketutama2();}
      otomatis();opsL.style.opacity="0";opsLclick=0;
    }
  }
  function aktiopsL(){opsL.innerHTML=defopsL;opsL.style.opacity=".8";opsLclick=1;opsLcheck+=1;}
  function gantiopsL(){opsL.innerHTML="[ Klik beberapa LOVE-nya ]";opsL.style.opacity=".8";}
  function otomatis(){kalimat.style="opacity:0";setTimeout(otolanj,400);}
  function otolanj(){kalimat.style="opacity:1";}

  function aktipesan1(){kalimat.innerHTML=pesan1.innerHTML;kolombaru.style="position:relative;opacity:1;transform:scale(1);";}
  vketik4=pesan4.innerHTML;pesan4.innerHTML="";
  function aktipesan4(){
  kalimat.style="display:none";
  wallpaper.style="transform: scale(1.5);";
  kolombaru.style="";kalimat.innerHTML="";
  wallpaper.style="transform: scale(1);";
  //fthilang();ftganti=2;setTimeout(ftmuncul,300);
  new TypeIt("#pesan4", {
  strings: ["" + vketik4], startDelay: 1.5, speed: 35, cursor: true, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    pesan4.innerHTML=vketik4;
    setTimeout(aktipesan5,1100);
  },}).go();
  }
  vketik5=pesan5.innerHTML;pesan5.innerHTML="";
  function aktipesan5(){
  pesan4.style="display:none";
  wallpaper.style="transform: scale(1.5);";
  fthilang();ftganti=3;setTimeout(ftmuncul,300);
  new TypeIt("#pesan5", {
  strings: ["" + vketik5], startDelay: 1.5, speed: 40, cursor: true, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    pesan5.innerHTML=vketik5;
    setTimeout(aktipesan6,1700);
  },}).go();
  }
  vketik6=pesan6.innerHTML;pesan6.innerHTML="";
  function aktipesan6(){
  pesan5.style="display:none";
  wallpaper.style="transform: scale(1.5);";
  fthilang();ftganti=4;setTimeout(ftmuncul,300);
  new TypeIt("#pesan6", {
  strings: ["" + vketik6], startDelay: 1, speed: 50, cursor: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    pesan6.innerHTML=vketik6;
    setInterval(berjatuhan, 50);
  },}).go();
  }

  

  var slov=0;
  document.getElementById("lv1").onclick = function() {lv1.style="opacity:0";slov+=1;this.onclick=null;checkslov();}
  document.getElementById("lv2").onclick = function() {lv2.style="opacity:0";slov+=1;this.onclick=null;checkslov();}
  document.getElementById("lv3").onclick = function() {lv3.style="opacity:0";slov+=1;this.onclick=null;checkslov();}
  document.getElementById("lv4").onclick = function() {lv4.style="opacity:0";slov+=1;this.onclick=null;checkslov();}
  function checkslov() {if(slov==4){kolombaru.style="position:relative;transform:scale(1)";fthilang();ftganti=1;setTimeout(ftmuncul,300);otomatis();setTimeout(aktipesan4,400);}}
  



function berjatuhan() {
    const heart = document.createElement("div");
    heart.innerHTML = "<p class='line spin' style='opacity:.1;z-index:100;font-size:13px'>💧</p>";
    heart.className = "heart-icon";
    heart.style.left = (Math.random() * 100) + "vw";
    heart.style.animationDuration = (Math.random() * 1) + 0.6 + "s";
    document.body.appendChild(heart);
}

setInterval(function () {
    var heartArr = document.querySelectorAll(".heart-icon");
    if (heartArr.length > 300) {
      heartArr[0].remove();
    }
}, 300);

 document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();
  const f5 = today.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  document.body.setAttribute("data-date", f5);
});
