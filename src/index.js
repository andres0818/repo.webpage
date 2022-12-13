import api from "./api";
import * as components from "./components"
import "./styles/styles.sass"
import "./styles/styles2.sass"
import messi from "./img/messi.jpg";

console.log("hola mundo");

api.httpGet();


let data= api.httpGet()
components.createtitle(data)
components.createP("Hola Mundo")
components.createImage(messi)