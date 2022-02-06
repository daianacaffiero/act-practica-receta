let cad= `
<h1 class="animate__animated animate__bounceIn">Recetas de Cocina</h1>
    
<!--INICIO NAV CON BOOTSTRAP-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="acercade.html">Acerca de</a>
            </li>
            /* <li class="nav-item">
              <a class="nav-link" href="contacto.html">Contacto</a>
            </li> */
            <li class="nav-item">
              <a class="nav-link" href="registrese.html">Registrese</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sucursales.html">Sucursales</a>
            </li>
            <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="acercade.html">Acerca de</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
<!--FIN NAV CON BOOTSTRAP-->
`
document.getElementById("idheader").innerHTML=cad;


cad=`
<a href="https://twitter.com/?lang=es" target="_blank"><i class="fab fa-twitter"></i></a>
<a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>
<a href="https://www.instagram.com/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
<a href="https://ar.pinterest.com/" target="_blank"><i class="fab fa-pinterest"></i></a>
<a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a>

<p>Derechos reservados @2021</p>
`
document.getElementById("idfooter").innerHTML=cad;

// /Card de Bootstrap/ 
cad=`
<div class="card" style="width: 24rem;">
    <img src="img/chipa.jpg" class="card-img-top" alt="chipa">
  <div class="card-body">
    <h5 class="card-title">Chipá</h5>
    <p class="card-text">Infaltable para el mate.</p>
    <a href="#" class="btn btn-primary">Ver Receta</a>
  </div>
</div>
<div class="card" style="width: 24rem;">
      <img src="img/bizcochuelo.jpg" class="card-img-top" alt="bizcochuelo">
      <div class="card-body">
        <h5 class="card-title">Bizcochuelo fácil</h5>
        <p class="card-text">Bizcochuelo con sólo 3 ingredientes.</p>
        <a href="#" class="btn btn-primary">Ver Receta</a>
      </div>
</div>
<div class="card" style="width: 24rem;">
  <img src="img/galletaschoco.jpg" class="card-img-top" alt="bizcochuelo">
  <div class="card-body">
    <h5 class="card-title">Galletas de Chocolate</h5>
    <p class="card-text">Galles de choco y maní.</p>
    <a href="#" class="btn btn-primary">Ver Receta</a>
  </div>
</div>
<div class="card" style="width: 24rem;">
  <img src="img/magdalenas.jpg" class="card-img-top" alt="bizcochuelo">
  <div class="card-body">
    <h5 class="card-title">Magdalenas</h5>
    <p class="card-text">Magdalenas sin Lactosa y sin Gluten.</p>
    <a href="#" class="btn btn-primary">Ver Receta</a>
  </div>
</div>
<div class="card" style="width: 24rem;">
  <img src="img/pancasero.jpg" class="card-img-top" alt="bizcochuelo">
  <div class="card-body">
    <h5 class="card-title">Pan Casero</h5>
    <p class="card-text">Pan Casero sin amasado.</p>
    <a href="#" class="btn btn-primary">Ver Receta</a>
  </div>
</div>
<div class="card" style="width: 24rem;">
  <img src="img/hummus.jpg" class="card-img-top" alt="bizcochuelo">
  <div class="card-body">
    <h5 class="card-title">Hummus</h5>
    <p class="card-text">Hummus Clásico.</p>
    <a href="#" class="btn btn-primary">Ver Receta</a>
  </div>
</div>
`
if(document.getElementById("idcard")){
  cad=`
  
  
  `
  for(var i=0; i<data.length; i++){
    cad+=`
    <img src="${data[i].imagen}">
    <div class="card-body">
      <h5>${data[i].nombre}</h5>
      <p>${data[i].descripcion}</p>
    `
  }
    cad+=`
      </div>
    `
    console.log(cad);
  
    document.getElementById("idcard").innerHTML=cad;
  }
  

/* 
if (document.getElementById("idcard")){
  cad=`
  <div class="card" style+"width: 24rem;">
  <img class="card-img-top">
    <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">Ver Receta</a>
    </div>
  </div>
  `

  for(var i=0; i<data.length; i++){
    cad+=`<div class="card" style="width: 24rem;">
    <img src="${data[i].imagen}">
    <div class="card-body">
      <h5>${data[i].nombre}</h5>
      <p>${data[i].descripcion}</p>
    </div>
    </div>`
  }
cad+=`
  </div>
`
}


console.log(cad)
document.getElementById("idcard").innerHTML=cad;

 */
//tabla//
if(document.getElementById("idtabla")){
cad=`
<table>
<tr>
  <th>Imagen</th>
  <th>Nombre</th>
  <th>Descripcion</th>
</tr>
`
for(var i=0; i<data.length; i++){
  cad+=`
    <tr>
      <td><img src="${data[i].imagen}"></td>
      <td>${data[i].nombre}</td>
      <td>${data[i].descripcion}</td>
    </tr>
  `
}
  cad+=`
    </table>
  `
  console.log(cad);

  document.getElementById("idtabla").innerHTML=cad;
}
