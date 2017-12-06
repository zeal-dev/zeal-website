/* Google Map API Key: https://console.developers.google.com/apis/credentials */

      function initMap() {
        var zeal = {lat: 32.8374989, lng: -96.7794047};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: zeal
        });
        var marker = new google.maps.Marker({
          position: zeal,
          map: map
        });
      }
