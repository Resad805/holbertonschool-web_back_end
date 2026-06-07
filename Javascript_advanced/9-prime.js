function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) count++;
    }
    return count;
}

const start = performance.now();
const result = countPrimeNumbers();
const end = performance.now();

const timeUsed = end - start;

console.log(`Execution time of printing countPrimeNumbers was ${timeUsed} milliseconds.`);
