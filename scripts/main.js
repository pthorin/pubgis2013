bespoke.horizontal.from('article', {
  scale: true,
  hash: true,
  bullets: 'li, .bullet'
});

var map = L.TileJSON.createMap('map', lmvTileJson);
map.setView([57.70062008114879, 11.97602928666158], 13);

function pulseIcon(r, className) {
  if (r == null) r = 50;
  var d = r * 2;
  return L.divIcon({
    html: '<div class="pulse"></div><div class="point'+
      (className?' '+className:'')+'"></div>',
    className: 'map-icon',
    iconSize: L.point(d, d),
    iconAnchor: L.point(r, r)
  });
}

var _pulseIcon = pulseIcon();
L.marker([57.70106857948243, 11.975991878576991], { icon: _pulseIcon}).addTo(map);
