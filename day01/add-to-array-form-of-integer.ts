// https://leetcode-cn.com/problems/add-to-array-form-of-integer/
//  一开始想的世界将num 转为数字 再和k相加
// 于是试了下下面代码：
// (Number(num.join('') + k)).toString().split('').map(i => Number(i))
// 试了下，发现有下面的用例没有通过
// mum  [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3] k 516
// 没通过的原因是：JS 中的Number类型只能安全地表示-9007199254740991 (-(2^53-1)) 和9007199254740991(2^53-1)之间的整数，任何超出此范围的整数值都可能失去精度。（先不考虑bigint）
// 于是上面的行不通后，想道 k 先加num的最后一位，有进位就往上继续加，没有就结束
function addToArrayForm(num: number[], k: number): number[] {
  let res: number[] = [];
  for (let i = num.length - 1; i >= 0 || k >= 1; i--) {
    // 结果位数大于num.length 时，向上进位
    if (i <= -1) {
      if (k >= 10) {
        res.unshift(k % 10);
        k = Math.floor(k / 10);
      } else {
        res.unshift(k);
        return res;
      }
    } else {
      // 每次和num最后一位相加
      let t = k + num[i];
      res.unshift(t % 10);
      k = Math.floor(t / 10);
      if (k >= 1) {
        continue;
      } else {
        res.unshift(...num.slice(0, i));
        return res;
      }
    }
  }
  return res;
}
