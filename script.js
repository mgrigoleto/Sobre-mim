let on = 1

const menu = document.getElementById("left").style
const btndiv = document.getElementById("botaoMenu").style
const pfp = document.getElementById("pfp").style
const content = document.getElementById("right").style

function toggle(){
  menu.position = 'absolute'
  if(on == 1){//abrir
    on = 2        

    menu.animation = "abrir 0.5s 1"      
    menu.width = '100vw'
    menu.marginLeft = '0vw'

    pfp.width = '70vw'
    pfp.height = '70vw'
    
    btndiv.color = 'white'

    window.scrollTo(0,0);

    setTimeout(function(){
      content.display = 'none'
    }, 450)

  }else if(on == 2){//fechar
    on = 1
    document.body.style.overflow = ''
    content.display = 'flex'
    
    menu.animation = "fechar 0.5s 1"
    btndiv.color = '#012c65'
    
    setTimeout(function(){
      menu.marginLeft = '-128vw'
    }, 450)
  }
}