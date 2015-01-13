google.maps.visualRefresh = true;

var map;

var iconMap = {
  'innerbar': 'green',
  'innerstore': 'yellow',
  'outerbar': 'lightblue',
  'outerstore': 'purple',
  'clicked': 'red'
};

for (var i in iconMap) {
  iconMap[i] = 'http://maps.google.com/mapfiles/ms/icons/' + iconMap[i] + '.png';
} 

var mapStyles =
[
  {
    "stylers": [
      { "saturation": -100 }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "saturation": 24 },
      { "lightness": -10 },
      { "hue": "#00b2ff" }
    ]
  },{
    "featureType": "road.highway",
    "stylers": [
      { "saturation": 84 },
      { "hue": "#ff9100" }
    ]
  },{
    "featureType": "road.arterial",
    "stylers": [
      { "hue": "#ffa200" },
      { "saturation": 36 }
    ]
  },{
    "featureType": "poi.park",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "simplified" }
    ]
  },{
    "featureType": "administrative.land_parcel",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "simplified" }
    ]
  },{
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text",
    "stylers": [
      { "hue": "#ffd500" },
      { "saturation": 10 },
      { "lightness": 36 }
    ]
  }
];

function initialise() {
  var mapDiv = document.getElementById('map');
  var mapOptions = {
    center: new google.maps.LatLng(-33.8583, 151.2078),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: mapStyles
  };
  map = new google.maps.Map(mapDiv, mapOptions);
  google.maps.event.addListener(map, 'click', function() {
    resetSidePanel();
    resetMarkers();
  });
  addLocations();
  resetSidePanel();
}

function renderAbout() {
  var panelContent = document.getElementById('sidePanelContent');
  var panelTitle = document.getElementById('sidePanelTitle');
  panelTitle.innerHTML = 'Sydney Beer Map';
  var panelTitleSub = document.getElementById('sidePanelTitleSub');
  panelTitleSub.innerHTML = '';
  var panelContentText = "<p>I originally created Sydney Beer Map as a resource for colleagues visiting Sydney from overseas. It was designed to be a list of places they could go to try out some good Australian craft beers, and check out what the local beer scene was like. It wasn't designed to be a comprehensive listing of everything craft beer related in Sydney, but enough that a visitor could find somewhere local to get a good beer. Fortunately, at the time, Sydney's craft beer venues could be counted on your fingers (perhaps fingers and toes), so it ended up being fairly comprehensive in any case.</p><p>Since then, the Sydney craft beer scene has exploded, and listing every venue that has craft beer on their taps would not only be infeasible, it would also defeat the purpose of giving a bit of a guide to the best venues to visit.</p><p>Nowadays, I try to strike a balance: I try to be fairly comprehensive for precincts that have a bunch of different venues (such as Surry Hills and Newtown), but I leave out some other venues in areas that aren't much of a destination for craft beer generally.</p><p>This means I include venues like Uncle Hops in Newtown, which isn't a great draw on its own, but is worth a stop if you're doing a crawl in Newtown anyway—but I leave out venues like the Old Fitzroy in Woolloomooloo, because although it's of a similar calibre, it's not worth visiting on its own.</p><p>Conversely, some venues that are genuinely worthy, yet isolated, and so warrant inclusion (e.g. Flat Rock and Cammeray Craft on the North Shore).</p><p>If you have any suggestions, or see any glaring omissions, feel free to contact me via <a href=\"http://twitter.com/jezfletcher\">Twitter</a></p><p><a href=\"#\" onclick=\"resetSidePanel()\">Return to list</a></p>";
  panelContent.innerHTML = panelContentText;
}

