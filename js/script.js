let imgArray = [
    'imagenes/img1.jpeg',
    'imagenes/padre.jpeg',
    'imagenes/madre.jpeg',
    'imagenes/trans.jpeg',
    'imagenes/mojadas.jpeg',
    'imagenes/halloween.jpeg'
];

let img = document.getElementById('slide');
let i = 0;

const slideShow = () => {
    img.src = imgArray[i];
    i = (i < imgArray.length - 1) ? i+1 : 0;
}

const interval = () => {
    setInterval(slideShow,2500);
}