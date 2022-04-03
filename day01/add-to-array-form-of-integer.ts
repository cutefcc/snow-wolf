// https://leetcode-cn.com/problems/add-to-array-form-of-integer/
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
    }
  }
  return res;
}
