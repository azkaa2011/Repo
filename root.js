// Membuat tag <style> baru
const style = document.createElement('style');
style.innerHTML = `
    :root {
--tombol-bg: rgba(0, 0, 0, .3); 
--tombol-teks: #fff;
--tombol-bingkai: #fff;
--bingkai: 8px;
--bingkai-kiri: 1.3px solid var(--tombol-bingkai);
--bingkai-kanan: 1.3px solid var(--tombol-bingkai);
--gaya-font: 'Shippori Antique', sans-serif;
--gaya-font2: 'Dancing Script', sans-serif;
}
 @keyframes fanim {0% {background-position: 0% 0%;}25% {background-position: 100% 100%;} 50% {background-position: 0% 100%;} 75% {background-position: 50% 50%;} 100% {background-position: 0% 0%;}}
    body{-WebKit-tap-highlight-color:transparent; outline: none;background:#111;font-family:var(--gaya-font);padding: 20px 25px;-webkit-user-select: none; -ms-user-select: none; user-select: none;} a{text-decoration:none;}
body::before{content: attr(data-date);color:white;opacity:.25;font-size:11px;position:fixed;bottom:25px;right:25px;z-index:2}
    #bodyblur{opacity:0;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.3);transition:all 1s ease;} 
    #wallpaper{width:100%;height:100%;transform: scale(2);transition:all 1.3s ease;}
    #beneranblur{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.3);-webkit-backdrop-filter:blur(0px); backdrop-filter:blur(0px);transition:all 3s ease;}
    
    @keyframes jj{0%  {transform: scale(1.1);} 50% {transform: scale(1.2);} 100% {transform: scale(1.1);}}
    @keyframes rts{from {transform:scale(.1);} to {transform:scale(1);}}
    @keyframes rto{from {transform:scale(1);} to {transform:scale(1.1);}}
    @keyframes aniopa{0% {transform: scale(1);} 50% {transform: scale(.75);} 100% {transform: scale(1);}}
    @keyframes rtf{from {transform: rotate(0deg);} to {transform: rotate(360deg);}} @keyframes rt{from {transform: scale(.9);/* transform: rotate(-5deg); */} to {transform: scale(1);/* transform: rotate(5deg); */}}
    @keyframes kont{0%  {left:-1px; top:-3px;} 50% {left:1px; top:3px;} 100% {left:-1px; top:-3px;}}
    
    blockquote{position:absolute;opacity:0;visibility:hidden;margin-top:100px;background:rgba(0,0,0,.3);box-shadow: rgba(255,255,255, 0.3) 0px 7px 29px 0px;transform: scale(.1);transition:all 1s ease;margin-top:120px;margin-left:0;margin-right:0;color:var(--tombol-teks);text-shadow: 0px 2px 2px rgba(0, 0, 0, .8);}
    blockquote{width:400px;text-align:center;line-height:1.3em;margin:0 20px;padding:20px 25px 8px 25px;border: 1px solid #fff;border-radius:14px}
    blockquote::before{content:attr(data-text);opacity:.7;font-family: sans-serif;position:absolute;left:8px;top:8px;min-width:15px;font-size:16px;text-align:center}
    blockquote p{font-size:15px;font-weight:700;line-height:1.4em;transition:all .5s ease;}
    blockquote > .sty2{font-size:16px;font-weight:500;}
    blockquote > .sty2b{font-size:16px;font-weight:400;}
    blockquote > .left{text-align:left}
    blockquote p:not(#opsL, #kalimat, #kalimatb, .sty2, .sty2b){display:none;}
    blockquote > #opsL{text-align:right;font-size:10px;font-weight:400;line-height:0;margin-top:24px;color:white;opacity:0;transition:all .2s ease;}
    
    span.merahmuda{color:pink}
    span.kuning{color:yellow}
    span.bold{font-weight:700}
    
    @keyframes shake {
      0%, 100% {transform: translateX(0);}
      10%, 30%, 50%, 70%, 90% {transform: translateX(-5px);}
      20%, 40%, 60%, 80% {transform: translateX(5px);}
    }
    .animated {animation: shake 0.3s ease-in-out 3;}
    
    #waktu{display:none}
    #kado1, #kado2, #kado3{font-size:16px;font-weight:400;}
    #kalimatAkhir{transform:scale(.1);}
    #kado1{position:absolute;opacity:0}
    #kalove{font-size:25px;line-height:0;}
    .kolombar .inibar{position:absolute;opacity:0;visibility:hidden;background-color:#fff;height:5px;width:100%}
    
    #Tombol{position:relative;opacity:0;margin:0;display:flex;align-items:left;list-style:none;transform: scale(.1);transition:all 1s ease;}
    #Tombol a{cursor:pointer;display:inline-flex;align-items:center; margin:0;margin:12px 0 12px 0;transition:all .2s ease;padding:10px;outline:0;border: 1px solid #fff;border-radius:12px;line-height:15px;background:rgba(0,0,0,.5);color:var(--tombol-teks);font-size:12px;font-weight:700;white-space:nowrap;overflow:hidden;box-shadow: rgba(255,255,255, 0.3) 0px 7px 29px 0px;z-index:1} 
    #Bn{margin:12px 0 12px 12px !important;}
    #Bn2{position:absolute;opacity:0;width:0}
    
    #Content{animation-name:none;animation-duration: 3s;animation-iteration-count: infinite;position:relative;opacity:0;margin-top:50px;width:100%;height:180px;transition:all .7s ease;}
    #Content > *{display:flex;align-items:center;text-align:center;justify-content:center;margin-top:1px;}
    .kumpulanstiker > img{display:none;background: rgba(255, 255, 255, .5);box-shadow: 0 4px 30px rgba(255,255,255, 0.3);backdrop-filter: blur(5px);-webkit-backdrop-filter: blur(5px);border: 1px solid rgba(255, 255, 255, 0.3);border-radius: 50%;padding:10px;width:85px;height:85px;margin:20px 0;}
    #fotostiker{opacity:.1;transition:all 1.2s ease;transform: scale(.1);}
    .utama{font-size:16px !important;position:relative;margin:15px 0 20px 0} 
    .utama.sty2{font-family:var(--gaya-font2);font-size:24px !important;margin-top:20px !important;}
    .utama.sty3{position:absolute !important;font-size:14px !important;font-weight:400 !important;margin:30px 20px !important;}
    #kalimatbawah{position: absolute;opacity:0;transform: scale(.3);margin:50px 0;font-family:var(--gaya-font2);font-size:20px;font-weight:700;color:white;text-shadow: 0px 2px 2px rgba(0, 0, 0, .8);transition:all .5s ease;}
    #tanggal{position: absolute;opacity:0;transform: scale(.3);transition:all .5s ease;}
    
    #fotolove img{transition:all .5s ease;width:75px;height:75px;padding:0;background:none}
    #kadoIn img{display:inline-flex;background:none;width:130px;height:130px;transition:all .3s ease;} 
    #ket, .utama{text-shadow: 0px 2px 2px rgba(0, 0, 0, .8);font-size:17px;font-weight:700;color:white}
    #ket{margin-top:25px !important;font-size:13px;font-weight:400;}
    #kadoIn img:hover{transform:scale(.9);}
    
    @keyframes leaves {0% {transform: scale(1.0);} 100% {transform: scale(.9);}}
    /* #loveIn{animation: leaves .7s ease-in-out infinite alternate;-webkit-animation: leaves 1s ease-in-out infinite alternate;} */
    .lovein{background:#fff;border-radius:50%;width:40px;height:40px;padding:10px;font-size:30px;display:flex;align-items:center;text-align:center;justify-content:center;transition:all .3s ease;}
    .lovein:hover{transform: scale(.9);}
      
    #kolombaru{position:absolute;opacity:0;display:flex;transform:scale(.1);transition:all 1s ease;align-items:center;text-align:center;justify-content:center;z-index:1;}
    #kolombaru > li{margin:8px;padding:0;list-style-type: none;}
    #kolombaru li{opacity:1;display:flex;font-size:30px}
    #kolombaru li:hover{animation: shake 0.3s ease-in-out 3;opacity:.5;transform: scale(1.15);transition:all 1s ease;}
    
    .kolomrange{padding:0;background:none;position:relative;z-index:1;display:none;transition:all 1s ease;align-items:center;}
    .kolomrange .inirange{width:100%;height:40px;margin-right:15px;display:flex;align-items:center;text-align:center;justify-content:center;}
    .kolomrange .inirange input{height:10px;width:100%;-webkit-appearance:none;outline:none;background:#f2f2f2;border-radius:25px;box-shadow:inset 0px 0px 4px rgba(0,0,0,0.2);}
    .kolomrange .inirange input::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;border:3px solid #006FFF;background:white;transition:all .2s ease;}
    .kolomrange .inirange input::-webkit-slider-thumb:hover{border:5px solid #006FFF;}
    .kolomrange .inivalue{color:white;font-size:20px}
    
    .swal2-modal > *{font-size:16px;color:white}
    .swal2-title{line-height:1.3em;font-size:17px;text-align:center;padding:15px 30px 0 30px;}
    .swal2-timer-progress-bar-container > *{opacity:.7;background:#00B6FF;margin:0 2px}
    .swal2-modal{background: rgba(0,0,0, .6);backdrop-filter: blur(3px);-webkit-backdrop-filter: blur(3px);box-shadow: 0 4px 30px rgba(255,255,255, 0.3);border: 1px solid rgba(255, 255, 255, 0.3);border-radius: 12px;max-width:310px;top:-60px;}
    .swal2-image{background: rgba(255, 255, 255, 0.5);box-shadow: 0 4px 30px rgba(255,255,255, 0.3);backdrop-filter: blur(5px);-webkit-backdrop-filter: blur(5px);border: 1px solid rgba(255, 255, 255, 0.3);border-radius: 50%;padding:10px;}
    .swal2-styled.swal2-confirm, .swal2-styled.swal2-cancel{position: relative;background-color: #4839eb;color: #fff;border-radius:18px;z-index: 1;transition: all 0.2s;}

    svg{vertical-align: middle;width: 22px;height: 22px;fill: #fff}
    .lovein svg{stroke:#ff0000 !important;stroke-width:1.3;fill:none !important;width:35px;height:35px}
    
    .heart-icon {z-index:100;width: 25px;height: 25px;position: fixed;animation:  heartMove linear 1;top: -10vh;}
    @keyframes heartMove {
        0% {transform: translateY(-10vh);}
        100% {transform: translateY(120vh);}
      }
          svg.line{fill: none;stroke: #fff;stroke-width: 2;animation: moving .7s linear infinite alternate;}
          .spin{animation: spin 3s linear infinite alternate;}
      @keyframes spin {
        from {
          transform: rotate(20deg);
        }
        to {
          transform: rotate(-20deg);
        }
                }
           
           
    .sembunyi, #pesanditolak > *, #kado2, #kado3{display:none !important}

`;

