// demo
(function () {
    var demoSvg = new Snap('#demo');

    var lRect = demoSvg.rect(0, 0, 305, 80);
    var rRect = demoSvg.rect(315, 0, 305, 80);
    var mRect = demoSvg.rect(250, 10, 120, 60);

    var lText = demoSvg.text(160, 40, '此处为选集部分');
    var rText = demoSvg.text(470, 40, '此处为数据部分');
    var mText = demoSvg.text(310, 40, '结合区域');

    var rectSet = Snap.set(lRect, rRect);
    var textSet = Snap.set(lText, rText, mText);

    mRect.attr({
        fill: '#a1d99b',
        fillOpacity: .8,
        stroke: '#71a76c',
        strokeDasharray: '2,2'
    });

    rectSet.attr({
        fill: '#EEE',
        stroke: '#CCC',
        strokeDasharray: '2,2'
    });

    textSet.attr({
        textAnchor: 'middle',
        dy: '.35em'
    });
}());


// thing
(function () {
    var thing = new Snap('#thing');
    var matrix = new Snap.Matrix();

    var rect = thing.rect(0, 0, 53, 20, 6, 6);
    var text = thing.text(26, 10, 'thing');

    var g = thing.g(rect, text);

    rect.attr({
        fill: '#d9d9d9',
        stroke: 'none'
    });

    text.attr({
        textAnchor: 'middle',
        dy: '.35em'
    });
    
    matrix.translate(1, 1);
    g.transform(matrix);

}());


// selection
(function () {
    var selection = new Snap('#selection');
    var matrix = new Snap.Matrix();

    var rect = selection.rect(0, 0, 53, 20, 6, 6);
    var text = selection.text(26, 10, 'selection');

    var g = selection.g(rect, text);

    rect.attr({
        fill: '#fff',
        stroke: '#e6550d',
        strokeWidth: 1.5
    });

    text.attr({
        textAnchor: 'middle',
        dy: '.35em'
    });
    
    matrix.translate(1, 1);
    g.transform(matrix);
}());


// array
(function () {
    var array = new Snap('#array');
    var matrix = new Snap.Matrix();

    var rect = array.rect(0, 0, 53, 20, 6, 6);
    var text = array.text(26, 10, 'array');

    var g = array.g(rect, text);

    rect.attr({
        fill: '#fff',
        stroke: '#636363',
        strokeWidth: 1.5
    });

    text.attr({
        textAnchor: 'middle',
        dy: '.35em'
    });
    
    matrix.translate(1, 1);
    g.transform(matrix);
}());


// element
(function () {
    var element = new Snap('#element');
    var matrix = new Snap.Matrix();

    var rect = element.rect(0, 0, 53, 20, 6, 6);
    var text = element.text(26, 10, 'element');

    var g = element.g(rect, text);

    rect.attr({
        fill: '#bdbdbd',
        stroke: 'none'
    });

    text.attr({
        textAnchor: 'middle',
        dy: '.35em'
    });
    
    matrix.translate(1, 1);
    g.transform(matrix);
}());


// connection
(function () {
    var connection = new Snap('#connection');

    connection.line(1, 11, 53, 11);
    connection.attr({
        stroke: '#969696',
        strokeWidth: 1.5
    });
}());


// demo42
(function () {
    var demo42 = new Snap('#demo42');

    var rectArray = demo42.rect(0, -10, 35, 20, 6, 6);
    var textArray = demo42.text(6, 0, 'array');
    var rectDatum = demo42.rect(0, -10, 32, 20, 6, 6);
    var textDatum = demo42.text(6, 0, '42');
    var path = demo42.path('M35,12H100');

    var gArray = demo42.g(rectArray, textArray);
    var gDatum = demo42.g(rectDatum, textDatum);
    var gNode = demo42.g(gArray, gDatum);
    var gLink = demo42.g(path);
    var gAll = demo42.g(gLink, gNode);

    rectArray.attr({
        fill: 'white',
        stroke: '#636363',
        strokeWidth: 1.5
    });
    rectDatum.attr({
        fill: '#d9d9d9'
    });

    textArray.attr({dy: '.35em'});
    textDatum.attr({dy: '.35em'});

    path.attr({
        stroke: '#969696',
        strokeWidth: 1.5
    })

    gArray.transform('translate(0,12)');
    gDatum.transform('translate(100,12)');
    gAll.transform('translate(10,0)');
}());


