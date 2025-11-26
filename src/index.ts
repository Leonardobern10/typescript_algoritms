function addBinary(a: string, b: string): string {

    if (a.length !== b.length) {
        if (a.length > b.length) {
            b = b.padStart(a.length, "0");
        } else {
            a = a.padStart(b.length, "0")
        }
    };

    let temp = 0;
    let resultStr = "";

    for (let i = a.length - 1; i >= 0; i--) {
        let numA = Number(a[i]);
        let numB = Number(b[i]);

        console.log(`Volta numero ${i} | A: ${numA} | B: ${numB} | TEMP: ${temp}`)
        let sum = (numA + numB + temp).toString(2);
        temp = 0;
        if (Number(sum) > 1) {
            resultStr = sum[1] + resultStr;
            temp = Number(sum[0]);
        } else {
            resultStr = sum[0] + resultStr;
        }
        console.log(`Soma: ${sum}`)
        console.log(`Resultado momentâneo: ${resultStr}\n`)
    }
    if (temp !== 0) {
        resultStr = temp.toString() + resultStr;
    }
    console.log(a, b, resultStr)
    return resultStr;
};

const [a1, b1] = ["11" ,"1"]
const [a2, b2] = ["1010", "1011"];

//console.log(addBinary(a1, b1));
console.log(addBinary(a2, b2));