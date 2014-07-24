
$(function () {
        var contactMap = new L.Map('map', {maxBounds: ([[40.0603,-8.5501],[40.1405,-8.3908]])}).setView([40.115, -8.5122], 14); 

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(contactMap);

        L.marker([40.115, -8.5122]).addTo(contactMap)
        .bindPopup(
          '<span style="font-size: small" class="fa featured fa-home"></span>' +
          '<p>Urb. Qta. do Barroso, Lt. B17 2ºDto</p>' +
          '<p>3150-292 Sebal</p>' +
          '<p>PORTUGAL</p>' +
          '<span style="font-size: small" class="fa featured fa-mobile"></span>' +
          '<p>+351 918336529'
          )        
    });
