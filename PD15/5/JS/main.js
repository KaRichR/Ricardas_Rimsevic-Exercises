function rikiuotiMasyva(masyvas) {
    return [...masyvas].sort((a, b) => a - b);
}

let manoMasyvas = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let rikiuotasMasyvas = rikiuotiMasyva(manoMasyvas);

console.log(rikiuotasMasyvas);
