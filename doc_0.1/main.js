import * as THREE from 'three';
import { renderLine } from './srcs/line.js';
import { animate_cube } from './srcs/cube.js';

document.addEventListener('DOMContentLoaded', (e) => {
  animate_cube();
  //renderLine();
});

