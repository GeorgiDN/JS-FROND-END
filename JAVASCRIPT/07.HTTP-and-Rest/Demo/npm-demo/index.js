import os from 'os'; // Core module
import sum from './calculator.js'; // Internal module
import calculator from 'calculator'; // External module

import { log } from 'console';


console.log(`Hello from Nodejss ${os.EOL} new line`);

log(sum(2, 5));

const f = calculator.func('f(x) = x*10 - 20')
console.log(f(3)); //returns 10

