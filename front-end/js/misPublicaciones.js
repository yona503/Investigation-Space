function obtenerPubliaciones(buscar) {

  $.ajax({
    url: "../../../back-end/models/publicacionesModel.php",
    type: 'POST',
    data: { buscar: buscar },
  })
    .done(function (result) {

      if (result == 0) {
        $("#publicaciones").html("<h3>No hay datos que mostrar</h3>");
      } else {
        const datos = JSON.parse(result);
        let publicaciones = '';
        datos.forEach(datos => {
          publicaciones += `<div class="card margen" style="width: 18rem;" >
          <img src="../../img/${datos.articuloImg}" class="card-img-top" alt="Cargando...">
          <div class="card-body">
            <h5 class="card-title">${datos.articuloNom}</h5>
            <p class="card-text">${datos.articuloDescrip}</p>
          </div>
          <div class="card-footer text-muted">
            fecha de publicacion ${datos.articuloFech}
          </div>
        </div>`;
        });

        $("#publicaciones").html(publicaciones);
      }
    })
}

$(obtenerPubliaciones());

$(document).on('keyup', '#txtBuscar', function () {
  let valorBusqueda = $(this).val();
  if (valorBusqueda != "") {
    obtenerPubliaciones(valorBusqueda);
  } else {
    obtenerPubliaciones();
  }
});