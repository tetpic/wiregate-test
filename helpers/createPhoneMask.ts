export default function createPhoneMask(phoneNumberString: string) {
    let cleaned = phoneNumberString.replace(/\D/g, '');
    let cleanedArr = cleaned.split("")
    if(cleanedArr[0]){cleanedArr[0] = "7"}
    let mask = '';
    for (let i = 0; i < cleanedArr.length && i < 11; i++) {
        if(i===0 ) {               
            mask += "+"
        }
        if (i === 1) {
            mask += '(';
        } else if (i === 4) {
            mask += ') ';
        } else if (i === 7 || i === 9) {
            mask += '-';
        }
        mask += cleanedArr[i];
    }      
    return mask;
}