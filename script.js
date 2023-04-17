var on = 1

var menu = document.getElementById("left").style
var btn = document.getElementById("botaoMenu").style
var pfp = document.getElementById("pfp").style

function toggle(){
  menu.position = 'absolute'
  if(on == 1){//abrir
    on = 2        

    menu.animation = "abrir 0.5s 1"      
    menu.width = '100vw'
    menu.marginLeft = '0vw'

    pfp.width = '70vw'
    pfp.height = '70vw'
    
    btn.color = 'white'
    window.scrollTo(0,0);
    document.body.style.overflow = 'hidden'

  }else if(on == 2){//fechar
    on = 1
    document.body.style.overflow = ''
    
    menu.animation = "fechar 0.5s 1"
    btn.color = '#012c65'
    
    setTimeout(function(){
      menu.marginLeft = '-128vw'
    }, 490)
  }
}