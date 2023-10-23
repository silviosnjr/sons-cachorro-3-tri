function tocaSomBolinha(){
     document.querySelector("#som_tecla_bolinha").play();
}
  const ListadeTeclas = document.querySelectorAll(".tecla");

  ListadeTeclas[0].onclick = tocaSomBolinha;