function resetSidePanel() {
  var panelContent = document.getElementById('sidePanelContent');
  var panelTitle = document.getElementById('sidePanelTitle');
  panelTitle.innerHTML = 'Sydney Beer Map';
  var panelTitleSub = document.getElementById('sidePanelTitleSub');
  panelTitleSub.innerHTML = '<a href="#" onclick="renderAbout()">About the Sydney Beer Map</a>'
  var panelData = '<table border=0>' +
    '<tr><td><img src="' + iconMap['innerbar'] + '"></td>' +
        '<td>&mdash; inner city bar/pub</td></tr>' +
    '<tr><td><img src="' + iconMap['outerbar'] + '"></td>' +
        '<td>&mdash; suburban bar/pub</td></tr>' +
    '<tr><td><img src="' + iconMap['innerstore'] + '"></td>' +
        '<td>&mdash; inner city beer store</td></tr>' +
    '<tr><td><img src="' + iconMap['outerstore'] + '"></td>' +
        '<td>&mdash; suburban beer store</td></tr>' +
    '</table>';
  panelData += '<br/>';
  panelData += '<table border=0>';
  for (var i in locations) {
    var loc = locations[i];
    panelData += '<tr>';
    panelData += '<td><a href="#" onclick="clickMarker(' + i + ')"><img src="' + iconMap[loc.type] + '"></a></td>';
    panelData += '<td>&nbsp;<a href="#" onclick="clickMarker(' + i + ')">' + loc.name + '</a></td>';
    panelData += '</tr>';
  }
  panelData += '</table>';
  panelContent.innerHTML = panelData;
}
 
var markers = [];

function addLocations() {
  for (var i in locations) {
    var loc = locations[i];

    var shape = {
      coord: [19,0,20,1,21,2,22,3,23,4,24,5,24,6,24,7,24,8,24,9,24,10,24,11,24,12,23,13,23,14,22,15,21,16,20,17,20,18,19,19,19,20,18,21,18,22,17,23,17,24,17,25,17,26,16,27,16,28,16,29,16,30,16,31,14,31,14,30,14,29,14,28,14,27,14,26,13,25,13,24,13,23,12,22,12,21,12,20,11,19,10,18,10,17,9,16,8,15,7,14,7,13,6,12,6,11,6,10,6,9,6,8,6,7,6,6,7,5,7,4,8,3,9,2,10,1,11,0,19,0],
      type: 'poly'
    };
    var markerOpts = {
      clickable: true,
      position: loc.location,
      map: map,
      shape: shape,
      icon: iconMap[loc.type]
    }
    var marker = new google.maps.Marker(markerOpts);
    marker.location = loc;
    markers.push(marker);
    google.maps.event.addListener(marker, 'click', getClickHandler(marker));
  }
}

function clickMarker(index) {
  var m = markers[index];
  google.maps.event.trigger(m, 'click');
}

function resetMarkers() {
  for (var i in markers) {
    var marker = markers[i];
    marker.setIcon(iconMap[marker.location.type]);
  }
}      

function reset() {
  resetMarkers();
  resetSidePanel();
}

function getClickHandler(m) {
  return function() {
    resetMarkers();
    m.setIcon(iconMap['clicked']);
    var loc = m.location;
    var panelContent = document.getElementById('sidePanelContent');
    var panelTitle = document.getElementById('sidePanelTitle');
    var panelTitleSub = document.getElementById('sidePanelTitleSub');
    panelTitleSub.innerHTML = '';
    
    titleContent = '<table><tr style="align: center;"><td><img src="' + iconMap['clicked'] + '" /></td>';
    if (loc.link) {
      titleContent += '<td class="sidePanelTitle"><a href="' + loc.link + '">' + loc.name + '</a></td></tr>';
    } else {
      titleContent += '<td class="sidePanelTitle">' + loc.name + '</td></tr>';
    }
    titleContent += '</table>';
    panelTitle.innerHTML = titleContent;
    nowtapped = '';
    if (loc.nowtapped) {
      nowtapped = '<a target="_blank" href="http://nowtapped.com/' + loc.nowtapped + '">Current Tap List</a> - via <a target="_blank" href="http://nowtapped.com/">NowTapped</a>';
    }
    panelContent.innerHTML = '' +
      nowtapped +
      '<p class="address">' + loc.address + '</p>' +
      '<p>' + loc.description + '</p>';
    
  }
}
