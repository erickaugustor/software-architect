function meanderingArray(unsorted) {
    const result = [];
    const toggle = { shift: 'pop', pop: 'shift' };

    let fn = 'shift';

    unsorted.sort((a, b) => a - b);

    while (unsorted.length) {
        result.push(unsorted[fn = toggle[fn]]());
    }

    return result;
}

function getMin(str) {
    let brackets = [];
    for (let i = 0; i < str.length; i++) {     
        if (str[i] === "(") {
            brackets.push(str[i]);
        } else if (str[i] === ")") {
            if (brackets[brackets.length - 1] === "(") brackets.pop();
            else brackets.push("#");
        }
    }
    return brackets.length;
}
