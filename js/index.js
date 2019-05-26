(function() {

    var scene = new THREE.Scene();
    var renderer = new THREE.WebGLRenderer( {canvas: document.getElementById('myCanvas'), antialias: true, alpha: false} );
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
    
    


    var sunSphere, sunMaterial, sunMesh,
        sunGlow1, sunGlow1Material, sunGlow1Sphere,
        sunGlow2, sunGlow2Material, sunGlow2Sphere,
        sunGlow3,sunGlow3Material, sunGlow3Sphere,
        mercurySphere, mercuryMaterial, mercuryMesh, mercuryPivot,
        venusSphere, venusMaterial, venusMesh, venusPivot,
        earthSphere, earthMaterial, earthMesh, earthPivot,
        marsSphere, marsMaterial, marsMesh, marsPivot,
        jupiterSphere, jupiterMaterial, jupiterMesh, jupiterPivot,
        saturnSphere, saturnMaterial, saturnMesh, saturnPivot,
        uranusSphere, uranusMaterial, uranusMesh, uranusPivot,
        neptunSphere, neptunMaterial, neptunMesh, neptunPivot,
        light, light2, light3, cameraPivot;

    function initScene() {

        renderer.setClearColor( 0xffffff, 0);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize( window.innerWidth, window.innerHeight );

        camera.position.set(0, -1200, -600);
        camera.rotation.x = 2;
        

        
        light2 = new THREE.PointLight(0xffffff, 0.5, 0);
        light2.position.set(0,0,0);
        


        sunSphere = new THREE.SphereGeometry(1121/10,80,80);
        sunMaterial = new THREE.MeshToonMaterial({transparent: true, opacity: 1});
        sunMaterial.color = new THREE.Color("rgb(228, 224, 0)");
        sunMesh = new THREE.Mesh(sunSphere, sunMaterial);

        sunGlow1Sphere = new THREE.SphereGeometry(1121/9.7,80,80);
        sunGlow1Material = new THREE.MeshBasicMaterial({transparent: true, opacity: 0.3});
        sunGlow1Material.color = new THREE.Color("rgb(255, 214, 0)");

        sunGlow1 = new THREE.Mesh(sunGlow1Sphere, sunGlow1Material);

       



        sunMesh.position.set(0,0,0);
        sunGlow1.position.set(0,0,0);
        

        var sunOrbitPush = 150;

        // pivots
        cameraPivot = new THREE.Object3D();
        mercuryPivot = new THREE.Object3D();
        venusPivot = new THREE.Object3D();
        earthPivot = new THREE.Object3D();
        marsPivot = new THREE.Object3D();
        jupiterPivot = new THREE.Object3D();
        saturnPivot = new THREE.Object3D();
        uranusPivot = new THREE.Object3D();
        neptunPivot = new THREE.Object3D();
        sunMesh.add( cameraPivot, sunGlow1, sunGlow2, sunGlow3, mercuryPivot, venusPivot, earthPivot, marsPivot, jupiterPivot, saturnPivot, uranusPivot, neptunPivot );

        //planets

        //mercury
        mercurySphere = new THREE.SphereGeometry(20,80,80);
        mercuryMaterial = new THREE.MeshToonMaterial();
        mercuryMaterial.color = new THREE.Color("rgb(250, 30, 100)");
        mercuryMesh = new THREE.Mesh(mercurySphere, mercuryMaterial);
        mercuryMesh.position.set(38.7+sunOrbitPush,0,0);
        mercuryPivot.add( mercuryMesh );
        //venus
        venusSphere = new THREE.SphereGeometry(15,80,80);
        venusMaterial = new THREE.MeshToonMaterial();
        venusMaterial.color = new THREE.Color("rgb(250, 130, 250)");
        venusMesh = new THREE.Mesh(venusSphere, venusMaterial);
        venusMesh.position.set(72.3+sunOrbitPush,0,0);
        venusPivot.add( venusMesh );
        //earth
        earthSphere = new THREE.SphereGeometry(10,80/2,80);
        earthMaterial = new THREE.MeshToonMaterial();
        earthMaterial.color = new THREE.Color("rgb(150, 180, 250)");
        earthMesh = new THREE.Mesh(earthSphere, earthMaterial);
        earthMesh.position.set(100+sunOrbitPush,0,0);
        earthPivot.add( earthMesh );

        //mars
        marsSphere = new THREE.SphereGeometry(20,80,80);
        marsMaterial = new THREE.MeshToonMaterial();
        marsMaterial.color = new THREE.Color("rgb(250, 100, 100)");
        marsMesh = new THREE.Mesh(marsSphere, marsMaterial);
        marsMesh.position.set(152+sunOrbitPush,0,0);
        marsPivot.add( marsMesh );

        //jupiter
        jupiterSphere = new THREE.SphereGeometry(112.1/2,80,80);
        jupiterMaterial = new THREE.MeshToonMaterial();
        jupiterMaterial.color = new THREE.Color("rgb(150, 180, 250)");
        jupiterMesh = new THREE.Mesh(jupiterSphere, jupiterMaterial);
        jupiterMesh.position.set(300+sunOrbitPush,0,0);
        jupiterPivot.add( jupiterMesh );





  

        
        cameraPivot.add( camera );
        scene.add( sunMesh );
        scene.add( light, light2, light3);

        render();
    }


        

        

    function move(item, axis, value) {
        item.position[axis] = value;
    }

    function rotate(item, axis, value) {
        item.rotation[axis] = value;
    }

    function render() {

        var mercury = 1.241,
            venus = 0.615,
            mars = 1.88,
            jupiter = 11.9,
            saturn = 29.4,
            uranus = 839.7,
            neptun = 163.7;

        function orbit(planet) {
            if (planet) {
                return ((360 * Math.PI / 180) / (356 * planet))/3;
            } else {
                return ((360 * Math.PI / 180) / 356)/3;
            }
        }

        mercuryPivot.rotation.y += orbit(mercury);
        venusPivot.rotation.y += orbit(venus);
        earthPivot.rotation.y += orbit();
        marsPivot.rotation.y += orbit(mars);
        jupiterPivot.rotation.y += orbit(jupiter);
        saturnPivot.rotation.y += orbit(saturn);
        uranusPivot.rotation.y += orbit(uranus);
        neptunPivot.rotation.y += orbit(neptun);

        renderer.render(scene, camera);
        requestAnimationFrame(render);

    }

    window.onload = initScene;

    return {
        scene: scene
    }



})();

//
//
//
//
