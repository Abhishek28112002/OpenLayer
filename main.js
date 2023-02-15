var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([0, 0]),
      zoom: 2
    })
  });
  var vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: './map.geojson',
      format: new ol.format.GeoJSON()
    })
  });

  // add the vector layer to the map
  map.addLayer(vectorLayer);
  // create a dialog box
  var dialog = $('#dialog').dialog({
    autoOpen: false,
    modal: true,
    buttons: {
      OK: function() {
        $(this).dialog('close');
      }
    }
  });
console.log(map.getLayerGroup(vectorLayer));
  // add a click event listener to the vector layer
map.on('click', function(event) {
    console.log(event)
    // get the clicked feature and its attributes
//      var feature = event.target.getFeatures().item(0);
//     var attributes = feature.getProperties();
   
// console.log(feature)
    // create an HTML table to display the attributes
    var table = $('<table>');
    // for (var key in attributes) {
    //   if (key !== 'geometry') {
        table.append($('<tr>').append($('<td>').text("Latitue & Longitude"), $('<td>').text(event.coordinate)));
    //   }
    // }

    // set the table as the content of the dialog box and open it
    dialog.html(table);
    dialog.dialog('open');
  });