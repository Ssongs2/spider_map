self["webpackHotUpdatemap"](0,{

/***/ 0:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cytoscape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var cytoscape__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cytoscape__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cytoscape_cose_bilkent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var cytoscape_cose_bilkent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cytoscape_cose_bilkent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);


 // webpack으로 묶어줘야 하니 css파일을 진입점인 index.js 에 import 합니다

cytoscape__WEBPACK_IMPORTED_MODULE_0___default().use((cytoscape_cose_bilkent__WEBPACK_IMPORTED_MODULE_1___default()));
var data = [{
  // node a
  "data": {
    "id": 'a',
    url: 'https://www.google.com',
    "label": "aLabel"
  }
}, {
  // node b
  "data": {
    "id": 'b',
    "label": "bLabel"
  }
}, {
  // edge ab
  "data": {
    "id": 'ab',
    "source": 'b',
    "target": 'a'
  }
}, {
  // node c
  "data": {
    "id": 'c',
    "label": "cLabel"
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
    "target": 'a'
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
    "source": 'e',
    "target": 'f'
  }
}];
var cy_for_rank = cytoscape__WEBPACK_IMPORTED_MODULE_0___default()({
  elements: data
});
var pageRank = cy_for_rank.elements().pageRank(); /// style 지정

var nodeMaxSize = 50;
var nodeMinSize = 5;
var nodeActiveSize = 28;
var fontMaxSize = 8;
var fontMinSize = 5;
var fontActiveSize = 7; // node & font 크기 값

var edgeWidth = '2px';
var edgeActiveWidth = '4px';
var arrowScale = 0.8;
var arrowActiveScale = 1.2; // edge & arrow 크기값

var dimColor = '#dfe4ea';
var edgeColor = '#ced6e0';
var nodeColor = '#57606f';
var nodeActiveColor = '#ffa502';
var successorColor = '#ff6348'; // 상위 node & edge color

var predecessorsColor = '#1e90ff'; // 하위 node & edge color
// 아래는 공식 사이트에 올라와 있는 예제 코드입니다

var cy = cytoscape__WEBPACK_IMPORTED_MODULE_0___default()({
  container: document.getElementById('cy'),
  // container to render in
  elements: data,
  style: [// the stylesheet for the graph
  {
    selector: 'node',
    style: {
      'background-color': nodeColor,
      'label': 'data(label)',
      'width': function width(ele) {
        return nodeMaxSize * pageRank.rank('#' + ele.id()) + nodeMinSize;
      },
      'height': function height(ele) {
        return nodeMaxSize * pageRank.rank('#' + ele.id()) + nodeMinSize;
      },
      'font-size': function fontSize(ele) {
        return fontMaxSize * pageRank.rank('#' + ele.id()) + fontMinSize;
      },
      'color': nodeColor
    }
  }, {
    selector: 'edge',
    style: {
      width: edgeWidth,
      // 화살표 style 변경
      'curve-style': 'bezier',
      'line-color': edgeColor,
      //'target-arrow-color': '#ccc',
      //'target-arrow-shape': 'triangle',
      // 화살표 방향 
      'source-arrow-color': edgeColor,
      'source-arrow-shape': 'vee',
      'arrow-scale': arrowScale
    }
  }],
  layout: {
    name: 'cose-bilkent',
    animate: false,
    gravityRangeCompound: 1.5,
    fit: true,
    tile: true
  }
});
cy.on('tap', function (e) {
  var url = e.target.data('url');

  if (url && url != '') {
    window.open(url);
  }
});
cy.on('tapstart mouseover', 'node', function (e) {
  setDimStyle(cy, {
    'background-color': dimColor,
    'line-color': dimColor,
    'source-arrow-color': dimColor,
    'color': dimColor
  });
  setFocus(e.target, successorColor, predecessorsColor, edgeActiveWidth, arrowActiveScale);
});
cy.on('tapend mouseout', 'node', function (e) {
  setResetFocus(e.cy);
}); // 추가되는 부분                                              

var resizeTimer;
window.addEventListener('resize', function () {
  this.clearTimeout(resizeTimer);
  resizeTimer = this.setTimeout(function () {
    cy.fit();
  }, 200);
});

function setDimStyle(target_cy, style) {
  target_cy.nodes().forEach(function (target) {
    target.style(style);
  });
  target_cy.edges().forEach(function (target) {
    target.style(style);
  });
}

function setFocus(target_element, successorColor, predecessorsColor, edgeWidth, arrowScale) {
  target_element.style('background-color', nodeActiveColor);
  target_element.style('color', nodeColor);
  target_element.successors().each(function (e) {
    // 상위  엣지와 노드
    if (e.isEdge()) {
      e.style('width', edgeWidth);
      e.style('arrow-scale', arrowScale);
    }

    e.style('color', nodeColor);
    e.style('background-color', successorColor);
    e.style('line-color', successorColor);
    e.style('source-arrow-color', successorColor);
    setOpacityElement(e, 0.5);
  });
  target_element.predecessors().each(function (e) {
    // 하위 엣지와 노드
    if (e.isEdge()) {
      e.style('width', edgeWidth);
      e.style('arrow-scale', arrowScale);
    }

    e.style('color', nodeColor);
    e.style('background-color', predecessorsColor);
    e.style('line-color', predecessorsColor);
    e.style('source-arrow-color', predecessorsColor);
    setOpacityElement(e, 0.5);
  });
  target_element.neighborhood().each(function (e) {
    // 이웃한 엣지와 노드
    setOpacityElement(e, 1);
  });
  target_element.style('width', Math.max(parseFloat(target_element.style('width')), nodeActiveSize));
  target_element.style('height', Math.max(parseFloat(target_element.style('height')), nodeActiveSize));
  target_element.style('font-size', Math.max(parseFloat(target_element.style('font-size')), fontActiveSize));
}

function setOpacityElement(target_element, degree) {
  target_element.style('opacity', degree);
}

function setResetFocus(target_cy) {
  target_cy.nodes().forEach(function (target) {
    target.style('background-color', nodeColor);
    var rank = pageRank.rank(target);
    target.style('width', nodeMaxSize * rank + nodeMinSize);
    target.style('height', nodeMaxSize * rank + nodeMinSize);
    target.style('font-size', fontMaxSize * rank + fontMinSize);
    target.style('color', nodeColor);
    target.style('opacity', 1);
  });
  target_cy.edges().forEach(function (target) {
    target.style('line-color', edgeColor);
    target.style('source-arrow-color', edgeColor);
    target.style('width', edgeWidth);
    target.style('arrow-scale', arrowScale);
    target.style('opacity', 1);
  });
}

/***/ }),

/***/ 5:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1619095399860
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
/******/ 	__webpack_require__.h = () => ("ea762c18d88b8a0ca216")
/******/ })();
/******/ 
/******/ }
);