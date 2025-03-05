import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./Comparavel.js";

export interface Modelo<T> extends Imprimivel, Comparavel<T> { }