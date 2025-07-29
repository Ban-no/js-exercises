/* P157下部のテンプレートオブジェクト
function merge(target, ...sources) {
  for (let source of sources) {
    for (let key of Object.keys(source)) {
        if(!(key in target)) { //ここがobject.assign()と異なっている
          target[key] = source[key];
        }
    }
  }
  return target;
}
Object.assign ({x: 1}, {x: 2, y: 2}, {y: 3, z: 4}); //{x: 2, y: 3, z: 4}
merge({x: 1, {x: 2, y: 2}, {y: 3, z: 4}); //{x: 1, y: 2, z: 4}
*/

export function restrict(target, template) {
  for (const key of Object.keys(target)) {
    // template に「同じ key の own property がなければ」削除
    if (!Object.prototype.hasOwnProperty.call(template, key)) {
      delete target[key];
    }
  }
  return target;
}

export function substract(target, ...sources) {
  for (const source of sources) {
    for (const key of Object.keys(source)) {
      // target が own property として持っていたら削除
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        delete target[key];
      }
    }
  }
  return target;
}
