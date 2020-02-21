export default class Tiempo {
  /**
   *
   * @param {number} hora | Número de la hora en que se encuentra 1 - 12
   * @param {number} minutos | Número de minutos a los que se encuentra
   * @param {string} periodo | El periodo en el que se encuentra (AM ó PM)
   */
  constructor(hora, minutos, periodo = "") {
    this.hora = hora;
    this.minutos = minutos;
    this.periodo = periodo;
    this.horaFormato24 = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      "00"
    ];
  }

  getFormato12() {
    if (this.hora > 12) {
      return "El valor de la hora no es correcto, ingresa un número del 1 al 12";
    } else if (this.minutos > 59) {
      return "El valor de minutos agregado es incorrecto, ingresa un número del 0 al 59";
    } else {
      if (this.periodo == "AM") {
        return `${this.hora}:${this.minutos} ${this.periodo}`;
      } else {
        return `${this.hora}:${this.minutos} ${this.periodo}`;
      }
    }
  }

  getFormato24() {
    if (this.hora > 12) {
      return "El valor de la hora no es correcto, ingresa un número del 1 al 12";
    } else if (this.minutos > 59) {
      return "El valor de minutos agregado es incorrecto, ingresa un número del 0 al 59";
    } else {
      if (this.periodo == "AM") {
        return `${this.horaFormato24[this.hora]}:${this.minutos}`;
      } else {
        return `${this.horaFormato24[this.hora + 12]}:${this.minutos}`;
      }
    }
  }
}
