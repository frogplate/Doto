// import { summary, help, helpAdd } from "./help.ts";
import * as help from "./help.ts";

if (Deno.args.length == 0) {
  await help.summary();
} else {
  switch (Deno.args[0].toLowerCase()) {
    case "-h":
    case "--help":
      await help.full();
      break;
    case "help":
      await help.cmd();
      break;
    default:
      await help.summary();
  }
}

