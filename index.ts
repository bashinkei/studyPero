// 組み合わせ計算
function func(collection: Array<number>) {
    var end = Array<string>(); // 索済みの組み合わせ格納用
    var ret = Array<Array<number>>(); // 索済みの組み合わせ格納用

    for (const item of collection) {
        const subCollection = collection.slice(collection.indexOf(item));

        // S ← 空のスタック
        var stack = Array<Array<number>>();

        const first = subCollection[0];

        // v に訪問済みの印を付ける
        end.push(first.toString())

        // v を S に積む
        stack.push([first]);

        // while S が空ではない do
        while (stack.length != 0) {
            // v ← S から取り出す
            const v = stack.pop();
            if (v === undefined) {
                throw Error("おかしい！");
            }

            // v を処理する
            ret.push(v);

            //  vに接続している頂点
            const nods = subCollection.slice(subCollection.indexOf(v[v.length - 1]) + 1).reverse();
            // for each v に接続している頂点 i do
            for (const ite of nods) {
                const newNode = v.concat(ite)
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

var funcReEnd = Array<string>(); // 索済みの組み合わせ格納用
var funcReRet = Array<Array<number>>(); // 索済みの組み合わせ格納用
function funcRe(collection: Array<number>, header: Array<number>) {
    const v = collection[0];
    // v に訪問済みの印を付ける
    const nowNode = header.concat(v);
    funcReEnd.push(nowNode.toString());
    // v を処理する
    funcReRet.push(nowNode);

    // v  に接続している頂点
    const nods = collection.slice(1)
    // for each v に接続している頂点 i do
    for (const item of nods) {
        const nextNode = nowNode.concat(item)
        // if i が未訪問 then
        if(!funcReEnd.includes(nextNode.toString())){
            // 深さ優先探索(i)
            const nods = collection.slice(collection.indexOf(item) + 1);
            funcRe(nods, nextNode);
        }
    }
    return funcReRet;
}

let arr = [...Array(5)].map((_, num) => num)
//[1, 2, 3, 4, 5, 6];
let ret = func(arr);
let ret2 = funcRe(arr, new Array<number>());


console.log(ret);

console.log("end");

