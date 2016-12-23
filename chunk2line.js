let stream = require('stream');
let util = require('util');

util.inherits(Chunk2Line, stream.Transform);
function Chunk2Line(opt) {
    stream.Transform.call(this, opt);
    this._strBuffer = '';
}
Chunk2Line.prototype._transform = function transfromFun(chunk, encoding, callback) {
    const lines = chunk.toString().split('\n');
    let last = '';
    if (lines.length > 1) {
        last = lines.pop();
    }
    this.push(this._strBuffer + lines.shift() + '\n');
    lines.map(line => {
        this.push(line + '\n');
    });
    this._strBuffer = last;
    callback();
}

module.exports = Chunk2Line;
