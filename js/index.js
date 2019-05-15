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

        camera.position.set(0, 300, 1550);
        camera.rotation.x = -0.2;

        light = new THREE.PointLight(0xffffff, 1, 350);
        light.position.set(-3500,-40, 1500);
        light2 = new THREE.PointLight(0xffffff, 1, 0);
        light2.position.set(0,0,0);
        light3 = new THREE.PointLight(0xffffff, 1, 50);
        light3.position.set(3000,-25, 1000);


        sunSphere = new THREE.SphereGeometry(1121/10,80,80);
        sunMaterial = new THREE.MeshBasicMaterial({transparent: true, opacity: 1});
        sunMaterial.color = new THREE.Color("rgb(228, 224, 0)");
        sunMesh = new THREE.Mesh(sunSphere, sunMaterial);

        sunGlow1Sphere = new THREE.SphereGeometry(1121/9.7,80,80);
        sunGlow1Material = new THREE.MeshBasicMaterial({transparent: true, opacity: 0.3});
        sunGlow1Material.color = new THREE.Color("rgb(255, 214, 0)");

        sunGlow1 = new THREE.Mesh(sunGlow1Sphere, sunGlow1Material);

        sunGlow2Sphere = new THREE.SphereGeometry(1121/9.4,80,80);
        sunGlow2Material = new THREE.MeshBasicMaterial({transparent: true, opacity: 0.2});
        sunGlow2Material.color = new THREE.Color("rgb(255, 190, 0)");

        sunGlow2 = new THREE.Mesh(sunGlow2Sphere, sunGlow2Material);

        sunGlow3Sphere = new THREE.SphereGeometry(1121/9.1,80,80);
        sunGlow3Material = new THREE.MeshBasicMaterial({transparent: true, opacity: 0.1});
        sunGlow3Material.color = new THREE.Color("rgb(255, 164, 0)");

        sunGlow3 = new THREE.Mesh(sunGlow3Sphere, sunGlow3Material);

        sunMesh.position.set(0,0,0);
        sunGlow1.position.set(0,0,0);
        sunGlow2.position.set(0,0,0);
        sunGlow3.position.set(0,0,0);

        var sunOrbitPush = 200;

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
        mercurySphere = new THREE.SphereGeometry(3.83/2,80,80);
        mercuryMaterial = new THREE.MeshLambertMaterial();
        mercuryMaterial.color = new THREE.Color("rgb(250, 30, 100)");
        mercuryMesh = new THREE.Mesh(mercurySphere, mercuryMaterial);
        mercuryMesh.position.set(38.7+sunOrbitPush,0,0);
        mercuryPivot.add( mercuryMesh );
        //venus
        venusSphere = new THREE.SphereGeometry(9.49/2,80,80);
        venusMaterial = new THREE.MeshLambertMaterial();
        venusMaterial.color = new THREE.Color("rgb(250, 130, 250)");
        venusMesh = new THREE.Mesh(venusSphere, venusMaterial);
        venusMesh.position.set(72.3+sunOrbitPush,0,0);
        venusPivot.add( venusMesh );
        //earth
        earthSphere = new THREE.SphereGeometry(10,80/2,80);
        earthMaterial = new THREE.MeshLambertMaterial();
        earthMaterial.color = new THREE.Color("rgb(150, 180, 250)");
        earthMesh = new THREE.Mesh(earthSphere, earthMaterial);
        earthMesh.position.set(100+sunOrbitPush,0,0);
        earthPivot.add( earthMesh );

        //mars
        marsSphere = new THREE.SphereGeometry(5.32/2,80,80);
        marsMaterial = new THREE.MeshLambertMaterial();
        marsMaterial.color = new THREE.Color("rgb(250, 100, 100)");
        marsMesh = new THREE.Mesh(marsSphere, marsMaterial);
        marsMesh.position.set(152+sunOrbitPush,0,0);
        marsPivot.add( marsMesh );

        //jupiter
        jupiterSphere = new THREE.SphereGeometry(112.1/2,80,80);
        jupiterMaterial = new THREE.MeshLambertMaterial();
        jupiterMaterial.color = new THREE.Color("rgb(150, 180, 250)");
        jupiterMesh = new THREE.Mesh(jupiterSphere, jupiterMaterial);
        jupiterMesh.position.set(520+sunOrbitPush,0,0);
        jupiterPivot.add( jupiterMesh );

        //saturn
        saturnSphere = new THREE.SphereGeometry(94.5/2,80,80);
        saturnMaterial = new THREE.MeshLambertMaterial();
        saturnMaterial.color = new THREE.Color("rgb(100, 100, 250)");
        saturnMesh = new THREE.Mesh(saturnSphere, saturnMaterial);
        saturnMesh.position.set(958+sunOrbitPush,0,0);
        saturnPivot.add( saturnMesh );

        //uranus
        uranusSphere = new THREE.SphereGeometry(40.1/2,80,80);
        uranusMaterial = new THREE.MeshLambertMaterial();
        uranusMaterial.color = new THREE.Color("rgb(150, 180, 250)");
        uranusMesh = new THREE.Mesh(uranusSphere, uranusMaterial);
        uranusMesh.position.set(1920+sunOrbitPush,0,0);
        uranusPivot.add( uranusMesh );

        //neptun
        neptunSphere = new THREE.SphereGeometry(38.8/2,80,80);
        neptunMaterial = new THREE.MeshLambertMaterial();
        neptunMaterial.color = new THREE.Color("rgb(20, 10, 120)");
        neptunMesh = new THREE.Mesh(neptunSphere, neptunMaterial);
        neptunMesh.position.set(3005+sunOrbitPush,0,0);
        neptunPivot.add( neptunMesh );

        cameraPivot.add( camera );
        scene.add( sunMesh );
        scene.add( light, light2, light3);

        setupGui();
        render();
    }

    function setupGui() {

        itemsToControl = new function () {

            this.cameraXPos = camera.position.x,
                this.cameraYPos = camera.position.y,
                this.cameraZPos = camera.position.z,
                this.cameraXRot = camera.rotation.x,
                this.cameraYRot = cameraPivot.rotation.y;

        };

        
    }

    function move(item, axis, value) {
        item.position[axis] = value;
    }

    function rotate(item, axis, value) {
        item.rotation[axis] = value;
    }

    function render() {

        var mercury = 0.241,
            venus = 0.615,
            mars = 1.88,
            jupiter = 11.9,
            saturn = 29.4,
            uranus = 83.7,
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
