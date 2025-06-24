function nextPosition(current, dice) {
    const next = current + dice;
    if (next == 4) {
        return dice + 10;
    }
    else if (next == 8) {
        return dice + 22;
    }
    else if (next == 28) {
        return dice + 48;
    }
    else if (next == 21) {
        return dice + 21;
    }
    else if (next == 50) {
        return dice + 17;
    }
    else if (next == 71) {
        return dice + 21;
    }
    else if (next == 80) {
        return dice + 19;
    }
    
    return dice;    
}

function snake(current, dice) {
    const next = current + dice;
    if (next == 32) {
        return -12;
    }
    else if (next == 36) {
        return -30;
    }
    else if (next == 48) {
        return -22;
    }
    else if (next == 62) {
        return -44;
    }
    else if (next == 88) {
        return -64;
    }
    else if (next == 95) {
        return -39;
    }
    else if (next == 97) {
        return -19;
    }
    
    return 0;    
}

let start = 1;
let next = 1;
let dice = 3;
next = start + nextPosition(start, dice)+snake(start,dice);
console.log("from=",start,", dice=",dice,", next=", next);

start = next;
dice = 4;
next = start + nextPosition(start, dice)+snake(start,dice);
console.log("from=",start,", dice=",dice,", next=", next);

start = next;
dice = 3;
next = start + nextPosition(start, dice)+snake(start,dice);
console.log("from=",start,", dice=",dice,", next=", next);

start = next;
dice = 5;
next = start + nextPosition(start, dice)+snake(start,dice);
console.log("from=",start,", dice=",dice,", next=", next);

start = next;
dice = 1;
next = start + nextPosition(start, dice)+snake(start,dice);
console.log("from=",start,", dice=",dice,", next=", next);
