import { summary, help } from "./help.ts";

if (Deno.args.length == 0) {
  await summary();
} else {
  if (Deno.args.includes('-h')) {
    await help();
  }
}

