"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var categoriasElement = document.querySelector('#categorias');
var resultadoContainer = document.querySelector('#resultado');
var modal = new bootstrap.Modal('#modal', {});
var favoritosDiv = document.querySelector('.favoritos');
listeners();
function listeners() {
  if (categoriasElement) {
    document.addEventListener('DOMContentLoaded', initApp);
    categoriasElement.addEventListener('change', seleccionarCategoria);
  }
  if (favoritosDiv) {
    document.addEventListener('DOMContentLoaded', obtenerFavoritos);
  }
}
function initApp() {
  return _initApp.apply(this, arguments);
}
function _initApp() {
  _initApp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var url, result, response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
            _context.next = 4;
            return fetch(url);
          case 4:
            result = _context.sent;
            _context.next = 7;
            return result.json();
          case 7:
            response = _context.sent;
            mostrarCategorias(response.categories);
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));
  return _initApp.apply(this, arguments);
}
function mostrarCategorias() {
  var categoria = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  categoria.forEach(function (categoria) {
    var strCategory = categoria.strCategory;
    var option = document.createElement('option');
    option.value = strCategory;
    option.textContent = strCategory;
    categoriasElement.appendChild(option);
  });
}
function seleccionarCategoria(_x) {
  return _seleccionarCategoria.apply(this, arguments);
}
function _seleccionarCategoria() {
  _seleccionarCategoria = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
    var categoria, url, result, response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            categoria = e.target.value;
            url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(categoria);
            _context2.prev = 2;
            _context2.next = 5;
            return fetch(url);
          case 5:
            result = _context2.sent;
            _context2.next = 8;
            return result.json();
          case 8:
            response = _context2.sent;
            mostrarSeleccion(response.meals);
            _context2.next = 15;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](2);
            console.log(_context2.t0);
          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 12]]);
  }));
  return _seleccionarCategoria.apply(this, arguments);
}
function mostrarSeleccion() {
  var seleccion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // limpia y actualiza el HTML
  limpiarHTML(resultadoContainer);
  var heading = document.createElement('h2');
  heading.classList.add('text-center', 'text-black', 'my-5');
  heading.textContent = seleccion.length ? 'Resultados' : 'No hay resultados';
  resultadoContainer.appendChild(heading);
  seleccion.forEach(function (plato) {
    var idMeal = plato.idMeal,
      strMeal = plato.strMeal,
      strMealThumb = plato.strMealThumb;

    // Contenedor principal de la seleccion
    var contenedorDiv = document.createElement('div');
    contenedorDiv.classList.add('col-md-4');

    // Contenedor card de recetas
    var recetaCard = document.createElement('div');
    recetaCard.classList.add('card', 'mt-4');

    // Creacion de imagen de la receta
    var recetaImagen = document.createElement('img');
    recetaImagen.classList.add('card-img-top');
    recetaImagen.src = strMealThumb !== null && strMealThumb !== void 0 ? strMealThumb : plato.image;
    recetaImagen.alt = "imagen de receta ".concat(strMeal !== null && strMeal !== void 0 ? strMeal : plato.foodTitle);
    var recetaBody = document.createElement('div');
    recetaBody.classList.add('card-body');
    recetaBody.id = idMeal;
    var recetaHeading = document.createElement('h3');
    recetaHeading.classList.add('card-title', 'mb-3');
    recetaHeading.textContent = strMeal !== null && strMeal !== void 0 ? strMeal : plato.foodTitle;
    var recetaBtn = document.createElement('button');
    recetaBtn.classList.add('btn', 'btn-danger', 'w-100');
    recetaBtn.textContent = 'Ver receta';
    recetaBtn.onclick = function () {
      seleccionarReceta(idMeal !== null && idMeal !== void 0 ? idMeal : plato.id);
      console.log('click de receta');
    };

    // inyeccion de scripting en el HTML
    recetaBody.appendChild(recetaHeading);
    recetaBody.appendChild(recetaBtn);
    recetaCard.appendChild(recetaImagen);
    recetaCard.appendChild(recetaBody);
    contenedorDiv.appendChild(recetaCard);
    resultadoContainer.appendChild(contenedorDiv);
  });
}
function seleccionarReceta(_x2) {
  return _seleccionarReceta.apply(this, arguments);
}
function _seleccionarReceta() {
  _seleccionarReceta = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id) {
    var url, result, response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            url = "https://themealdb.com/api/json/v1/1/lookup.php?i=".concat(id);
            _context3.next = 4;
            return fetch(url);
          case 4:
            result = _context3.sent;
            _context3.next = 7;
            return result.json();
          case 7:
            response = _context3.sent;
            mostrarReceta(response.meals[0]);
            _context3.next = 14;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return _seleccionarReceta.apply(this, arguments);
}
function mostrarReceta(receta) {
  var idMeal = receta.idMeal,
    strMeal = receta.strMeal,
    strInstructions = receta.strInstructions,
    strMealThumb = receta.strMealThumb;

  // selectores para añadir contenido  al modal
  var modalTitle = document.querySelector('#staticBackdropLabel');
  var modalBody = document.querySelector('.modal-body');
  var modalFooter = document.querySelector('.modal-footer');

  // limpia los botones que se repiten en el footer
  limpiarHTML(modalFooter);
  modalTitle.textContent = strMeal;
  modalBody.innerHTML = "\n        <img src=\"".concat(strMealThumb, "\" class=\"img-fluid\" alt=\"receta").concat(strMeal, "\"/>\n        <h3 class=\"my-3\">Instrucciones:</h3>\n        <p>").concat(strInstructions, "</p>\n        <h3 class=\"my-3\">Ingredientes e Cantidades:</h3>\n    ");

  // creacion de elemento de lista de los ingredientes e cantidades
  var listGroup = document.createElement('ol');
  listGroup.classList.add('list-group');

  // itera la cantidad y los ingredientes de la receta
  for (var i = 1; i <= 20; i++) {
    if (receta["strIngredient".concat(i)]) {
      var ingrediente = receta["strIngredient".concat(i)];
      var cantidad = receta["strMeasure".concat(i)];
      var ingredienteLi = document.createElement('li');
      ingredienteLi.classList.add('list-group-item');
      ingredienteLi.textContent = "ingrediente: ".concat(ingrediente, " - cantidad: ").concat(cantidad);
      listGroup.appendChild(ingredienteLi);
    }
  }
  modalBody.appendChild(listGroup);

  // creacion de botones de guardar favoritos y cerrar
  var btnFavorite = document.createElement('button');
  var btnClose = document.createElement('button');
  btnFavorite.classList.add('btn', 'btn-danger', 'col');
  btnFavorite.textContent = existeStorage(idMeal) ? 'Eliminar favorito' : 'Guardar favorito';

  // localstorage
  btnFavorite.onclick = function () {
    if (existeStorage(idMeal)) {
      eliminarFavorito(idMeal);
      mostrarToast('Se elimino de favoritos');
      btnFavorite.textContent = 'Guardar favorito';
      return;
    }
    agregarFavorito({
      id: idMeal,
      foodTitle: strMeal,
      image: strMealThumb
    });
    btnFavorite.textContent = 'Eliminar favorito';
    mostrarToast('Se agrego a favoritos');
  };
  btnClose.classList.add('btn', 'btn-secondary', 'col');
  btnClose.textContent = 'Cerrar';
  btnClose.onclick = function () {
    modal.hide();
  };
  modalFooter.appendChild(btnFavorite);
  modalFooter.appendChild(btnClose);

  // mostrar modal
  modal.show();
}
function agregarFavorito(favorito) {
  var _JSON$parse;
  var favoritos = (_JSON$parse = JSON.parse(localStorage.getItem('favoritos'))) !== null && _JSON$parse !== void 0 ? _JSON$parse : [];
  localStorage.setItem('favoritos', JSON.stringify([].concat(_toConsumableArray(favoritos), [favorito])));
}
function eliminarFavorito(id) {
  var _JSON$parse2;
  var favoritos = (_JSON$parse2 = JSON.parse(localStorage.getItem('favoritos'))) !== null && _JSON$parse2 !== void 0 ? _JSON$parse2 : [];
  var nuevosFavoritos = favoritos.filter(function (favorito) {
    return favorito.id !== id;
  });
  localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
}
function existeStorage(id) {
  var _JSON$parse3;
  var favoritos = (_JSON$parse3 = JSON.parse(localStorage.getItem('favoritos'))) !== null && _JSON$parse3 !== void 0 ? _JSON$parse3 : [];
  return favoritos.some(function (favorito) {
    return favorito.id === id;
  });
}
function mostrarToast(mensaje) {
  var toastDiv = document.querySelector('.toast');
  var toastBody = document.querySelector('.toast-body');
  var toast = new bootstrap.Toast(toastDiv);
  toastBody.textContent = mensaje;
  toast.show();
}
function obtenerFavoritos() {
  var _JSON$parse4;
  var favoritos = (_JSON$parse4 = JSON.parse(localStorage.getItem('favoritos'))) !== null && _JSON$parse4 !== void 0 ? _JSON$parse4 : [];
  if (favoritos.length) {
    mostrarSeleccion(favoritos);
    return;
  }
  var noFavoritos = document.createElement('p');
  noFavoritos.textContent = 'No hay favoritos aún';
  noFavoritos.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5');
  favoritosDiv.appendChild(noFavoritos);
}
function limpiarHTML(selector) {
  while (selector.firstChild) {
    selector.removeChild(selector.firstChild);
  }
}