// Menambahkan tag <style> ke dalam <head>
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", function() {
    const htmlContent = `
       <!-- Ganti Audio di sini -->
   <audio src="https://inspirasi.vercel.app/melody2.mp3" id="linkmp3" class="sembunyi"></audio>
   
   <div id="bodyblur">
     <!-- Wallpaper --><img src="https://feeldreams.github.io/bromo.jpg" id="wallpaper"/><div id="beneranblur"></div>
   </div>
   
   <div id='Content'>

   <div id="loveIn">
       <a href="#" class="lovein"><svg class='line' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg></a>
     </div>
     <p id="ket">Sentuh LOVEnya!</p>

     <div class="kumpulanstiker">
         <!-- Stiker untuk Konten -->
         <img src="https://feeldreams.github.io/cilukba.gif" id="fotostiker"/>
         <img src="https://feeldreams.github.io/pandatopi.gif" id="fotostiker1"/>
         <img src="https://feeldreams.github.io/jogetin.gif" id="fotostiker3"/>
         <img src="https://feeldreams.github.io/peachsad2.gif" id="fotostiker4"/>
     </div>
     
     <p id="utama" class="utama"></p>
     
     <div><blockquote id='bq' data-text=''>
       
       <p id="kalimat"><span style="font-size:15px">&#65;&#107;&#117; &#80;&#117;&#110;&#121;&#97; &#80;&#101;&#115;&#97;&#110;<br>&#78;&#105;&#104; &#98;&#117;&#97;&#116; &#75;&#97;&#109;u 🫣⭐ </span></p>
<p id="kalimatb"></p>

<p id="pesan1">&#75;&#108;&#105;&#107; &#52; &#101;&#110;&#118;&#101;&#108;&#111;&#112;&#101; &#105;&#110;&#105;! &#x1F48C;</p>
       <div id="kolombaru">
         <li id="lv1">&#x1F48C</li>
         <li id="lv2">&#x1F48C</li>
         <li id="lv3">&#x1F48C</li>
         <li id="lv4">&#x1F48C</li>
       </div>

<p id="pesan4" class="sty2b"> 
  <span style="font-size: 15px;">M&#101;nd&#105;ng m&#97;n&#97;, &#73;nd&#111;m&#105;&#101; &#97;p&#97; M&#105;&#101; S&#101;d&#97;p? &#x1F914;</span>
</p>
<p id="pesan5" class="sty2b">
  M&#101;nd&#105;ng s&#97;d&#97;r d&#105;r&#105; d&#97;r&#105;p&#97;d&#97; b&#101;rh&#97;r&#97;p &#x1F92D;<br><br>
  <span style="font-size: 18px; margin-bottom: -50px;">&#x1F92D&#x1F606&#x1F602</span>
</p>
<p id="pesan6" class="sty2b left">M&#97;s&#97; m&#117;d&#97; &#105;t&#117; j&#97;ng&#97;n d&#105;b&#105;k&#105;n l&#101;l&#97;h, <br>&#107;&#101;j&#97;r m&#105;m&#112;&#105;, b&#117;k&#97;n y&#97;ng b&#105;k&#105;n r&#101;s&#97;h. <br>F&#111;k&#117;s d&#117;l&#117; s&#97;m&#97; m&#97;s&#97; d&#101;p&#97;n y&#97;ng c&#101;r&#97;h, <br>d&#97;r&#105;p&#97;d&#97; s&#105;b&#117;k n&#103;&#101;j&#97;r y&#97;ng &#117;j&#117;ngn&#121;&#97; &#101;nt&#97;h. <br><br><br><span style="font-size: 17px">🧘‍♂️💆‍♀️🌟🚀🎯✨🌞❓🌫️
</span>
</p>     
       <!-- Tombol Lanjut -->
       <p id="opsL">K&#108;&#105;&#107; &#117;&#110;&#116;&#117;&#107; &#76;&#97;&#110;&#106;&#117;&#116;</p>
     </blockquote></div>

   </div>
<script>
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
</script>
`;

    // Menambahkan HTML ke dalam elemen body
    document.body.innerHTML = htmlContent;
});