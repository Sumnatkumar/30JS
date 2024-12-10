async function sleep(millis) {
    return new Promise((resolve) => setTimeout(resolve, millis))
}
async function demo() {
    console.log("Waiting...");
    await sleep(2000); // Waits for 2 seconds
    console.log("Done waiting!");
}

demo();
// Output:
// Waiting...
// (after 2 seconds)
// Done waiting!
