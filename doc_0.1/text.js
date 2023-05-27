import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

THREE.Cache.enabled = true;

let container;
let camera, cameraTarget, scene, renderer;
let group, textMesh1, textMesh2, textGeo, materials;

let firstLetter = true;
let text = "Vincent Descamps";
let bevelEnabled = true;
let font = undefined;
let fontName = "optimer"; // helvetiker, optimer, gentilis, droid sans, droid serif
let fontWeight = "bold"; // normal bold
const height = 20;
const size = 70;
const hover = 30;
const curveSegments = 4;
const bevelThickness = 2;
const bevelSize = 1.5;

const mirror = true;

const fontMap = {
	  "helvetiker": 0,
	  "optimer": 1,
	  "gentilis": 2,
	  "droid/droid_sans": 3,
	  "droid/droid_serif": 4
};

const weightMap = {
	"regular": 0,
	"bold": 1
};

const reveseFontMap = [];
const reverseWeightMap = [];

for (const i in fontMap) {
	reveseFontMap[fontMap[i]] = i;
}

for (const i in weightMap) {
	reverseWeightMap[weightMap[i]] = i;
}

let targetRotation = 0;
let targetRotationOnMouseDown = 0;

let pointerX = 0;
let pointerXOnMouseDown = 0;

let fontIndex = 1;

init();
animate();