// group1
(function () {
    var group = new Snap('#group1');

    var sRect = group.rect(0, -10, 52, 20, 6, 6);
    var sText = group.text(6, 0, 'selection');
    var aRect = group.rect(0, -10, 38, 20, 6, 6);
    var aText = group.text(6, 0, 'group');
    var eRect = group.rect(0, -10, 34, 20, 6, 6);
    var eText = group.text(6, 0, 'body');
    var saPath = group.path('M52,12H100');
    var aePath = group.path('M138,12H200');

    var textSet = Snap.set(sText, aText, eText);
    var pathSet = Snap.set(saPath, aePath);

    var gSelection = group.g(sRect, sText);
    var gArray = group.g(aRect, aText);
    var gElement = group.g(eRect, eText);
    var gNode = group.g(gSelection, gArray, gElement);
    var gLink = group.g(saPath, aePath);
    var gAll = group.g(gLink, gNode);

    sRect.attr({
        fill: '#fff',
        stroke: '#e6550d',
        strokeWidth: 1.5
    });
    aRect.attr({
        fill: '#fff',
        stroke: '#636363',
        strokeWidth: 1.5
    });
    eRect.attr({
        fill: '#bdbdbd'
    });

    textSet.attr({dy: '.35em'});

    pathSet.attr({
        stroke: '#969696',
        strokeWidth: 1.5
    })

    gSelection.transform('translate(0,12)');
    gArray.transform('translate(100,12)');
    gElement.transform('translate(200,12)');
    gAll.transform('translate(10,0)');
}());


////////////////////////////////////////////////////

var DrawHelper = {};

DrawHelper.tree = function (svg, data, paths, yAll) {
    var i, len;
    var gLink = svg.g();
    var gNode = svg.g();
    var gAll = svg.g(gLink, gNode);

    (function self(node, depth) {
        var i, len, path;
        var rect = svg.rect(0, -10, node.w || 32, 20, 6, 6);
        var text = svg.text(6, 0, node.n);
        var g = svg.g(rect, text);
        var matrix = new Snap.Matrix();
       
        rect.attr({
            fill: {e:'#bdbdbd'}[node.t] || '#fff',
            stroke: {s:'#e6550d', a:'#636363'}[node.t] || 'none',
            strokeWidth: 1.5
        });

        text.attr({dy: '.35em'});

        matrix.translate(depth * 100, node.y);
        g.addClass('nodetype-' + node.t);
        g.transform(matrix);

        gNode.addClass('node');
        gNode.add(g);

        depth++;

        if (node.c) {
            for (i = 0, len = node.c.length; i < len; ++i) {
                self(node.c[i], depth);
            }
        }
    }(data, 0));

    for (i = 0, len = paths.length; i < len; ++i) {
        if (typeof paths[i] !== 'string') {
            path = svg.path(paths[i].d);
            path.addClass('path-level-' + paths[i].l);
        } else {
            path = svg.path(paths[i]);
        }
        path.attr({
            fill: 'none',
            stroke: '#969696',
            strokeWidth: 1.5
        });
        gLink.add(path);
    }

    gAll.transform('translate(10,' + (yAll || 0) + ')');

    return gAll;
};


