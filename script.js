var timeleft = 5;
var downloadTimer = setInterval(function(){
  document.getElementById("contador").innerHTML ="<h2>Esperar " + timeleft + " segundos</h2>";
  timeleft -= 1;
  
  if(timeleft <= -1){
    clearInterval(downloadTimer);
    document.getElementById("contador").innerHTML ="<style>#contador{display:none;}#zero{display:block;}</style>"
  }

}, 1000)

function saltar() {
  document.getElementById("hideads").innerHTML ="<style>#hideads{display:none;}</style>"
}