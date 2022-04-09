// 找到字符串s中所有指定字符r的索引
function findAllIndexString(s, r) {
  let res = [];
  let sArr = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (sArr[i] === r) {
      res.push(i);
    }
  }
  return res;
}
console.log(findAllIndexString("loveleetcode", "e")); // [ 3, 5, 6, 11 ]
function shortestToChar(s, c) {
    let len = s.length;
    const indexArr = findAllIndexString(s, c);
    const indexArrLen = indexArr.length;
    let res = [];
    for (let i = 0; i <= len - 1; i++) {
        if (indexArr.includes(i)) {
            res[i] = 0;
        }
    }
    for (let i = 0; i <= indexArrLen; i++) {
        if (i === 0) {
            for (let j = 0; j <= indexArr(i) - 1; j++) {
                res[j] = indexArr(i) - j;
            }
        }
        if (i > 0 && i < indexArrLen) {
            let min = 0;
            for (let h = 0; h < indexArrLen - 1; h++) {
                for (let k = indexArr[i] + 1; k <=) {

                }
            }
          
        }
        if (i === indexArrLen) {
            for (let j = indexArr[i - 1]; j <= len - 1; j++) {
                res[j + 1] = j - indexArr[i - 1] + 1;
            }
        }
    }
}
