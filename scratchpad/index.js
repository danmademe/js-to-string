const stringit = require("../lib");

const notEmpty = {
    data: function() {
        return {
            msg: "Hello world!",
            messageOuter: "Say Foo",
        };
    },
};

function FixData(oldData, newData) {
    const mergedData = Object.assign({}, oldData, newData);
    const frozen = Object.freeze(mergedData);
    return function data() {
        return frozen;
    };
}

const fixedData = FixData(notEmpty.data(), {foo: true});
notEmpty.data = fixedData;
const result = stringit(notEmpty);
console.log(result);