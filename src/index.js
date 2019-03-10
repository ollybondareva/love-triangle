/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    for (i = 0; i < preferences.length; ++i) {
        let firstLoverValue = preferences[i] - 1;
        if (firstLoverValue !== i && firstLoverValue > i) {
            let secondLoverValue = preferences[firstLoverValue] - 1;
            let thirdLoverValue = preferences[secondLoverValue] - 1;
            if (thirdLoverValue === i && secondLoverValue > i) {
                ++count;
            }
        }
    }
    return count;
};
