/**
 * @summary Simple shell website for Triceratops scene
 * @author Meli <meliharvey87@gmail.com>
 */

var camera, controls, scene, renderer;

console.log(window.location.href)



if (typeof geoarray == 'undefined') {
  var geoarray = '{"Winkelset11": {"Corner_Bracket_40x40": {}}, "Energiekette_X": {"Igus_Energiekette_Mittelstueck_S2500_07_075_0_1": {}, "Igus_Energiekette_Festpunkt_starr_mit_Kamm_S2500_07_075": {}}, "Aluprofil_40X40_L_1838": {}, "Riemenrollenhalter58": {"Riemenrollenhalter_Seite": {}, "Riemenrollenhalter_Winkelteil": {}}, "Linearachse_Franka_FD25_1700": {}, "Aluprofil_40X80_L_395": {}, "Winkelset": {"Corner_Bracket_40x40": {}}, "Riemenrollenhalter47": {"Riemenrollenhalter_Seite": {}, "Riemenrollenhalter_Winkelteil": {}}, "Riemenrollenhalter67": {"Riemenrollenhalter_Seite": {}, "Riemenrollenhalter_Winkelteil": {}}, "Aluprofil_40X80_L_1960": {}, "Aluprofil_40X40_L_122": {}, "Winkelset54": {"Corner_Bracket_40x40": {}}, "Franka_Schlitten_84363A-Kassette-FDA25K098": {}, "Abnehmer_starr_kamm_S2500_07_075002": {}, "Flachwinkel_80x80": {}, "Aluprofil_40X40_L_82_b": {}, "Winkelset60": {"Corner_Bracket_40x40": {}}, "Winkelset61": {"Corner_Bracket_40x40": {}}, "Riemenrollenhalter": {"Riemenrollenhalter_Seite": {}, "Riemenrollenhalter_Winkelteil": {}}, "Lagerplatte_Schlitten_Y_energiekettenversion": {}, "20x30x4_L-Profil_109": {}, "Corner_Bracket_40x40": {}, "Winkelset44": {"Corner_Bracket_40x40": {}}, "Energiekettenhalter_X_unten": {}, "Lagerplatte_Schlitten_Y_normal": {}}' ;
}
var geoarray_data = JSON.parse(geoarray);
console.log("test")
// printValues(geoarray_data);

var loader = new THREE.ObjectLoader();
// var testpath = loadfromdictionary(geoarray_data, "lkj");
var flatfile = flatten(geoarray_data)
var flat_keys = Object.keys(flatfile)
// console.log(flatfile)
// console.log(flat_keys)

if (typeof basepath == 'undefined') {
  var basepath = "/assets/HUGEFANCY_Printer/TESTIFTHISISVISIBLEITSWRONG/"
}
var geoarray_filepaths = []
for (var geopath of flat_keys){
  // console.log(geopath)
   var pathconcat = basepath + geopath.replace(/\./g, "/") + ".json"
  // console.log(pathconcat)
  geoarray_filepaths.push(pathconcat)
}
// console.log("next one is the flat array")
// console.log(geoarray_filepaths)

var Basescene = "/assets/Basescene.json"

init();
// 
// setTimeout(200);
animate();


