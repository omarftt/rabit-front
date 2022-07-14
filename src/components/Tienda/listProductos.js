import Modal1 from '../../assets/imagesTienda/Img1 - 6 PIES JUNIO.png'
import Modal2 from '../../assets/imagesTienda/Img2 - AI-IOT JUNIO.png'
import Modal3 from '../../assets/imagesTienda/Img3 - bateria junio ult.png'
import Modal4 from '../../assets/imagesTienda/Img4 - CONTROL JUNIO.png'
import Modal5 from '../../assets/imagesTienda/Img5 - DRIVER ARD JUNIO.png'
import Modal6 from '../../assets/imagesTienda/Img6 - ELECTRONIC JUNIO.png'
import Modal7 from '../../assets/imagesTienda/Img7 - HALO CODE STANDARD KIT JUNIO.png'
import Modal8 from '../../assets/imagesTienda/Img8 - HALO CODE V2 JUNIO.png'
import Modal9 from '../../assets/imagesTienda/Img9 - KIT HERRAMIENTAS.png'
import Modal10 from '../../assets/imagesTienda/Img10 - MBOT JUNIO.png'
import Modal11 from '../../assets/imagesTienda/Img11 - ME LED JUNIO.png'
import Modal12 from '../../assets/imagesTienda/Img12 - ME RGB JUNIO.png'
import Modal13 from '../../assets/imagesTienda/Img13 - ME SENSOR COLOR JUNIO.png'
import Modal14 from '../../assets/imagesTienda/Img14 - PACK ARDUINO  JUNIO.png'
import Modal15 from '../../assets/imagesTienda/Img15 - SEMÁFORO JUNIO.png'
import Modal16 from '../../assets/imagesTienda/Img16 - SERVO JUNIO.png'
import Modal17 from '../../assets/imagesTienda/Img17 - smart camera junio.png'
import ImgProduct1 from '../../assets/imagesTienda/Modal1 - 6 PIES JUNIO.png'
import ImgProduct2 from '../../assets/imagesTienda/Modal2 - AI-IOT JUNIO.png'
import ImgProduct3 from '../../assets/imagesTienda/Modal3 - bateria junio ult.png'
import ImgProduct4 from '../../assets/imagesTienda/Modal4  - CONTROL JUNIO.png'
import ImgProduct5 from '../../assets/imagesTienda/Modal5 - DRIVER ARD JUNIO.png'
import ImgProduct6 from '../../assets/imagesTienda/Modal6 - ELECTRONIC JUNIO.png'
import ImgProduct7 from '../../assets/imagesTienda/Modal7 - HALO CODE STANDARD KIT JUNIO.png'
import ImgProduct8 from '../../assets/imagesTienda/Modal8 - HALO CODE V2 JUNIO.png'
import ImgProduct9 from '../../assets/imagesTienda/Modal9 - KIT HERRAMIENTAS.png'
import ImgProduct10 from '../../assets/imagesTienda/Modal10 - UPPER MBOT JUNIO.png'
import ImgProduct11 from '../../assets/imagesTienda/Modal11 - UPPER ME LED JUNIO.png'
import ImgProduct12 from '../../assets/imagesTienda/Modal12 - UPPER ME RGB JUNIO.png'
import ImgProduct13 from '../../assets/imagesTienda/Modal13 - UPPER ME SENSOR COLOR JUNIO.png'
import ImgProduct14 from '../../assets/imagesTienda/Modal14 - UPPER PACK ARDUINO  JUNIO.png'
import ImgProduct15 from '../../assets/imagesTienda/Modal15 - UPPER SEMÁFORO JUNIO.png'
import ImgProduct16 from '../../assets/imagesTienda/Modal16 - UPPER SERVO JUNIO.png'
import ImgProduct17 from '../../assets/imagesTienda/Modal17 - smart camera junio.png'


