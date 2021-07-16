var tensMultiples, onesPlace, tensPlace;
onesPlace = ['Zero', 'One', 'Two',
    'Three', 'Four', 'Five',
    'Six', 'Seven', 'Eight', 'Nine'];
tensPlace = ['Ten', 'Eleven', 'Twelve',
    'Thirteen', 'Fourteen', 'Fifteen',
    'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
tensMultiples = ['', '', 'twenty',
    'thirty', 'forty', 'fifty',
    'sixty', 'seventy', 'eighty', 'ninety'];
var onLoad = function () {
    document.getElementById('showWord').addEventListener('keyup', function () {
        var srchBar = document.getElementById('showWord');
        var display = document.getElementById('displayWords');
        display.innerHTML = valueLoader(srchBar.value);
    });
};
var valueLoader = function (val) {
    var inputValSplitArray = val.split('');
    if (Number(inputValSplitArray.join("")) === 0)
        return onesPlace[0];
    return NumberToWord(inputValSplitArray);
};
var NumberToWord = function (val) {
    if (Number(val.join("")) > Math.pow(10, 9))
        return 'please enter a valid input';
    if (val.length === 0)
        return 'please enter a value inside input box';
    if (val.length === 1) {
        return onesPlace[Number(val[0])];
    }
    if (val.length === 2) {
        if (val[0] == '0' && val[1] == '0') {
            return '';
        }
        if (val[0] === '1')
            return tensPlace[Number(val[1])];
        if (val[1] !== '0')
            return tensMultiples[Number(val[0])] + " " + onesPlace[Number(val[0])];
        return tensMultiples[Number(val[0])];
    }
    if (val.length === 10) {
        if (val[0] === '0')
            return NumberToWord(val.splice(1, val.length));
        return onesPlace[Number(val[0])] + " " + places(3) + " " + places(10) + " " + NumberToWord(val.splice(1, val.length));
    }
    if (val.length === 3 || val.length % 2 === 0) {
        if (val[0] === '0')
            return NumberToWord(val.slice(1));
        return onesPlace[Number(val[0])] + " " + places(val.length) + " " + NumberToWord(val.slice(1));
    }
    if (val.length % 2 !== 0) {
        if (val[0] === '0')
            return NumberToWord(val.slice(1));
        if (val[0] === '1')
            return tensPlace[Number(val[1])] + " " + places(val.length) + " " + NumberToWord(val.slice(2));
        if (val[1] !== '0')
            return tensMultiples[Number(val[0])] + " " + onesPlace[Number(val[1])] + " " + places(val.length) + " " + NumberToWord(val.slice(2));
        return tensMultiples[Number(val[0])] + " " + places(val.length) + " " + NumberToWord(val.slice(2));
    }
    return '';
};
var places = function (val) {
    if (val > 7)
        return 'Crore';
    else if (val <= 7 && val > 5)
        return 'Lac';
    else if (val <= 5 && val > 3)
        return 'Thousand';
    else if (val === 3)
        return 'Hundred';
    else
        return '';
};
