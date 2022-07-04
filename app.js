let checkLicensePalateInHaNoi = (licensePlate) =>{
    const arr = ['29','30','31','33','34','40'];
    for (const value of arr) {
        if (licensePlate.startsWith(value)) {
            return true; 
        }
    }
    return false;
}
const listLicensePlates = ["29P1-124123", "30L9-63568", "17B3-29013", "33H2-21231"];
let listLicensePlateInHanois = [];

for (const value of listLicensePlates) {
    if (checkLicensePalateInHaNoi(value)) {
        listLicensePlateInHanois.push(value);
    }
}
console.log("Các biển số thuộc Hà Nội: ", listLicensePlateInHanois);
