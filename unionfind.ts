let input = require("fs").readFileSync("/dev/stdin", "utf8"); let cin = input.split(/ |\n/), cid = 0; function next() { return +cin[cid++]; }//input from catoonさん


go();//黒魔術ですよ

class UnionFind {
    p: number[];
    sizes: number[];
    tmpsize: number;
    constructor(n: number) {
        this.p = Array(n);
        this.sizes = Array(n).fill(1);
        for (let i = 0; i < n; i++) {
            this.p[i] = i;
        }
        this.tmpsize = n;
    }
    find(x: number) {
        if (this.p[x] === x) {
            return x;
        } else {
            let tmp = this.find(this.p[x]);
            return tmp;
        }
    }
    unite(x: number, y: number) {
        let findx = this.find(x);
        let findy = this.find(y);
        if (findx === findy) return;

        let [large, small] = this.sizes[findx] >= this.sizes[findy] ? [findx, findy] : [findy, findx];

        this.p[small] = large;
        this.sizes[large] += this.sizes[small];
        this.tmpsize--;

    }
    is_same(x: number, y: number) {
        return this.find(x) === this.find(y);
    }
}
function main() {
    let n = next();
    let q = next();
    let uf = new UnionFind(n);
    let rick = [];
    while (q--) {
        let condition = next();
        let tmp = next();
        let tmp1 = next();
        if (condition === 0) {
            uf.unite(tmp, tmp1);
        }
        else {
            if (uf.is_same(tmp, tmp1)) {
                // console.log(1);
                rick.push(1);
            }
            else {
                rick.push(0);
            }

        }
    }
    let ricktmp = rick.join("\n");
    // console.log(ricktmp);
    return ricktmp;
}

let stream = process.stdout;
function write(data, n) { if (!stream.write(data)) { stream.once('drain', n); } else { process.nextTick(n); } }write(main(), next);

function go(){var i=require("util"),u={};function o(f?,t?){f=f||8192,Object.keys(u).forEach(function(e){console[e]=function(){var o=i.format.apply(this,arguments);"string"==typeof t?o=t+o:"function"==typeof t&&(o=t()+o);var n=Buffer.byteLength(o);u[e].size+=n,u[e].buf.push(o),u[e].size>f&&c()}})}function c(){Object.keys(u).forEach(function(o){u[o].size&&u[o].func(u[o].buf.join("\n")),u[o].buf.length=0,u[o].size=0})}process.on("exit",c),module.exports=o,module.exports.flush=c,["warn","log","error","info"].forEach(function(o){u[o]={func:console[o].bind(console),size:0,buf:[]}}),o()}
