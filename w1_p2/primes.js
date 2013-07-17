#!/usr/bin/env node

function getPrimes2(n) {
    var primes = [2];
     var i = primes.length == 1 ? 1 : primes[primes.length-1], j, l;
     main:
     while((l=primes.length) < n) {
         i += 2;
         for( j=0; j<l; j++) {
             if( i % primes[j] == 0) continue main;
         }
         primes.push(i);
     }
     return primes.slice(0,n);
}

var fs = require('fs');
var outfile = "primes.txt";
var primes = getPrimes2(100);
var out = primes.toString();

fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);



