
  let nav = document.querySelector(".links")
  let a = document.querySelector(".bar_1")
  let b = document.querySelector(".bar_2")
  let c = document.querySelector(".bar_3")
  
  function demo(){
    if(nav.style.height=='0vh'){
      nav.style.height="40vh"
      b.style.opacity='0'
      a.style.transform='rotate(40deg)'
      c.style.transform='rotate(-40deg)'
      // console.log("work fine")
    }else{
      // console.log("not work")
        nav.style.height="0vh"
        a.style.transform='rotate(0deg)'
        b.style.opacity='1'
      c.style.transform='rotate(0deg)'
    }
  }