import { strictEquals } from "./module/strictEquals.js";

console.log(`   1	-  1   =>  ${strictEquals(1, 1)}`);
console.log(`  NaN - NaN   =>  ${strictEquals(NaN, NaN)}`);
console.log(`    0 - -0    =>  ${strictEquals(0, -0)}`);
console.log(`   -0 - 0     =>  ${strictEquals(-0, 0)}`);
console.log(`    1 - '1'   =>  ${strictEquals(1, "1")}`);
console.log(` true - false =>  ${strictEquals(true, false)}`);
console.log(`false - false =>  ${strictEquals(false, false)}`);
console.log(`water - oil   =>  ${strictEquals("water", "oil")}`);