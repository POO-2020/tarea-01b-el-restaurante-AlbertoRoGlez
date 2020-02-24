export default class Direccion {
  /**
   *
   * @param {string} calle | Calle donde vive el cliente
   * @param {number} numeroExterior | Número exterior de la casa del cliente
   * @param {number} numeroInterior | Número interior de la cas del cliente
   * @param {string} colonia | Nombre de la colonia donde vive el cliente
   * @param {number} codigoPostal | Código postal del cliente
   * @param {string} ciudad | Nombre de la ciudad donde vive el cliente
   * @param {string} municipio | Nombre del municipio donde vive el cliente
   */
  constructor(calle, numeroExterior, colonia, codigoPostal,
    ciudad, municipio, numeroInterior = "") {

    this.calle = calle;
    this.numeroExterior = numeroExterior;
    this.numeroInterior = numeroInterior;
    this.colonia = colonia;
    this.codigoPostal = codigoPostal;
    this.ciudad = ciudad;
    this.municipio = municipio;
  }

  getFormatoCorto() {
    return `${this.calle} #${this.numeroExterior}`;
  }

  getFormatoExtendido() {
    return `${this.calle} #${this.numeroExterior}, #${this.numeroInterior}, Col. ${this.colonia}, Código Postal: ${this.codigoPostal}, ${this.ciudad}, ${this.municipio}`;
  }
}
