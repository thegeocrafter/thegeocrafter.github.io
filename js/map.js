
$(function () {
        var contactMap = new L.Map('map').setView([40.115, -8.5122], 14); 

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(contactMap);

        L.marker([40.115, -8.5122]).addTo(contactMap)
        .bindPopup(
          '<h2><b>Address:</b></h2>' +
          '<p>Urb. Qta. do Barroso, Lt. B17 2ºDto</p>' +
          '<p>3150-292 Sebal</p>' +
          '<p>PORTUGAL</p>'
          )        
    });
