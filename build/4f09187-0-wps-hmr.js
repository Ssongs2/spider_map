self["webpackHotUpdatemap"](0,{

/***/ 0:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cytoscape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var cytoscape__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cytoscape__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);

 // webpack으로 묶어줘야 하니 css파일을 진입점인 index.js 에 import 합니다
// 아래는 공식 사이트에 올라와 있는 예제 코드입니다

var cy = cytoscape__WEBPACK_IMPORTED_MODULE_0___default()({
  container: document.getElementById('cy'),
  // container to render in
  elements: [// list of graph elements to start with
  {
    // node a
    "data": {
      "id": 'a',
      "label": "aLabel"
    }
  }, {
    // node b
    "data": {
      "id": 'b'
    }
  }, {
    // edge ab
    "data": {
      "id": 'ab',
      "source": 'a',
      "target": 'b'
    }
  }, {
    // node c
    "data": {
      "id": 'c'
    }
  }, {
    // node d
    "data": {
      "id": 'd'
    }
  }, {
    // edge ab
    "data": {
      "id": 'cd',
      "source": 'c',
      "target": 'd'
    }
  }, {
    // node e
    "data": {
      "id": 'e'
    }
  }, {
    // node f
    "data": {
      "id": 'f'
    }
  }, {
    // edge ab
    "data": {
      "id": 'ce',
      "source": 'c',
      "target": 'e'
    }
  }, {
    // node g
    "data": {
      "id": 'g'
    }
  }],
  style: [// the stylesheet for the graph
  {
    selector: 'node',
    style: {
      'background-color': '#666',
      'label': 'data(label)'
    }
  }, {
    selector: 'edge',
    style: {
      'width': 3,
      // 화살표 style 변경
      'curve-style': 'bezier',
      'line-color': '#ccc',
      //'target-arrow-color': '#ccc',
      //'target-arrow-shape': 'triangle',
      // 화살표 방향 
      'source-arrow-color': '#ccc',
      'source-arrow-shape': 'triangle'
    }
  }],
  layout: {
    name: 'grid',
    rows: 5
  }
});

/***/ }),

/***/ 5:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1618562385518
      var cssReload = __webpack_require__(6)(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("88d6f141eebe4ea7b6b2")
/******/ })();
/******/ 
/******/ }
);