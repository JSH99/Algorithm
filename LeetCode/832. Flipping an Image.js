/**
 * @param {number[][]} image
 * @return {number[][]}
 */

 var flipAndInvertImage = function(image) {
    for(let i in image) {
        image[i].reverse();
        
        for(let j in image[i]) {
            image[i][j] === 1 ? image[i][j] = 0 : image[i][j] = 1;   
        }
    }
    return image;
};