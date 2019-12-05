// *** YOUR ANSWER BELOW ***
function doMath(int) {
    for (let i = 1; i <= int; i++) {
        if ((i % 6 === 0 || i % 7 === 0) !== (i % 6 === 0 && i % 7 === 0)) {
            console.log(i);
        }
    }
}

doMath(100);