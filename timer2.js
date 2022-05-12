const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === "b") {
    process.stdout.write('\x07');
  } else if(Number(key) > 0 && Number(key) <= 9){
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(function() {
      process.stdout.write('\x07');
    }, key*1000);
    
  } else {
    console.log("Normal key", key);
  }
};

setupInput();