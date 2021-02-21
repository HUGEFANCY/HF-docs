
var geo_array

function parse_from_layerstring()    {
    const goemetry_file = require("/assets/GeometryArray.json")
    var geo_array = JSON.parse(goemetry_file);
    console.log(geo_array);
}

parse_from_layerstring()