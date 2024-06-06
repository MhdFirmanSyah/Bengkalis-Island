// Loading 
window.addEventListener('load', () => {
  const loading = document.querySelector('#loading');
  loading.style.opacity = '0'
  setTimeout(() => {
      loading.style.display = 'none';
  }, 1000);

  // audio
  let audio = document.querySelector('audio');
  var currentTime = localStorage.getItem('currentTime');
  if (currentTime) {
    audio.currentTime = currentTime;
  }
  audio.addEventListener('timeupdate', function() {
    localStorage.setItem('currentTime', audio.currentTime);
  });
});

let img = document.getElementsByTagName('img');
Array.prototype.forEach.call(img, function(img) {
  img.setAttribute('draggable', 'false');
});

// Audio
window.addEventListener('load', function() {

});

// Nav Mobile Animation
const button = document.querySelectorAll('.nav-mobile a');

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    this.classList.add("nav-active");
    for (let j = 0; j < button.length; j++) {
      if (button[j] !== this) {
        button[j].classList.remove("nav-active");
      }
    }
  });
}

  // Bg Image Switcher
  const images = {
    0: {
      image: "lapangantugu",
      information: "Lapangan Tugu merupakan salah satu ruang publik yang paling populer di Bengkalis dan sering digunakan untuk berbagai kegiatan, seperti upacara bendera, konser musik, dan pameran"
    },
    1: {
      image: "Jokowismangroveplanting1",
      information: " Kegiatan penanaman pohon mangrove yang dilakukan oleh Presiden Joko Widodo di Kabupaten Bengkalis, Kegiatan ini bertujuan untuk menghijaukan kawasan pesisir dan melindungi ekosistem mangrove di Bengkalis."
    },
    2: {
      image: "MangroveatBukitbatu",
      information: "Hutan mangrove yang terletak di Desa Bukitbatu, Kecamatan Bengkalis. Hutan mangrove ini memiliki luas sekitar 500 hektare dan merupakan salah satu hutan mangrove terbesar di Bengkalis."
    },
    3: {
      image: "Nelayan",
      information: "Aktivitas penangkapan ikan dan hasil laut lainnya yang dilakukan oleh nelayan setempat. Bengkalis merupakan salah satu daerah penghasil ikan terbesar di Indonesia."
    },
    4: {
      image: "Perahujongselatbaru",
      information: "Perahu jong adalah sejenis perahu tradisional yang berasal dari daerah Selat Baru. Perahu ini dikenal dengan bentuknya yang unik dan ukurannya yang besar."
    },
    5: {
      image: "IstiqomahMosque2",
      information: "Masjid Istiqomah Bengkalis merupakan salah satu masjid terbesar dan tertua di Bengkalis dan menjadi salah satu ikon Kota Bengkalis."
    },
    // 0: {
    //   image: "ILoveBengkalis",
    //   information: "Foto I Love Bengkalis"
    // },
    // 1: {
    //   image: "IstiqomahMosque",
    //   information: "Foto Masjid Istiqomah"
    // },
    // 6: {
    //   image: "MangroveatBukitbatu2",
    //   information: "Foto Hutan Mangrove di Bukitbatu"
    // },
    // 9: {
    //   image: "Perahujong",
    //   information: "Foto Perahu Jong"
    // },
  //   10: {
  //     image: "RumahDatukLaksamanaBukitbatu",
  //     information: "Foto Rumah Datuk Laksamana di Bukitbatu"
  //   },
  //   11: {
  //     image: "Sunsetpesisir",
  //     information: "Foto Sunset di Pesisir"
  //   },
  //   12: {
  //     image: "Sunsetpesisir2",
  //     information: "Foto Sunset di Pesisir"
  //   }
  };
  
  const hero = document.querySelector('#content article img');
  const information = document.querySelector('.information');
  const previeous = document.querySelector('#previous');
  const next = document.querySelector('#next');

{let index = 0;
function changeBackgroundImage() {
  let gambarke = images[index]["image"]
  // let gambar = `url(assets/${gambarke}.webp)`
  let gambar = `assets/${gambarke}.webp`
  // hero.style.backgroundImage = gambar;
  hero.src = gambar;
  information.innerHTML = images[index]["information"];
  // previeous.onclick = index -= 1;
  next == onclick ? ++index : "";
  console.log(index);
  index = (index + 1);
  index == 6 ? index = 0 : '';}
setInterval(changeBackgroundImage, 10000);}
    // hero.style.backgroundImage = 'url(assets/${images[2]["image"]}.jpg)'

// Mapp
document.querySelector('#m1').addEventListener('click', () => {
  window.location.hash = "/";
  document.documentElement.style.overflow = 'auto';
});
document.querySelector('.enter').addEventListener('click', () =>{
    document.documentElement.style.overflow = 'hidden';
})