function removeExtraSpace(str) {
    let newSrt = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            newSrt += str[i];
        } else if (str[i - 1] != "") {
            newSrt += str[i];
        }
    }
    return newSrt
}
console.log(removeExtraSpace("I  Love dog")) 