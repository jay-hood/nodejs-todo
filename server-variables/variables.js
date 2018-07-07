var db_name = 'TodoApp';
var url = `mongodb://localhost:27017/${db_name}`;

function getDBName() {
    return db_name;
}

function getUrl() {
    return url;
}

// function setDBName(name) {
//     db_name = name;
// }

// function setUrl(new_url) {
//     url = new_url;
// }

// exports.getUrl = () => {
//     return `mongodb://localhost:27017/${db_name}`;
// }

// exports.getdbName = () => {
//     return db_name;
// }

module.exports = {
    // functionally identical to above two functions, but requires fewer lines
    getUrl: getUrl,
    getdbName: getDBName
};