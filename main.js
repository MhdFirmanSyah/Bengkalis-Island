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

// window.onscroll = function() {
//     let element = document.getElementById("yourElementId");
//     let position = element.getBoundingClientRect();
  
//     // cek jika elemen terlihat di viewport
//     if (position.top >= 0 && position.bottom <= window.innerHeight) {
//       console.log("Elemen telah terlihat di viewport");
//     }
//   }
  

  // Bg Image Switcher
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
  
  const hero = document.querySelector('.hero');
  const information = document.querySelector('.information p');

// {let index = 0;
// function changeBackgroundImage() {
//   let gambarke = images[index]["image"]
//   let gambar = `url(assets/${gambarke}.webp)`
//   hero.style.backgroundImage = gambar;
//   information.innerHTML = images[index]["information"];
//   index = (index + 1);
//   index == 5 ? index = 0 : '';

//   // Information
// }
// setInterval(changeBackgroundImage, 10000);}
//     // hero.style.backgroundImage = 'url(assets/${images[2]["image"]}.jpg)'


// Parallax
$(window).scroll(function(){
  var scroll = $(this).scrollTop();
  console.log(scroll)
  // $('.content').css({
  //   'transform' : 'translate('+scroll*2+'px, '+scroll+'px)'
  // });  
  $('.content h1').css({
    'transform' : 'translate('+scroll/.3+'px, '+scroll+'px)'
  });  
  $('.content h2').css({
    'transform' : 'translate(-'+scroll/.3+'px, '+scroll+'px)'
  });  
  $('.content p').css({
    'transform' : 'translate(0px, '+scroll/2+'px)'
  });  
  $('.content .btn').css({
    'transform' : 'translate(0px, '+scroll/1.8+'px)'
  });  
 
  if(scroll >= 700 ){
    $('.content p, .btn').css({
      'opacity' : 0
    })
  } else{
    $('.content p, .btn').css({
      'opacity' : 1
    })
  }

});