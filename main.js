// Loading 
window.addEventListener('load', () => {
  const loading = document.querySelector('#loading');
  loading.style.opacity = '0'
  setTimeout(() => {
      loading.style.display = 'none';
  }, 1000);
});

let img = document.getElementsByTagName('img');
Array.prototype.forEach.call(img, function(img) {
  img.setAttribute('draggable', 'false');
});

// Nav Mobile Animation
const button = document.querySelectorAll('.nav-mobile a');

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    this.classList.add("nav-active");
    for (var j = 0; j < button.length; j++) {
      if (button[j] !== this) {
        button[j].classList.remove("nav-active");
      }
    }
  });
}

// window.onscroll = function() {
//     var element = document.getElementById("yourElementId");
//     var position = element.getBoundingClientRect();
  
//     // cek jika elemen terlihat di viewport
//     if (position.top >= 0 && position.bottom <= window.innerHeight) {
//       console.log("Elemen telah terlihat di viewport");
//     }
//   }
  

  // Bg Image Switcher
  const hero = document.querySelector('.hero');
  const images = {
    0: {
      image: "Jokowismangroveplanting1",
      information: "Foto Jokowi menanam mangrove"
    },
    1: {
      image: "lapangantugu",
      information: "Foto Lapangan Tugu"
    },
    2: {
      image: "MangroveatBukitbatu",
      information: "Foto Hutan Mangrove di Bukitbatu"
    },
    3: {
      image: "Nelayan",
      information: "Foto Nelayan"
    },
    4: {
      image: "Perahujongselatbaru",
      information: "Foto Perahu Jong di Selat Baru"
    },
    // 0: {
    //   image: "ILoveBengkalis",
    //   information: "Foto I Love Bengkalis"
    // },
    // 1: {
    //   image: "IstiqomahMosque",
    //   information: "Foto Masjid Istiqomah"
    // },
    // 2: {
    //   image: "IstiqomahMosque2",
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
  

  // hero.style.backgroundImage = `url(assets/${images[3]["image"]}.jpg)`

  // Indeks untuk melacak gambar saat ini

{let index = 0;
function changeBackgroundImage() {
  let gambarke = images[index]["image"]
  let gambar = `url(assets/${gambarke}.jpg)`
  hero.style.backgroundImage = gambar;
  index = (index + 1);
  index == 5 ? index = 0 : '';
}
setInterval(changeBackgroundImage, 7000);}
    // hero.style.backgroundImage = 'url(assets/${images[2]["image"]}.jpg)'