DrawHelper.play = function (svg, clickCallback) {
    var matrix = new Snap.Matrix();
    var circle = svg.circle(0, 0, 35);
    var path = svg.path('M-22,-30l60,30l-60,30z');
    var rect = svg.rect(0, 0, 620, 390);
    var g = svg.g(circle, path, rect);

    circle.attr({
        fill: '#fff',
        stroke: '#000',
        strokeWidth: 3
    });

    rect.attr({
        fill: 'none',
        pointerEvents: 'all',
        cursor: 'pointer'
    });

    matrix.translate(310, 195);
    matrix.scale(.6);

    circle.transform('translate(310,195)');
    path.transform(matrix);

    g.hover(function () {
        path.attr({fill: '#f00'});
    }, function () {
        path.attr({fill: '#000'});
    });

    g.click(function () {
        circle.attr({fill: '#f00'});
        path.attr({fill: '#fff'});

        g.animate({opacity: 0}, 200, function () {
            g.attr({display: 'none'});
            clickCallback.call(g, g);
            circle.attr({fill: '#fff'});
            path.attr({fill: '#000'});
        });
    });
};

////////////////////////////////////////////////////


// group2
(function () {
    DrawHelper.tree(new Snap('#group2'), {
        t: 's', n: 'selection', w: 54, y: 48, c: [{
            t: 'a', n: 'group', w: 39, y: 48, c: [
                {t: 'e', n: 'h2', y: 12},
                {t: 'e', n: 'h2', y: 36},
                {t: 'e', n: 'h2', y: 60},
                {t: 'e', n: 'h2', y: 84}
            ]
        }]
    }, [
        'M54,48H100',
        'M139,48C169,48 169,12 200,12',
        'M139,48C169,48 169,36 200,36',
        'M139,48C169,48 169,60 200,60',
        'M139,48C169,48 169,84 200,84'
    ]);
}());


