---
name: threejs
description: Use when building or reviewing WebGL/WebGPU 3D graphics on the web — scenes, cameras, meshes, materials, lighting, animation, model loading, or shaders. Backed by three.js (mrdoob/three.js), the standard cross-browser JS 3D library. Not a Claude Code skill upstream (no SKILL.md in that repo, only an llms.txt) — this is a custom wrapper distilled from it. Not for CSS-only or SVG-only visual effects, or 2D canvas work.
allowed-tools: Read, Write, Edit, Bash
---

# three.js

[three.js](https://threejs.org) (MIT) is the standard cross-browser JS library for WebGL/WebGPU
3D graphics. It ships two renderers and a shading language for the newer one — the two things
most likely to be gotten wrong are covered first below.

## Import — use import maps, not old CDN script tags

```html
<script type="importmap">
{
  "imports": {
    "three": "https://cdn.jsdelivr.net/npm/three@<version>/build/three.module.js",
    "three/addons/": "https://cdn.jsdelivr.net/npm/three@<version>/examples/jsm/"
  }
}
</script>
<script type="module">
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
</script>
```
Pin `<version>` to whatever's current on npm (`npm view three version`) — don't hardcode an old
release, and never use the deprecated single-file CDN `<script src=".../three.min.js">` pattern.
In a bundled project, install normally instead: `npm install three`.

## WebGLRenderer vs. WebGPURenderer

- **WebGLRenderer** (default): maximum browser compatibility, mature, what almost every
  example/tutorial online uses. Reach for this unless you specifically need what's below.
  ```js
  import * as THREE from 'three';
  const renderer = new THREE.WebGLRenderer();
  ```
- **WebGPURenderer**: needed for custom shaders/materials via TSL, compute shaders, or
  advanced node-based materials.
  ```js
  import * as THREE from 'three/webgpu';
  const renderer = new THREE.WebGPURenderer();
  await renderer.init(); // note: async
  ```

## TSL (Three.js Shading Language)

When using `WebGPURenderer`, write shaders in TSL rather than raw GLSL / `onBeforeCompile`
string hacks — it's type-safe, composable, and works on both WebGL and WebGPU backends:

```js
import { texture, uv, color } from 'three/tsl';

const material = new THREE.MeshStandardNodeMaterial();
material.colorNode = texture( myTexture ).mul( color( 0xff0000 ) );
```

Pair TSL with the Node-suffixed material classes: `MeshBasicNodeMaterial`,
`MeshStandardNodeMaterial`, `MeshPhysicalNodeMaterial`, `LineBasicNodeMaterial`,
`SpriteNodeMaterial`.

## Minimal scene (WebGL)

```js
import * as THREE from 'three';

const camera = new THREE.PerspectiveCamera( 70, innerWidth / innerHeight, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( innerWidth, innerHeight );
document.body.appendChild( renderer.domElement );

renderer.setAnimationLoop( () => {
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;
  renderer.render( scene, camera );
} );
```

## Essential API map (jump-off points, not exhaustive)

- **Core**: `Object3D`, `BufferGeometry`, `BufferAttribute`
- **Scene/Camera**: `Scene`, `PerspectiveCamera`, `OrthographicCamera`
- **Renderers**: `WebGLRenderer`, `WebGPURenderer`
- **Objects**: `Mesh`, `InstancedMesh` (many identical objects, one draw call), `Group`
- **Materials**: `MeshBasicMaterial` (unlit), `MeshStandardMaterial` (PBR),
  `MeshPhysicalMaterial` (PBR + clearcoat/transmission/etc.)
- **Geometries**: `BoxGeometry`, `SphereGeometry`, `PlaneGeometry`
- **Lights**: `AmbientLight`, `DirectionalLight`, `PointLight`, `SpotLight`
- **Loaders**: `TextureLoader`, `GLTFLoader` (glTF is the go-to model format)
- **Controls** (from `three/addons/controls/`): `OrbitControls`, `TransformControls`
- **Math**: `Vector2`/`Vector3`, `Matrix4`, `Quaternion`, `Color`

Full API reference: `https://threejs.org/docs/`. Manual/guides (scene graph, materials,
textures, lights, cameras, shadows, animation system, loading models, responsive design):
`https://threejs.org/manual/`. TSL spec: `https://threejs.org/docs/#api/en/nodes/TSL`.

## Common pitfalls

- Forgetting `renderer.setSize()` and appending `renderer.domElement` to the DOM.
- Not handling resize (`window.addEventListener('resize', ...)` updating camera aspect +
  `renderer.setSize`).
- Using `WebGPURenderer` without `await renderer.init()` before the first render.
- Loading many unique large textures/geometries without disposing (`.dispose()`) when removing
  objects — leaks GPU memory on long-running pages.