function init() {
    
  scene = new THREE.Scene();

  // get the container element from the DOM
  container = document.getElementById('container');

  // create the rendered and set it to the height/width of the container
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.shadowMap.enabled = true; // if you don't want shadows, set to false
  renderer.setClearColor (0xeeeeee, 1); // this is the background color seen while scene is loading
  container.appendChild( renderer.domElement );

  // create camera (default field of view is 60)
  camera = new THREE.PerspectiveCamera( 60, container.clientWidth / container.clientHeight, 0.1, 10000 );
  camera.position.set( 4000, 4000, 4000 ); // starting position of the camera

  // camera controls to allow for orbiting
  controls = new THREE.OrbitControls( camera, renderer.domElement );
  controls.enableDamping = true; // creates a softer orbiting feel
  controls.dampingFactor = 0.05; // determines how soft
  controls.screenSpacePanning = true;
  controls.maxPolarAngle = Math.PI / 2;

  // this is only required when using RectAreaLight
  THREE.RectAreaLightUniformsLib.init();
  
  // load scene
  var loader = new THREE.ObjectLoader();
  // loadfromdictionary(geoarray_data, "lkj");
  
  loader.load(
    // resource URL
    // modelpath,
    Basescene,
  	// onLoad callback
  	function ( obj ) {
      // remove the loading text
      document.getElementById('progress').remove();
  		// assign the loaded object to the scene variable
  		scene = obj;},
      // onProgress callback
      function ( xhr ) {
        progressText( xhr )},
        function ( err ) {
          console.error( 'An error happened' );}
          );
          
  load_array(geoarray_filepaths, loader, scene)

  // listen for changes to the window size to update the canvas
  window.addEventListener( 'resize', onWindowResize, false );

}

// adds progress text while the model is loading
function progressText( xhr ) {
  var progress, textNode, text;

  if (document.getElementById('progress')) {
    document.getElementById('progress').remove();
  }

  if (xhr.lengthComputable) {
    text = 'loading: ' + Math.round((xhr.loaded / xhr.total * 100)) + '%'
  } else {
    text = 'loading: ' + Math.round(xhr.loaded / 1000) + 'kb'
  }

  console.log(text);

  progress = document.createElement('DIV');
  progress.id = 'progress';
  textNode = document.createTextNode(text);
  progress.appendChild(textNode)
  container.appendChild(progress)
}

// function for handling resize events
function onWindowResize() {

  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( container.clientWidth, container.clientHeight );

}

// animates the scene
function animate() {

  requestAnimationFrame( animate );

  controls.update();
  render();

}

function render() {

  renderer.render( scene, camera );

}


function get_baselayers(nestedarray){ 


}
function printValues(obj) {
  console.log("running print")
      for(var k in obj) {
        // console.log(Object.keys(k))
          if(obj[k] instanceof Object && Object.keys(obj[k]).length > 1 ) {
              printValues(obj[k]);
          } else {
              console.log(obj[k] + "test??");
          };
      }
  };

function loadfromdictionary(obj, loader, scene) {
  var loadpath = ""
  console.log("loadingfromarray:  "+ loadpath)
  for(var k in obj) {
    console.log(k)
      if(obj[k] instanceof Object && Object.keys(obj[k]).length > 1 ) {
        console.log("runnign   "+  obj[k])
        loadpath += Object.keys(obj[k]) + "/";
        loadpath += loadfromdictionary(obj[k])
          // loadfromdictionary(obj[k]);

      } else {
          console.log(obj[k] + "oka");
          console.log("returning: " + Object.keys(obj[k]))
          var great = Object.keys(obj[k]);
          console.log("grear: " + great)
          return great
      };
      }
  return "test"
  };

function load_array(array, loader) {
  for (let path of array){
    loader.load(
      // resource URL
      path,
      // onLoad callback
      function ( obj ) {
        // remove the loading text
        document.getElementById('progress').remove();
        // assign the loaded object to the scene variable
        scene.add(obj);
      },

      // onProgress callback
      function ( xhr ) {
        progressText( xhr ) // delete this if you don't want the progress text
      },

      // onError callback
      function ( err ) {
        console.error( 'An error happened' );
      }
    );
  
  }
};

function flatten (data) {
    var result = {};
    function recurse (cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
             for(var i=0, l=cur.length; i<l; i++)
                 recurse(cur[i], prop + "[" + i + "]");
            if (l == 0)
                result[prop] = [];
        } else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop+"."+p : p);
            }
            if (isEmpty && prop)
                result[prop] = {};
        }
    }
    recurse(data, "");
    return result;
};
