"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// 組み合わせ計算
function func(collection) {
    var end = Array(); // 索済みの組み合わせ格納用
    var ret = Array(); // 索済みの組み合わせ格納用
    for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
        var item = collection_1[_i];
        var subCollection = collection.slice(collection.indexOf(item));
        // S ← 空のスタック
        var stack = Array();
        var first = subCollection[0];
        // v に訪問済みの印を付ける
        end.push(first.toString());
        // v を S に積む
        stack.push([first]);
        // while S が空ではない do
        while (stack.length != 0) {
            // v ← S から取り出す
            var v = stack.pop();
            if (v === undefined) {
                throw Error("おかしい！");
            }
            // v を処理する
            ret.push(v);
            //  vに接続している頂点
            var nods = subCollection.slice(subCollection.indexOf(v[v.length - 1]) + 1).reverse();
            // for each v に接続している頂点 i do
            for (var _a = 0, nods_1 = nods; _a < nods_1.length; _a++) {
                var ite = nods_1[_a];
                var newNode = v.concat(ite);
                // if i が未訪問 then
                if (!end.includes(newNode.toString())) {
                    // i に訪問済みの印を付ける
                    end.push(newNode.toString());
                    // i を S に積む
                    stack.push(newNode);
                }
            }
        }
    }
    return ret;
}
var funcReEnd = Array(); // 索済みの組み合わせ格納用
var funcReRet = Array(); // 索済みの組み合わせ格納用
function funcRe(collection, header) {
    var v = collection[0];
    // v に訪問済みの印を付ける
    var nowNode = header.concat(v);
    funcReEnd.push(nowNode.toString());
    // v を処理する
    funcReRet.push(nowNode);
    // v  に接続している頂点
    var nods = collection.slice(1);
    // for each v に接続している頂点 i do
    for (var _i = 0, nods_2 = nods; _i < nods_2.length; _i++) {
        var item = nods_2[_i];
        var nextNode = nowNode.concat(item);
        // if i が未訪問 then
        if (!funcReEnd.includes(nextNode.toString())) {
            // 深さ優先探索(i)
            var nods_3 = collection.slice(collection.indexOf(item) + 1);
            funcRe(nods_3, nextNode);
        }
    }
    return funcReRet;
}
var arr = __spreadArray([], Array(5)).map(function (_, num) { return num; });
//[1, 2, 3, 4, 5, 6];
var ret = func(arr);
var ret2 = funcRe(arr, new Array());
console.log(ret);
console.log("end");
//# sourceMappingURL=index.js.map