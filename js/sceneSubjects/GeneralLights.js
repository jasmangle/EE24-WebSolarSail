import * as THREE from 'three';

export function GeneralLights(scene) {
	
	const light = new THREE.PointLight(0xffffff,1.5,2000);
	light.position.set(0, 20, 0);
    scene.add(light);
	
	this.update = function(time) {
		//light.intensity = (Math.sin(time)+1.5)/1.5;
		//light.color.setHSL( Math.sin(time), 0.5, 0.5 );
	}
}