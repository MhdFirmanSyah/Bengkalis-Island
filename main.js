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
      information: "Kegiatan penanaman pohon mangrove yang dilakukan oleh Presiden Joko Widodo di Kabupaten Bengkalis, Kegiatan ini bertujuan untuk menghijaukan kawasan pesisir dan melindungi ekosistem mangrove di Bengkalis."
    },
    2: {
      image: "Jokowismangroveplanting2",
      information: "Kegiatan penanaman pohon mangrove yang dilakukan oleh Presiden Joko Widodo di Kabupaten Bengkalis, Kegiatan ini bertujuan untuk menghijaukan kawasan pesisir dan melindungi ekosistem mangrove di Bengkalis."
    },
    3: {
      image: "MangroveatBukitbatu",
      information: "Hutan mangrove yang terletak di Desa Bukitbatu, Kecamatan Bengkalis. Hutan mangrove ini memiliki luas sekitar 500 hektare dan merupakan salah satu hutan mangrove terbesar di Bengkalis."
    },
    4: {
      image: "Nelayan",
      information: "Aktivitas penangkapan ikan dan hasil laut lainnya yang dilakukan oleh nelayan setempat. Bengkalis merupakan salah satu daerah penghasil ikan terbesar di Indonesia."
    },
    5: {
      image: "Perahujongselatbaru",
      information: "Perahu jong adalah sejenis perahu tradisional yang berasal dari daerah Selat Baru. Perahu ini dikenal dengan bentuknya yang unik dan ukurannya yang besar."
    },
    6: {
      image: "Sunsetpesisir",
      information: "Suasana senja di pesisir bengkalis"
    },
    7: {
      image: "Sunsetpesisir2",
      information: "Suasana senja di pesisir bengkalis"
    },
    8: {
      image: "IstiqomahMosque2",
      information: "Masjid Istiqomah Bengkalis merupakan salah satu masjid terbesar dan tertua di Bengkalis dan menjadi salah satu ikon Kota Bengkalis."
    },
  };
  
  const hero = document.querySelector('#content article img');
  const information = document.querySelector('.information');

{let index = 0;
  if (localStorage.getItem('nilai')) {
    index = localStorage.getItem('nilai');
  }
  function changeBackgroundImage() {
      let gambarke = images[index]["image"]
      let gambar = `assets/${gambarke}.webp`
      hero.src = gambar;
      information.innerHTML = images[index]["information"];
      console.log(index)
      index = (index + 1);
      if(index <= 9){
        localStorage.setItem('nilai', index);
      } else{}
      index == 9 ? index = 0 : '';
    };
  setInterval(changeBackgroundImage, 1000);
  };
    // hero.style.backgroundImage = 'url(assets/${images[2]["image"]}.jpg)'


// Mapp
document.querySelector('#m1').addEventListener('click', () => {
  window.location.hash = "/";
  document.documentElement.style.overflow = 'auto';
});
document.querySelector('.enter').addEventListener('click', () =>{
    document.documentElement.style.overflow = 'hidden';
})