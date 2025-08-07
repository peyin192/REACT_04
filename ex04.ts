function handleUnionType(value: string | number) {
    if (typeof value === "string") {
        return value.length;
    } else if (typeof value === "number") {
        return value % 2 === 0 ? "Đây là số chẵn" : "Đây là số lẻ";
    }
}
console.log(handleUnionType("4"));

