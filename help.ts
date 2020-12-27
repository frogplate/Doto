export async function summary() {
  console.log("Usage: doto [-h] action [task_number] [task_description]");
  console.log("Try 'doto -h' for more information.");
}

export async function full() {
  console.log("Usage: doto [-h] action [task_number] [task_description]");
  console.log();
  console.log("Actions:");
  console.log('  add | a "action that needs carrying out +project @context"');
  console.log();
  console.log('See "help" for more details.');
}

export async function add() {
  console.log('add "action that needs carrying out +project @context"');
  console.log('a "action that needs carrying out +project @context"');
  console.log('  Adds "action that needs carrying out" to your todo.txt file on a new line.');
  console.log('  Project and context tags are optional.');
  console.log('  Quotes are optional.');
}

export async function cmd() {
  if (Deno.args.length > 1) {
    const cmd = Deno.args[1].toLowerCase();
    switch (cmd) {
      case "a":
      case "add":
        await add();
        break;
      default:
        console.log('DOTO: No action "' + cmd + '" exists.');
    }
  } else {
    await summary();
  }
}
