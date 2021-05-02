class Array{
    constructor(length) {
        this.length = length;
        this.data = [];
        this.allocateSpace(this.length);
    }

    allocateSpace(length) {
        for (let ind = 0; ind < this.length; ind++){
            this.data[ind] = null;
        }
    }
}

module.exports = {Array};