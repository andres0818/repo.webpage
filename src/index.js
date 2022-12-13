import api from "./api";
import * as components from "./components"

console.log("hola mundo");

api.httpGet();


let data= api.httpGet()
components.createtitle(data)
components.createP("text")