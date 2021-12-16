import { compact } from "./util"
import "core-js/stable";
import "regenerator-runtime/runtime";

const originalArray = [0, 1, false, 2, '', 3]
const compactedArray = compact(originalArray)

console.log(`
Here is the original array: ${originalArray}
And here is the compacted array: ${compactedArray}
`)