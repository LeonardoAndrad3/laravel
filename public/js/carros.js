/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./resources/js/carros.js ***!
  \********************************/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var carro = /*#__PURE__*/function () {
  function carro(piloto, marca, potencia) {
    _classCallCheck(this, carro);

    this.piloto = piloto;
    this.marca = marca;
    this.potencia = potencia;
  }

  _createClass(carro, [{
    key: "acelerarCarro",
    value: function acelerarCarro() {
      console.log("Vrumm:" + this.potencia);
    }
  }]);

  return carro;
}();

var ferrari = new carro('piloto1', "ferrari", 90);
var mclaren = new carro('piloto2', "maclarem", 98);
var benntion = new carro('piloto3', "bennetion", 80);
var arrCarros = [];
arrCarros.push(ferrari);
arrCarros.push(mclaren);
arrCarros.push(benntion);

for (var i = 0; i < arrCarros.length; i++) {
  arrCarros[i].acelerarCarro();
}
/******/ })()
;