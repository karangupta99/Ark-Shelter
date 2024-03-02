/*var image = document.querySelector(".containe img")
var cont = document.querySelector(".container")
var page1 = document.querySelector(".page1")

var h1 = document.querySelector(".loader h1")
var h1text = h1.textContent
console.log(h1text)

var splittext = h1text.split("")
console.log(splittext)
var clutter = ""

splittext.forEach(function (elem) {
  console.log(elem)
  clutter += `<span>${elem}</span>`
})

h1.innerHTML = clutter
var tl = gsap.timeline()
tl.from("h1 span", {
  x:100,
  opacity: 0,
  stagger: .1
})
tl.from(".container img", {
  y: 100,
  opacity: 0

})
tl.to(".loader", {
  opacity: 0,
})

tl.to(".page1", {
  y: -780,
})

tl.from(".text h2", {
  x: 60,

})
tl.from(".text h3", {
  x: -60,
  opacity: 0
})

*/







var tl = gsap.timeline()
var btn = document.querySelector("#btn")

var icon = document.querySelector("#btn i")



tl.from(".page1", {
  opacity: 0,
  y: 400,

})
tl.to(".page1", {
  scale: 1
})

icon.addEventListener("mouseenter", function () {
  btn.style.backgroundColor = "yellow"
})
icon.addEventListener("mouseleave", function () {
  btn.style.backgroundColor = "white"
})

tl.from("#nav,.bottom", {
  opacity: 0,

})

tl.from(".page1 h1", {
  y: 100,
  opacity: 0,
})



var textcontainer = document.querySelector(".text-container")
var bottom = document.querySelector(".bot")


textcontainer.addEventListener("mouseenter", function () {
  gsap.to(".bot", {
    top: 0
  })
  gsap.to("#icon-2", {
    left: 10,
    opacity: 1
  })

})



textcontainer.addEventListener("mouseleave", function () {
  gsap.to(".bot", {
    top: 150
  })
  gsap.to("#icon-2", {
    left: -20,
    opacity: 0
  })

})






function textanimation() {
  var image = document.querySelector(".inner-image img")
  var secondtext = document.querySelector(".second-text h4")
  var secondpara = document.querySelector(".second-text p")


  tl.to("#second-img", {
    scale: 0,



  })
  gsap.to(".main-text h2", {
    color: "black",
    duration: 1,
    delay: 2
  })
  gsap.to(".main-text .inner-line", {
    width: "100%",
    duration: 1,
    delay: 2,
    backgroundColor: "black"
  })
  tl.to("#first-img", {
    scale: 0,
    duration: 1,
    delay: 2,
  })

}


textanimation()



var ico = document.querySelector("#ico")
var btn1 = document.querySelector("#btn-1")
ico.addEventListener("mouseenter", function () {
  gsap.to("#btn-1", {
    backgroundColor: "yellow"
  })
})

ico.addEventListener("mouseleave", function () {
  gsap.to("#btn-1", {
    backgroundColor: "white"
  })
})



var part2 = document.querySelector("#part-2")
var part3 = document.querySelector("#part-3")
var part1 = document.querySelector("#part-1")



function boxicon() {

  part2.addEventListener("mouseenter", function () {
    gsap.to("#part-2 i", {
      scale: 1
    })
  })
  part3.addEventListener("mouseenter", function () {
    gsap.to("#part-3 i", {
      scale: 1
    })
  })

  part1.addEventListener("mouseenter", function () {
    gsap.to("#part-1 i", {
      scale: 1
    })
  })

  part2.addEventListener("mouseleave", function () {
    gsap.to("#part-2 i", {
      scale: 0
    })
  })
  part3.addEventListener("mouseleave", function () {
    gsap.to("#part-3 i", {
      scale: 0
    })
  })

  part1.addEventListener("mouseleave", function () {
    gsap.to("#part-1 i", {
      scale: 0
    })
  })
}


boxicon()


