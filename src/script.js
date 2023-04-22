import * as THREE from 'three'
// console.log(THREE)

const eulerToRad = (y) => Math.PI * y/180
//cena
const scene = new THREE.Scene()


//objetos
const mesh1 = new THREE.Mesh(
    new THREE.ConeGeometry( 1, 1, 50 ),
    new THREE.MeshBasicMaterial({ color: 0xff06b7 })
)
mesh1.position.x = 4

const mesh2 = new THREE.Mesh(
    new THREE.ConeGeometry( 1, 1, 50 ),
    new THREE.MeshBasicMaterial({ color: 0xffdd00 })
    )
    
const mesh3 = new THREE.Mesh(
    new THREE.ConeGeometry( 1, 1, 50 ),
    new THREE.MeshBasicMaterial({ color: 0x00ffff })
)
mesh3.position.x = -4


const group = new THREE.Group()
group.add(mesh1)
group.add(mesh2)
group.add(mesh3)
scene.add(group)

group.scale.set( 1, 4, 4 )
group.rotation.z = eulerToRad

//escala
// mesh.scale.set( 2, 4, 1 )

//translação
// mesh.position.x = 2
// mesh.position.y = 2

//rotação
// mesh.rotation.x = eulerToRad(90) 
// mesh.rotation.y = 1
// mesh.rotation.z = 0.5

// scene.add(mesh)

//camera
const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width/sizes.height
)
camera.position.z = 10
// camera.position.x = 1
// camera.position.y = 1

scene.add(camera)

//renderizador
const canvas = document.querySelector('.webgl')

const renderer = new THREE.WebGLRenderer({
	canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)