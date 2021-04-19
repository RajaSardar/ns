const ns = (name) => {
    let fName,lName,shortName;
    if(!name || !name.trim() || name=="undefined") return "__";
    [fName,lName]= name.trim().split(" ");
    (lName) ? shortName = fName[0]+lName[0] : (fName[1]) ? shortName = fName[0]+fName[1] : shortName = fName 
    return shortName.toUpperCase();
}
module.exports = ns;