import cytoscape from 'cytoscape';
import './style.css';
// webpack으로 묶어줘야 하니 css파일을 진입점인 index.js 에 import 합니다

// 아래는 공식 사이트에 올라와 있는 예제 코드입니다
var cy = cytoscape({

    container: document.getElementById('cy'), // container to render in

    elements: [ // list of graph elements to start with
        { // node a
            "data": { "id": 'a', "label": "aLabel" }
        },
        { // node b
            "data": { "id": 'b' }
        },
        { // edge ab
            "data": { "id": 'ab', "source": 'a', "target": 'b' }
        },
        { // node c
            "data": { "id": 'c' }
        },
        { // node d
            "data": { "id": 'd' }
        },
        { // edge ab
            "data": { "id": 'cd', "source": 'c', "target": 'd' }
        },
        { // node e
            "data": { "id": 'e' }
        },
        { // node f
            "data": { "id": 'f' }
        },
        { // edge ab
            "data": { "id": 'ce', "source": 'c', "target": 'e' }
        },
        { // node g
            "data": { "id": 'g' }
        },
    ],

    style: [ // the stylesheet for the graph
        {
            selector: 'node',
            style: {
                'background-color': '#666',
                'label': 'data(label)'
            }
        },

        {
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
                'source-arrow-shape': 'triangle',
            }
        }
    ],

    layout: {
        name: 'grid',
        rows: 5
    }

});