// group3
(function group3() {
    var svg = new Snap('#group3');
    var start, end;

    DrawHelper.play(svg, function (play) {
        end.animate({strokeOpacity: 0, fillOpacity: 0}, 200, function () {
            end.attr({display: 'none'});
        });

        start.attr({display: '', strokeOpacity: 0, fillOpacity: 0});

        start.animate({strokeOpacity: 1, fillOpacity: 1}, 800, mina.easein, function () {
            var toFadeout = start.selectAll('.nodetype-s,.nodetype-a,path');
            var toTranslate = start.selectAll('.nodetype-e');
            var toTranslateRect = start.selectAll('.nodetype-e rect');

            Snap.animate(1, 0, function (val) {
                toFadeout.attr({
                    strokeOpacity: val,
                    fillOpacity: val
                });
            }, 1000, function (a) {
                return a < .6 ? 0 : (2.5 * a - 1.5);
            }, function () {
                toFadeout.attr({display: 'none'});
                toTranslateRect.attr({
                    strokeOpacity: 1, 
                    fillOpacity: 1,
                    fill: '#fff',
                    stroke: '#636363'
                });
                toTranslate.forEach(function (item, index) {
                    Snap.animate(
                        [200, [12, 36, 60, 84][index], 32], 
                        [100, [-96, 0, 96, 192][index], 39],
                        function (val) {
                            item.transform('translate(' + val[0] + ',' + val[1] + ')');
                            item.select('rect').attr({width: val[2]});
                        }, 400, mina.easein);
                });
                setTimeout(function () {
                    end.attr({display: ''});
                    end.selectAll('.nodetype-a,.nodetype-s,path.path-level-0')
                        .animate({strokeOpacity: 1, fillOpacity: 1}, 200, function () {
                            toTranslate.attr({display: 'none'});
                            end.selectAll('.nodetype-e').forEach(function (item, index) {
                                var dy = item.matrix.split().dy;
                                var y = [48, 144, 240, 336][parseInt(index/4)];
                                setTimeout(function () {
                                    Snap.animate([0, 100, y], [1, 200, dy], function (val) {
                                        item.attr({strokeOpacity: val[0], fillOpacity: val[0]});
                                        item.transform('translate(' + val[1] + ',' + val[2] + ')');
                                    }, 250);
                                }, index * 25);
                            });
                            end.selectAll('path.path-level-1').forEach(function (item, index) {
                                var len = item.getTotalLength();
                                item.attr({
                                    strokeOpacity: 1, 
                                    fillOpacity: 1, 
                                    strokeDashoffset: len, 
                                    strokeDasharray: len
                                });
                                setTimeout(function () {
                                    Snap.animate(len, 0, function (val) {
                                        item.attr({strokeDashoffset: val});
                                    }, 250);
                                }, index * 25);
                            });
                        });
                }, 420);
                setTimeout(function () {
                    svg.clear();
                    group3();
                }, 1200);
            });
        });
    });

    start = DrawHelper.tree(svg, {
        t: 's', n: 'selection', w: 54, y: 48, c: [{
            t: 'a', n: 'group', w: 39, y: 48, c: [
                {t: 'e', n: 'tr', y: 12},
                {t: 'e', n: 'tr', y: 36},
                {t: 'e', n: 'tr', y: 60},
                {t: 'e', n: 'tr', y: 84}
            ]
        }]
    }, [
        'M54,48H100',
        'M139,48C169,48 169,12 200,12',
        'M139,48C169,48 169,36 200,36',
        'M139,48C169,48 169,60 200,60',
        'M139,48C169,48 169,84 200,84'
    ], 144);

    start.attr({display: 'none'});

    end = DrawHelper.tree(svg, {
        t: 's', n: 'selection', w: 54, y: 192, c: [{
            t: 'a', n: 'group', w: 39, y: 48, c: [
                {t: 'e', n: 'td', y: 12},
                {t: 'e', n: 'td', y: 36},
                {t: 'e', n: 'td', y: 60},
                {t: 'e', n: 'td', y: 84}
            ]
        }, {
            t: 'a', n: 'group', w: 39, y: 144, c: [
                {t: 'e', n: 'td', y: 108},
                {t: 'e', n: 'td', y: 132},
                {t: 'e', n: 'td', y: 156},
                {t: 'e', n: 'td', y: 180}
            ]
        }, {
            t: 'a', n: 'group', w: 39, y: 240, c: [
                {t: 'e', n: 'td', y: 204},
                {t: 'e', n: 'td', y: 228},
                {t: 'e', n: 'td', y: 252},
                {t: 'e', n: 'td', y: 276}
            ]
        }, {
            t: 'a', n: 'group', w: 39, y: 336, c: [
                {t: 'e', n: 'td', y: 300},
                {t: 'e', n: 'td', y: 324},
                {t: 'e', n: 'td', y: 348},
                {t: 'e', n: 'td', y: 372}
            ]
        }]
    }, [
        {d: 'M54,192C77,192 77,48 100,48', l: 0},
        {d: 'M54,192C77,192 77,144 100,144', l: 0},
        {d: 'M54,192C77,192 77,240 100,240', l: 0},
        {d: 'M54,192C77,192 77,336 100,336', l: 0},

        {d: 'M139,48C169,48 169,12 200,12', l: 1},
        {d: 'M139,48C169,48 169,36 200,36', l: 1},
        {d: 'M139,48C169,48 169,60 200,60', l: 1},
        {d: 'M139,48C169,48 169,84 200,84', l: 1},

        {d: 'M139,144C169,144 169,108 200,108', l: 1},
        {d: 'M139,144C169,144 169,132 200,132', l: 1},
        {d: 'M139,144C169,144 169,156 200,156', l: 1},
        {d: 'M139,144C169,144 169,180 200,180', l: 1},

        {d: 'M139,240C169,240 169,204 200,204', l: 1},
        {d: 'M139,240C169,240 169,228 200,228', l: 1},
        {d: 'M139,240C169,240 169,252 200,252', l: 1},
        {d: 'M139,240C169,240 169,276 200,276', l: 1},

        {d: 'M139,336C169,336 169,300 200,300', l: 1},
        {d: 'M139,336C169,336 169,324 200,324', l: 1},
        {d: 'M139,336C169,336 169,348 200,348', l: 1},
        {d: 'M139,336C169,336 169,372 200,372', l: 1}
    ]);
}());



