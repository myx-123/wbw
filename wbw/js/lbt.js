var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    el: true,
    disableOnInteraction: false,
  },

  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  effect: 'fade',
  fade: {
    crossFade: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})

var mySwiperS = new Swiper('.swiper-container1', {
  loop: true,
  autoplay: {
    el: true,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})


$(function () {
  $('.navLi').mouseenter(function () {
    $(".xlk").slideDown('slow');
  })
  $('.navLi').mouseleave(function () {
    $(".xlk").slideUp('slow');
  })

  function fd(obj, w1, h1, w2, h2) {
    obj.mouseenter(function () {
      var oImg = $(this).children('img')
      oImg.animate({ width: w1, height: h1, left: '-15px', top: '-20px' }, 300)
    })
    obj.mouseleave(function () {
      var oImg = $(this).children('img')
      oImg.animate({ width: w2, height: h2, left: '0', top: '0' }, 300)
    })
  }
  fd($('.main1 a'), '291px', '300px', '271.6px', '280px')
  fd($('.main3-1 a'), '385px', '300px', '365px', '280px')
  fd($('.main5-1 a'), '385px', '374px', '365px', '354px')
  fd($('.main7-1 a'), '385px', '300px', '365px', '280px')
  fd($('.main9-1 a'), '385px', '374px', '365px', '354px')
})


// var div = document.body.children[0]
var neck2 = document.querySelector('.neck2')
var int = neck2.querySelector('input')
var ull = neck2.querySelector('ul')
var flag = true
int.addEventListener('comPositionStart', function () {
  flag = false
})
int.addEventListener('comPositionEnd', function () {
  flag = true
})
int.oninput = function () {

  setTimeout(function () {
    ull.style.display = 'block'
    if (flag) {
      var target = int.value
      var script = document.createElement('script')
      var sfn = 'phone' + new Date().getTime() + Math.random().toString().slice(2)
      script.src = "https://suggest.taobao.com/sug?code=utf-8&q=" + target + "&_ksTS=1563970517892_385&callback=" + sfn + "&k=1&area=c2c&bucketid=10"
      window[sfn] = function (data) {
        var result = data.result
        var str = ''
        result.forEach(function (value) {
          str += "<li>" + value[0] + "</li>"
        })
        ull.innerHTML = str
        script.remove()
      }
      document.body.appendChild(script)
      if (target == '') {
        ull.style.display = 'none'
      }
    }
  }, 0)


}


 list()
function list(){
  var lii = document.querySelectorAll('.list1 ul li')
  var laa = document.querySelectorAll('.list2 a')
  var list = document.querySelector('.list')
  var list1 = document.querySelector('.list2')
  console.log(laa)
  for(var i=0; i<lii.length; i++){
    lii[i].index = i
    lii[i].onmouseenter = function(){
      for(var i=0; i<lii.length; i++){
        lii[i].className = ''
        laa[i].className = ''
      }
      var index = this.index
      lii[index].className = 'active'
      laa[index].className = 'active'
    }
    
  }
  list.onmouseleave = function(){
   for(var i=0; i<laa.length; i++){
     laa[i].className = ''
     lii[i].className = ''
   }
  }
}