// 1 - Ofertas
// 2 - Kit educativo
// 3 - Robots educativos
// 4 - Componente electronico
// 5 - Pieza mecanica
// 6 - 5 a 7 años
// 7 - 8 a 9 años
// 8 - 10 a 12 años
// 9 - 13 a 17 años


export const listaProductsOri = 
    [{
        id: 50001,
        name: 'mBot Add-On Pack-Six-legged Robot',
        productCode: [1,2,5,7,8,9] ,
        precio: 162,
        imgfront:  ImgProduct1,
        imgmodal: Modal1
      }, {
        id: 50002,
        name: 'AI & IoT Creator Add-on Pack',
        productCode: [2,4,5,8,9] ,
        precio: 1199,
        imgfront:  ImgProduct2,
        imgmodal: Modal2
      },{
        id: 50003,
        name: 'Batería Ión-Litio',
        productCode: [4,8,9] ,
        precio: 45,
        imgfront:  ImgProduct3,
        imgmodal: Modal3
      },{
        id: 50004,
        name: 'Bluetooth Controller V1 (10 Languages)',
        productCode: [4,5,6,7,8,9] ,
        precio: 240,
        imgfront:  ImgProduct4,
        imgmodal: Modal4
      },{
        id: 50005,
        name: 'Driver ARD-L9110 con motor y hélice',
        productCode: [4,7,8,9] ,
        precio: 20,
        imgfront:  ImgProduct5,
        imgmodal: Modal5
      },{
        id: 50006,
        name: 'Electronic Add-on Pack for Starter Robot Kit',
        productCode: [2,4,7,8,9] ,
        precio: 183,
        imgfront:  ImgProduct6,
        imgmodal: Modal6
      },{
        id: 50007,
        name: 'HaloCode Standard kit',
        productCode: [2,4,8,9] ,
        precio: 269,
        imgfront:  ImgProduct7,
        imgmodal: Modal7
      },{
        id: 50008,
        name: 'HaloCode V2',
        productCode: [2,4,8,9] ,
        precio: 159,
        imgfront:  ImgProduct8,
        imgmodal: Modal8
      },{
        id: 50009,
        name: 'Kit de Herramientas',
        productCode: [5,8,9] ,
        precio: 199,
        imgfront:  ImgProduct9,
        imgmodal: Modal9
      },{
        id: 50010,
        name: 'mBot V1.1-Blue(Bluetooth Version)+BATERIA CR2025',
        productCode: [2,3,4,5,6,7,8,9] ,
        precio: 425,
        imgfront:  ImgProduct10,
        imgmodal: Modal10
      },{
        id: 50011,
        name: 'Me LED Matrix 8*16 V1',
        productCode: [4,9] ,
        precio: 70,
        imgfront:  ImgProduct11,
        imgmodal: Modal11
      },{
        id: 50012,
        name: 'Me RGB Line Follower V1',
        productCode: [4,9] ,
        precio: 80,
        imgfront:  ImgProduct12,
        imgmodal: Modal12
      },{
        id: 50013,
        name: 'Sensor de Color',
        productCode: [4,9] ,
        precio: 55,
        imgfront:  ImgProduct13,
        imgmodal: Modal13
      },{
        id: 50014,
        name: 'Kit Arduino Maker',
        productCode: [2,4,9] ,
        precio: 199,
        imgfront:  ImgProduct14,
        imgmodal: Modal14
      },{
        id: 50015,
        name: 'Modulo tipo semáforo LED',
        productCode: [4,7,8,9] ,
        precio: 5,
        imgfront:  ImgProduct15,
        imgmodal: Modal15
      },{
        id: 50016,
        name: 'mBot Add-on Pack-Servo Pack',
        productCode: [2,4,5,7,8,9] ,
        precio: 162,
        imgfront:  ImgProduct16,
        imgmodal: Modal16
      },{
        id: 50017,
        name: 'Smart Camera Add-on Pack',
        productCode: [2,4,8,9] ,
        precio: 529,
        imgfront:  ImgProduct17,
        imgmodal: Modal17
      }
    ]