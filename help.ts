export async function summary() {
  console.log("Usage: doto [-h] action [task_number] [task_description]");
  console.log("Try 'doto -h' for more information.");
}

export async function help() {
  console.log("Usage: doto [-h] action [task_number] [task_description]");
  console.log();
  console.log("Actions:");
  console.log('  add|a "THING I NEED TO DO +project @context"');
  console.log();
  console.log('See "help" for more details.');
}

