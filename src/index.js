import api from "./api";
import * as components from "./components"
import "./styles/styles.css"
import "./styles/styles2.css"
import messi from "./img/messi.jpg";

console.log("hola mundo");

api.httpGet();


let data= api.httpGet()
components.createtitle(data)
components.createP("Hola")
components.createImage(messi)