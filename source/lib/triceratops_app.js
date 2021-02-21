/**
 * @summary Simple shell website for Triceratops scene
 * @author Meli <meliharvey87@gmail.com>
 */

var camera, controls, scene, renderer;

console.log(window.location.href)

init();
animate();

var geoarray = '{"Z-Axis": {"M8_Aussensechskant_110": {"M8_Aussensechskant_110": {}}, "Gegenpressplatte_Extruder": {"Gegenpressplatte_Extruder": {}}, "Farbmischeinheit": {"Farbmischeinheit": {"Schrittmotor_Nema_17_ST4118X0404-A": {"Schrittmotor_Nema_17_ST4118X0404-A": {}}, "farbmischer_platte_2": {"farbmischer_platte_2": {}}, "Farbmischeinheit_Befestigung_2": {"Farbmischeinheit_Befestigung_2": {"Block_03": {"Block_03": {}}}}}}, "Einlauf": {"Einlauf": {"Einlauf_Extruder": {"Einlauf_Extruder": {}}, "Einlauf_Auslaufteil": {"Einlauf_Auslaufteil": {}}}}, "Treiber_Nanotec_N5_Modbus_RTU": {"Treiber_Nanotec_N5_Modbus_RTU": {}}, "Tank_Fenster_mitte": {"Tank_Fenster_mitte": {}}, "Tank_Trichter_Blech": {"Tank_Trichter_Blech": {}}, "Hitzeschild_Extruder_Trichter": {"Hitzeschild_Extruder_Trichter": {}}, "Endstopliner_z": {"Endstopliner_z": {}}, "Seite_L-fter": {"Seite_L-fter": {}}, "Kondensator_Servomotor": {"Kondensator_Servomotor": {}}, "geh-use_Endstop_z": {"geh-use_Endstop_z": {}}, "Trichter_Granulat": {"Trichter_Granulat": {}}, "Tank_Fenster_oben": {"Tank_Fenster_oben": {}}, "Servo_Extruderantrieb": {"Servo_Extruderantrieb": {"Getriebe_Servo_Nanotec_GPLE80-2S-F87": {"Getriebe_Servo_Nanotec_GPLE80-2S-F87": {"Getriebe_Servo_Nanotec_210-217_065-001": {"Getriebe_Servo_Nanotec_210-217_065-001": {}}, "Getriebe_Servo_Nanotec_PLE80_2_14_38_73_98P4_B5_M6": {"Getriebe_Servo_Nanotec_PLE80_2_14_38_73_98P4_B5_M6": {}}}}, "Servo_Nanotec_DB87L": {"Servo_Nanotec_DB87L": {}}}}, "Riemenrad_M-dler_HTD_3M_36Z_17023600": {"Riemenrad_M-dler_HTD_3M_36Z_17023600": {}}, "Riemen1-2": {"Riemen1-2": {}}, "Relayeinheit_AC": {"Relayeinheit_AC": {"Box_AC_Relays_Deckel": {"Box_AC_Relays_Deckel": {}}, "SSR-40_DA": {"SSR-40_DA": {"SSR-40_DA.iam88": {"SSR-40_DA.iam88": {"SSR-40_DA_Small_P_W_S.iam46": {"SSR-40_DA_Small_P_W_S.iam46": {"SSR-40_DA_Small_Plate.ipt": {"SSR-40_DA_Small_Plate.ipt": {}}, "SSR-40_DA_Screw.ipt": {"SSR-40_DA_Screw.ipt": {}}, "SSR-40_DA_Lock_Washer.ipt": {"SSR-40_DA_Lock_Washer.ipt": {}}}}, "SSR-40_DA_BOTTOM.ipt": {"SSR-40_DA_BOTTOM.ipt": {}}, "SSR-40_DA_Large_P_W_S.iam77": {"SSR-40_DA_Large_P_W_S.iam77": {"SSR-40_DA_Big_Plate.ipt": {"SSR-40_DA_Big_Plate.ipt": {}}, "SSR-40_DA_Screw.ipt": {"SSR-40_DA_Screw.ipt": {}}, "SSR-40_DA_Lock_Washer.ipt": {"SSR-40_DA_Lock_Washer.ipt": {}}}}, "SSR-40_DA_Large_P_W_S.iam63": {"SSR-40_DA_Large_P_W_S.iam63": {"SSR-40_DA_Big_Plate.ipt": {"SSR-40_DA_Big_Plate.ipt": {}}, "SSR-40_DA_Screw.ipt": {"SSR-40_DA_Screw.ipt": {}}, "SSR-40_DA_Lock_Washer.ipt": {"SSR-40_DA_Lock_Washer.ipt": {}}}}, "SSR-40_DA_Small_P_W_S.iam64": {"SSR-40_DA_Small_P_W_S.iam64": {"SSR-40_DA_Small_Plate.ipt": {"SSR-40_DA_Small_Plate.ipt": {}}, "SSR-40_DA_Screw.ipt": {"SSR-40_DA_Screw.ipt": {}}, "SSR-40_DA_Lock_Washer.ipt": {"SSR-40_DA_Lock_Washer.ipt": {}}}}, "SSR-40_DA_TOP.ipt": {"SSR-40_DA_TOP.ipt": {}}}}}}, "Box_AC_Relays": {"Box_AC_Relays": {}}, "SSR-40_DA93": {"SSR-40_DA93": {"SSR-40_DA.iam89": {"SSR-40_DA.iam89": {"SSR-40_DA_BOTTOM.ipt": {"SSR-40_DA_BOTTOM.ipt": {}}, "SSR-40_DA_Large_P_W_S.iam43": {"SSR-40_DA_Large_P_W_S.iam43": {"SSR-40_DA_Big_Plate.ipt": {"SSR-40_DA_Big_Plate.ipt": {}}, "SSR-40_DA_Screw.ipt": {"SSR-40_DA_Screw.ipt": {}}, "SSR-40_DA_Lock_Washer.ipt": {"SSR-40_DA_Lock_Washer.ipt": {}}}}, "SSR-40_DA_Small_P_W_S.iam84": {"SSR-40_DA_Small_P_W_S.iam84": {"SSR-40_DA_Small_Plate.ipt": {"SSR-40_DA_Small_Plate.ipt": {}}, "SSR-40_DA_Screw.ipt": {"SSR-40_DA_Screw.ipt": {}}, "SSR-40_DA_Lock_Washer.ipt": {"SSR-40_DA_Lock_Washer.ipt": {}}}}, "SSR-40_DA_Small_P_W_S.iam32": {"SSR-40_DA_Small_P_W_S.iam32": {"SSR-40_DA_Small_Plate.ipt": {"SSR-40_DA_Small_Plate.ipt": {}}, "SSR-40_DA_Screw.ipt": {"SSR-40_DA_Screw.ipt": {}}, "SSR-40_DA_Lock_Washer.ipt": {"SSR-40_DA_Lock_Washer.ipt": {}}}}, "SSR-40_DA_TOP.ipt": {"SSR-40_DA_TOP.ipt": {}}, "SSR-40_DA_Large_P_W_S.iam": {"SSR-40_DA_Large_P_W_S.iam": {"SSR-40_DA_Big_Plate.ipt": {"SSR-40_DA_Big_Plate.ipt": {}}, "SSR-40_DA_Screw.ipt": {"SSR-40_DA_Screw.ipt": {}}, "SSR-40_DA_Lock_Washer.ipt": {"SSR-40_DA_Lock_Washer.ipt": {}}}}}}}}, "SSR-40_DA90": {"SSR-40_DA90": {"SSR-40_DA.iam": {"SSR-40_DA.iam": {"SSR-40_DA_Small_P_W_S.iam41": {"SSR-40_DA_Small_P_W_S.iam41": {"SSR-40_DA_Small_Plate.ipt": {"SSR-40_DA_Small_Plate.ipt": {}}, "SSR-40_DA_Screw.ipt": {"SSR-40_DA_Screw.ipt": {}}, "SSR-40_DA_Lock_Washer.ipt": {"SSR-40_DA_Lock_Washer.ipt": {}}}}, "SSR-40_DA_Large_P_W_S.iam50": {"SSR-40_DA_Large_P_W_S.iam50": {"SSR-40_DA_Big_Plate.ipt": {"SSR-40_DA_Big_Plate.ipt": {}}, "SSR-40_DA_Screw.ipt": {"SSR-40_DA_Screw.ipt": {}}, "SSR-40_DA_Lock_Washer.ipt": {"SSR-40_DA_Lock_Washer.ipt": {}}}}, "SSR-40_DA_Small_P_W_S.iam": {"SSR-40_DA_Small_P_W_S.iam": {"SSR-40_DA_Small_Plate.ipt": {"SSR-40_DA_Small_Plate.ipt": {}}, "SSR-40_DA_Screw.ipt": {"SSR-40_DA_Screw.ipt": {}}, "SSR-40_DA_Lock_Washer.ipt": {"SSR-40_DA_Lock_Washer.ipt": {}}}}, "SSR-40_DA_BOTTOM.ipt": {"SSR-40_DA_BOTTOM.ipt": {}}, "SSR-40_DA_Large_P_W_S.iam65": {"SSR-40_DA_Large_P_W_S.iam65": {"SSR-40_DA_Big_Plate.ipt": {"SSR-40_DA_Big_Plate.ipt": {}}, "SSR-40_DA_Screw.ipt": {"SSR-40_DA_Screw.ipt": {}}, "SSR-40_DA_Lock_Washer.ipt": {"SSR-40_DA_Lock_Washer.ipt": {}}}}, "SSR-40_DA_TOP.ipt": {"SSR-40_DA_TOP.ipt": {}}}}}}, "SSR-40_DA91": {"SSR-40_DA91": {"SSR-40_DA.iam86": {"SSR-40_DA.iam86": {"SSR-40_DA_BOTTOM.ipt": {"SSR-40_DA_BOTTOM.ipt": {}}, "SSR-40_DA_Small_P_W_S.iam55": {"SSR-40_DA_Small_P_W_S.iam55": {"SSR-40_DA_Small_Plate.ipt": {"SSR-40_DA_Small_Plate.ipt": {}}, "SSR-40_DA_Screw.ipt": {"SSR-40_DA_Screw.ipt": {}}, "SSR-40_DA_Lock_Washer.ipt": {"SSR-40_DA_Lock_Washer.ipt": {}}}}, "SSR-40_DA_Small_P_W_S.iam29": {"SSR-40_DA_Small_P_W_S.iam29": {"SSR-40_DA_Small_Plate.ipt": {"SSR-40_DA_Small_Plate.ipt": {}}, "SSR-40_DA_Screw.ipt": {"SSR-40_DA_Screw.ipt": {}}, "SSR-40_DA_Lock_Washer.ipt": {"SSR-40_DA_Lock_Washer.ipt": {}}}}, "SSR-40_DA_TOP.ipt": {"SSR-40_DA_TOP.ipt": {}}, "SSR-40_DA_Large_P_W_S.iam69": {"SSR-40_DA_Large_P_W_S.iam69": {"SSR-40_DA_Big_Plate.ipt": {"SSR-40_DA_Big_Plate.ipt": {}}, "SSR-40_DA_Screw.ipt": {"SSR-40_DA_Screw.ipt": {}}, "SSR-40_DA_Lock_Washer.ipt": {"SSR-40_DA_Lock_Washer.ipt": {}}}}, "SSR-40_DA_Large_P_W_S.iam26": {"SSR-40_DA_Large_P_W_S.iam26": {"SSR-40_DA_Big_Plate.ipt": {"SSR-40_DA_Big_Plate.ipt": {}}, "SSR-40_DA_Screw.ipt": {"SSR-40_DA_Screw.ipt": {}}, "SSR-40_DA_Lock_Washer.ipt": {"SSR-40_DA_Lock_Washer.ipt": {}}}}}}}}, "SC4-4": {"SC4-4": {}}, "Wago_221-415": {"Wago_221-415": {}}}}, "Gegenpressring_Spannbuchse_Extruder": {"Gegenpressring_Spannbuchse_Extruder": {}}, "Stopmutter_M12": {"Stopmutter_M12": {}}, "Riemenrad_M-dler_HTD_3M_20Z_17022000": {"Riemenrad_M-dler_HTD_3M_20Z_17022000": {}}, "Linearachse_Festo_EGC-80-1500-BS-10P-KF-0H-ML-GK.stp": {"Linearachse_Festo_EGC-80-1500-BS-10P-KF-0H-ML-GK.stp": {}}, "BG_PCB_Extruder": {"BG_PCB_Extruder": {"Geh-use_PCB_Extruder": {"Geh-use_PCB_Extruder": {}}, "Extruder_PCB_Silkscreen": {"Extruder_PCB_Silkscreen": {}}, "PCB_Extruder": {"PCB_Extruder": {}}}}, "Tank_lange_Kante": {"Tank_lange_Kante": {}}, "Zusatzhalterung_Lager": {"Zusatzhalterung_Lager": {}}, "PFC1212DE-F00": {"PFC1212DE-F00": {}}, "Tank_BlechBefestigung": {"Tank_BlechBefestigung": {}}, "Verschraubplatten_LinearachsenZ": {"Verschraubplatten_LinearachsenZ": {}}, "Wasserk-hlung_Radiator_Blech_Befestigung": {"Wasserk-hlung_Radiator_Blech_Befestigung": {}}, "Schraubklotz_Fr-steil_Extruder": {"Schraubklotz_Fr-steil_Extruder": {}}, "Riemen2-3": {"Riemen2-3": {}}, "Halterung_Extruder_Fr-steil": {"Halterung_Extruder_Fr-steil": {}}, "Tank_Unterteilung_Fenster": {"Tank_Unterteilung_Fenster": {}}, "Extruder_IDE": {"Extruder_IDE": {"015921": {"015921": {}}, "093713": {"093713": {}}, "006603": {"006603": {}}, "037406": {"037406": {}}, "Scheibe_Nozzle": {"Scheibe_Nozzle": {}}, "064576": {"064576": {}}, "nozzle": {"nozzle": {}}, "DIN_936_14_H_M52x3_Stahl": {"DIN_936_14_H_M52x3_Stahl": {}}, "IDE_Schnecke_Extruder": {"IDE_Schnecke_Extruder": {"Block_04": {"Block_04": {}}}}, "006252": {"006252": {}}, "093723": {"093723": {}}}}, "Stepper_Nanotec_Nema_34_+_Encoder_+_Brake27": {"Stepper_Nanotec_Nema_34_+_Encoder_+_Brake27": {"WEDS5541-Bxx002": {"WEDS5541-Bxx002": {}}, "Brake-BKE-2_0-6_35.stp002": {"Brake-BKE-2_0-6_35.stp002": {}}, "ST8918S4508-B002": {"ST8918S4508-B002": {}}}}, "L-fterblech": {"L-fterblech": {}}, "Farbmischer_Motortreiberhalter": {"Farbmischer_Motortreiberhalter": {}}, "Kabelhalter_m5": {"Kabelhalter_m5": {}}, "Schlauch_Exit": {"Schlauch_Exit": {}}, "Linearachse_Festo_EGC-80-1500-BS-10P-KF-0H-MR-GK.stp": {"Linearachse_Festo_EGC-80-1500-BS-10P-KF-0H-MR-GK.stp": {}}, "Verschraubplatten_LinearachsenZ_ventil": {"Verschraubplatten_LinearachsenZ_ventil": {}}, "Farbmischer_Motortreiberhalter_Deckel": {"Farbmischer_Motortreiberhalter_Deckel": {}}, "Wasserk-hlung_Radiator": {"Wasserk-hlung_Radiator": {"Radiator_120-360-45": {"Radiator_120-360-45": {}}, "L-fter_120mm_platine": {"L-fter_120mm_platine": {"Block_05": {"Block_05": {}}}}}}, "rotery_encoder_encoder_NUE": {"rotery_encoder_encoder_NUE": {}}, "Axiallager_Nadelrollen_SKF_AXW_20": {"Axiallager_Nadelrollen_SKF_AXW_20": {}}, "Tank_Blech_Abschluss_unteb": {"Tank_Blech_Abschluss_unteb": {}}, "Granulattank_Blech_au-en": {"Granulattank_Blech_au-en": {}}, "Energiekette_Z_Achse": {"Energiekette_Z_Achse": {"Igus_Energiekette_Mittelstueck_S2500_07_075_0_1": {"Igus_Energiekette_Mittelstueck_S2500_07_075_0_1": {}}, "Igus_Energiekette_Festpunkt_starr_mit_Kamm_S2500_07_075": {"Igus_Energiekette_Festpunkt_starr_mit_Kamm_S2500_07_075": {}}}}, "M5_Innensechskant_20": {"M5_Innensechskant_20": {}}, "Tank_schiefer_Winkel": {"Tank_schiefer_Winkel": {}}, "Verschraubplatten_LinearachsenZ_energiekette": {"Verschraubplatten_LinearachsenZ_energiekette": {}}, "Stepper_Nanotec_Nema_34_+_Encoder_+_Brake": {"Stepper_Nanotec_Nema_34_+_Encoder_+_Brake": {"WEDS5541-Bxx002": {"WEDS5541-Bxx002": {}}, "Brake-BKE-2_0-6_35.stp002": {"Brake-BKE-2_0-6_35.stp002": {}}, "ST8918S4508-B002": {"ST8918S4508-B002": {}}}}, "Halterung_Motoren_Z_Achse": {"Halterung_Motoren_Z_Achse": {}}, "Tank_Fenster_unten": {"Tank_Fenster_unten": {}}, "C5-E": {"C5-E": {}}, "Spannbuchse_M-dler_61530020.stp": {"Spannbuchse_M-dler_61530020.stp": {}}, "Schraubklotz_Fr-steil_Extruder_kleiner": {"Schraubklotz_Fr-steil_Extruder_kleiner": {}}, "Tank_Blech_Abschluss_oben": {"Tank_Blech_Abschluss_oben": {}}, "Zusatzhalterung_Lager_zu": {"Zusatzhalterung_Lager_zu": {}}, "Abdeckung_Farbmischer": {"Abdeckung_Farbmischer": {}}, "Displayhalteplatte": {"Displayhalteplatte": {}}, "Spiegelngeh-use_Endstop_z": {"Spiegelngeh-use_Endstop_z": {}}, "Wasserk-hlung_Reservoir": {"Wasserk-hlung_Reservoir": {"Strebe_Wasserk-hlung_Reservoir": {"Strebe_Wasserk-hlung_Reservoir": {}}, "Halterung_Wasserk-hlung_Reservoir": {"Halterung_Wasserk-hlung_Reservoir": {}}, "Wasserk-hlung_Reservoir_EisstationVPP_Shrink": {"Wasserk-hlung_Reservoir_EisstationVPP_Shrink": {"Block_01": {"Block_01": {}}}}}}, "HDT_3M_40Z_17024000": {"HDT_3M_40Z_17024000": {}}, "Tank_Versteifung_Fenster": {"Tank_Versteifung_Fenster": {}}, "Festo_Schlitten_EGC-80-GK-GPBS1": {"Festo_Schlitten_EGC-80-GK-GPBS1": {}}}}' ;
var geoarray_data = JSON.parse(geoarray);
console.log("test")
printValues(geoarray_data);

var loader = new THREE.ObjectLoader();
loadfromdictionary(geoarray_data, "lkj");

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
    modelpath,

  	// onLoad callback
  	function ( obj ) {
      // remove the loading text
      document.getElementById('progress').remove();

  		// assign the loaded object to the scene variable
  		scene = obj;
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


function loadfromdictionary(obj, loader) {
  var loadpath = ""
  console.log("loadingfromarray:  "+ loadpath)
  for(var k in obj) {
      if(obj[k] instanceof Object && Object.keys(obj[k]).length > 1 ) {
        console.log("runnign")
        loadpath += loadfromdictionary(obj[k])
          // loadfromdictionary(obj[k]);
          // loadpath += Object.keys(obj[k]) + "/";

      } else {
          // console.log(obj[k] + "oka");
          console.log(loadpath)
          return loadpath;
      };
      }
  };