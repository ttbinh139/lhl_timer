const args = process.argv.slice(2);
if(args.length === 0) {
  process.exit();
}
args.sort(function(a, b) {
  return a - b;
})

for (let i = 0; i < args.length; i++) {
  if (Number(args[i]) > 0) {
    setTimeout(function() {
      process.stdout.write('\x07');
    }, args[i]*1000);
  }
}