// group4
(function group4() {
    var svg = new Snap('#group4');
    var start, end;

    DrawHelper.play(svg, function (play) {
        var afterStartShow = function () {
            start.selectAll('.nodetype-s,.nodetype-a,path')
                .animate({strokeOpacity: 0, fillOpacity: 0}, 200, function () {
                    start.selectAll('.nodetype-e').forEach(function (item, index) {
                        setTimeout(function () {
                            var dy = item.matrix.split().dy;
                            item.select('rect').attr({
                                strokeOpacity: 1, 
                                fillOpacity: 1,
                                fill: '#fff',
                                stroke: '#636363'
                            });
                            Snap.animate(200, 100, function (val) {
                                item.transform('translate(' + val + ',' + dy + ')');
                            }, 250, mina.easein);
                        }, index * 25);
                    });
                });

            setTimeout(function () {
                start.attr({display: 'none'});
                end.attr({display: ''}).selectAll('.nodetype-s,.nodetype-a,path.path-level-0')
                    .animate({strokeOpacity: 1, fillOpacity: 1}, 200, function () {
                        end.selectAll('.nodetype-e').forEach(function (item, index) {
                            var dy = item.matrix.split().dy;
                            setTimeout(function () {
                                Snap.animate([0, 100], [1, 200], function (val) {
                                    item.attr({strokeOpacity: val[0], fillOpacity: val[0]});
                                    item.transform('translate(' + val[1] + ',' + dy + ')');
                                }, 250);
                            }, index * 25);
                        });
                        end.selectAll('path.path-level-1').forEach(function (item, index) {
                            var len = item.getTotalLength();
                            item.attr({
                                strokeOpacity: 1, 
                                fillOpacity: 1, 
                                strokeDashoffset: len, 
                                strokeDasharray: len
                            });
                            setTimeout(function () {
                                Snap.animate(len, 0, function (val) {
                                    item.attr({strokeDashoffset: val});
                                }, 250);
                            }, index * 25);
                        });
                    });
            }, 1200);

            setTimeout(function () {
                svg.clear();
                group4();
            }, 2000);
        };

        end.animate({strokeOpacity: 0, fillOpacity: 0}, 200, function () {
            end.attr({display: 'none'});
            start.attr({display: '', strokeOpacity: 0, fillOpacity: 0})
                .animate({strokeOpacity: 1, fillOpacity: 1}, 800, function () {
                    setTimeout(afterStartShow, 900);
                });
        });
    });

    start = DrawHelper.tree(svg, {
        t: 's', n: 'selection', w: 54, y: 192, c: [{
            t: 'a', n: 'group', w: 39, y: 48, c: [
                {t: 'e', n: 'td', y: 12},
                {t: 'e', n: 'td', y: 36},
                {t: 'e', n: 'td', y: 60},
                {t: 'e', n: 'td', y: 84}
            ]
        }, {
            t: 'a', n: 'group', w: 39, y: 144, c: [
                {t: 'e', n: 'td', y: 108},
                {t: 'e', n: 'td', y: 132},
                {t: 'e', n: 'td', y: 156},
                {t: 'e', n: 'td', y: 180}
            ]
        }, {
            t: 'a', n: 'group', w: 39, y: 240, c: [
                {t: 'e', n: 'td', y: 204},
                {t: 'e', n: 'td', y: 228},
                {t: 'e', n: 'td', y: 252},
                {t: 'e', n: 'td', y: 276}
            ]
        }, {
            t: 'a', n: 'group', w: 39, y: 336, c: [
                {t: 'e', n: 'td', y: 300},
                {t: 'e', n: 'td', y: 324},
                {t: 'e', n: 'td', y: 348},
                {t: 'e', n: 'td', y: 372}
            ]
        }]
    }, [
        {d: 'M54,192C77,192 77,48 100,48', l: 0},
        {d: 'M54,192C77,192 77,144 100,144', l: 0},
        {d: 'M54,192C77,192 77,240 100,240', l: 0},
        {d: 'M54,192C77,192 77,336 100,336', l: 0},

        {d: 'M139,48C169,48 169,12 200,12', l: 1},
        {d: 'M139,48C169,48 169,36 200,36', l: 1},
        {d: 'M139,48C169,48 169,60 200,60', l: 1},
        {d: 'M139,48C169,48 169,84 200,84', l: 1},

        {d: 'M139,144C169,144 169,108 200,108', l: 1},
        {d: 'M139,144C169,144 169,132 200,132', l: 1},
        {d: 'M139,144C169,144 169,156 200,156', l: 1},
        {d: 'M139,144C169,144 169,180 200,180', l: 1},

        {d: 'M139,240C169,240 169,204 200,204', l: 1},
        {d: 'M139,240C169,240 169,228 200,228', l: 1},
        {d: 'M139,240C169,240 169,252 200,252', l: 1},
        {d: 'M139,240C169,240 169,276 200,276', l: 1},

        {d: 'M139,336C169,336 169,300 200,300', l: 1},
        {d: 'M139,336C169,336 169,324 200,324', l: 1},
        {d: 'M139,336C169,336 169,348 200,348', l: 1},
        {d: 'M139,336C169,336 169,372 200,372', l: 1}
    ]);

    start.attr({display: 'none'});

    end = DrawHelper.tree(svg, {
        t: 's', n: 'selection', w: 54, y: 192, c: [{
            t: 'a', n: 'group', w: 39, y: 12, c: [
                {t: 'e', n: 'span', w:34, y: 12}
            ]
        }, {
            t: 'a', n: 'group', w: 39, y: 36, c: [
                {t: 'e', n: 'span', w:34, y: 36}
            ]
        }, {
            t: 'a', n: 'group', w: 39, y: 60, c: [
                {t: 'e', n: 'span', w:34, y: 60}
            ]
        }, {
            t: 'a', n: 'group', w: 39, y: 84, c: [
                {t: 'e', n: 'span', w:34, y: 84}
            ]
        }, {
            t: 'a', n: 'group', w: 39, y: 108, c: [
                {t: 'e', n: 'span', w:34, y: 108}
            ]
        }, {
            t: 'a', n: 'group', w: 39, y: 132, c: [
                {t: 'e', n: 'span', w:34, y: 132}
            ]
        }, {
            t: 'a', n: 'group', w: 39, y: 156, c: [
                {t: 'e', n: 'span', w:34, y: 156}
            ]
        }, {
            t: 'a', n: 'group', w: 39, y: 180, c: [
                {t: 'e', n: 'span', w:34, y: 180}
            ]
        }, {
            t: 'a', n: 'group', w: 39, y: 204, c: [
                {t: 'e', n: 'span', w:34, y: 204}
            ]
        }, {
            t: 'a', n: 'group', w: 39, y: 228, c: [
                {t: 'e', n: 'span', w:34, y: 228}
            ]
        }, {
            t: 'a', n: 'group', w: 39, y: 252, c: [
                {t: 'e', n: 'span', w:34, y: 252}
            ]
        }, {
            t: 'a', n: 'group', w: 39, y: 276, c: [
                {t: 'e', n: 'span', w:34, y: 276}
            ]
        }, {
            t: 'a', n: 'group', w: 39, y: 300, c: [
                {t: 'e', n: 'span', w:34, y: 300}
            ]
        }, {
            t: 'a', n: 'group', w: 39, y: 324, c: [
                {t: 'e', n: 'span', w:34, y: 324}
            ]
        }, {
            t: 'a', n: 'group', w: 39, y: 348, c: [
                {t: 'e', n: 'span', w:34, y: 348}
            ]
        }, {
            t: 'a', n: 'group', w: 39, y: 372, c: [
                {t: 'e', n: 'span', w:34, y: 372}
            ]
        }]
    }, [
        {d: 'M54,192C77,192 77,12 100,12', l: 0},
        {d: 'M54,192C77,192 77,36 100,36', l: 0},
        {d: 'M54,192C77,192 77,60 100,60', l: 0},
        {d: 'M54,192C77,192 77,84 100,84', l: 0},
        {d: 'M54,192C77,192 77,108 100,108', l: 0},
        {d: 'M54,192C77,192 77,132 100,132', l: 0},
        {d: 'M54,192C77,192 77,156 100,156', l: 0},
        {d: 'M54,192C77,192 77,180 100,180', l: 0},
        {d: 'M54,192C77,192 77,204 100,204', l: 0},
        {d: 'M54,192C77,192 77,228 100,228', l: 0},
        {d: 'M54,192C77,192 77,252 100,252', l: 0},
        {d: 'M54,192C77,192 77,276 100,276', l: 0},
        {d: 'M54,192C77,192 77,300 100,300', l: 0},
        {d: 'M54,192C77,192 77,324 100,324', l: 0},
        {d: 'M54,192C77,192 77,348 100,348', l: 0},
        {d: 'M54,192C77,192 77,372 100,372', l: 0},

        {d: 'M139,12H200', l: 1},
        {d: 'M139,36H200', l: 1},
        {d: 'M139,60H200', l: 1},
        {d: 'M139,84H200', l: 1},
        {d: 'M139,108H200', l: 1},
        {d: 'M139,132H200', l: 1},
        {d: 'M139,156H200', l: 1},
        {d: 'M139,180H200', l: 1},
        {d: 'M139,204H200', l: 1},
        {d: 'M139,228H200', l: 1},
        {d: 'M139,252H200', l: 1},
        {d: 'M139,276H200', l: 1},
        {d: 'M139,300H200', l: 1},
        {d: 'M139,324H200', l: 1},
        {d: 'M139,348H200', l: 1},
        {d: 'M139,372H200', l: 1}
    ]);
}());


