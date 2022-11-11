var status = document.getElementById("left").style.display

function toggle(){
  if(status == 'none'){
    document.getElementById("left").style.display = 'block'
    status = 'block'
    
    document.getElementById("right").style.width = '70vw'
    document.getElementById("contEsq").style.width = '45vw'
    document.getElementById("contDir").style.width = '45vw'
    
  }else if(status == 'block'){
    document.getElementById("left").style.display = 'none'
    status = 'none'

    document.getElementById("right").style.width = '100vw'
    console.log(window.screen.availWidth)
    console.log(window.innerWidth)
    if((window.innerWidth)<=700){
      document.getElementById("contEsq").style.width = '72vw'
      document.getElementById("contDir").style.width = '72vw'
    }else{
      document.getElementById("contEsq").style.width = '40vw'
      document.getElementById("contDir").style.width = '40vw'
    }    
  } 
}