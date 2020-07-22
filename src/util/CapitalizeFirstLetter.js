/* 
Deixa a pimeira letra de uma palavra em maiúsculo
 */
const captalizeFirstLetter =  string => {
    return string[0].toUpperCase()+ string.slice(1)
}

export default captalizeFirstLetter;