// non-group1
(function () {
    var svg = new Snap('#non-group1');

    DrawHelper.tree(svg, {
        t: 's', n: 'selection', w: 54, y: 48, c: [{
            t: 'a', n: 'group', w: 39, y: 48, c: [
                {t: 'e', n: 'section', w: 46, y: 12},
                {t: 'e', n: 'section', w: 46, y: 36},
                {t: 'e', n: 'section', w: 46, y: 60},
                {t: 'e', n: 'section', w: 46, y: 84}
            ]
        }]
    }, [
        'M54,48H100',
        'M139,48C169,48 169,12 200,12',
        'M139,48C169,48 169,36 200,36',
        'M139,48C169,48 169,60 200,60',
        'M139,48C169,48 169,84 200,84'
    ]);
}());


// non-group2
(function () {
    var svg = new Snap('#non-group2');

    DrawHelper.tree(svg, {
        t: 's', n: 'selection', w: 54, y: 48, c: [{
            t: 'a', n: 'group', w: 39, y: 48, c: [
                {t: 'e', n: 'p', y: 12},
                {t: 'e', n: 'p', y: 36},
                {t: 'e', n: 'p', y: 60},
                {t: 'e', n: 'p', y: 84}
            ]
        }]
    }, [
        'M54,48H100',
        'M139,48C169,48 169,12 200,12',
        'M139,48C169,48 169,36 200,36',
        'M139,48C169,48 169,60 200,60',
        'M139,48C169,48 169,84 200,84'
    ]);
}());