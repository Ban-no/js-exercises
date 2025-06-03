//const acorn = require("acorn");
import * as acorn from "acorn";

const code = "let a; a = 3; console.log(a);";
const ast = acorn.parse(code, { ecmaVersion: 2020 });
console.log(JSON.stringify(ast, null, 2));
