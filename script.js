var on = 1

var menu = document.getElementById("left").style
var cont = document.getElementById("right").style
var btn = document.getElementById("botaoMenu").style

function toggle(){
  menu.position = 'absolute'
  if(on == 1){//abrir
    on = 2        

    menu.animation = "abrir 0.5s 1"      
    menu.width = '100vw'
    menu.marginLeft = '0vw'
    
    btn.color = 'white'
    console.log(btn.color)

  }else if(on == 2){//fechar
    on = 1
    
    menu.animation = "fechar 0.5s 1"        
    
    setTimeout(function(){
      menu.marginLeft = '-28vw'
      btn.color = '#012c65'
      menu.width = '28vw'
    }, 490)
  }
}