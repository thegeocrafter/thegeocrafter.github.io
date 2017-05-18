
$(function () {
        var contactMap = new L.Map('map', {maxBounds: ([[39.8462, -8.6931],[40.2169, -8.2278]])}).setView([39.9856, -8.4681], 14); 

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(contactMap);

        L.marker([39.9856, -8.4681]).addTo(contactMap)
        .bindPopup(
          '<span style="font-size: small" class="fa featured fa-home"></span>' +
          '<p>Rua da Capela, Serra</p>' +
          '<p>3240-416 Alvorge</p>' +
          '<p>PORTUGAL</p>' +
          '<span style="font-size: small" class="fa featured fa-mobile"></span>' +
          '<p>+351 918336529' +
          '<span style="font-size: small" class="fa featured fa-envelope"></span>' +
          '<a href="mailto:info@geocrafter.eu?Subject=Pedido de contacto" target="_top">info@geocrafter.eu</a>'
          )        
    });
