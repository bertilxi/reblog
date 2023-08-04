#!/usr/bin/env tsx

import sade from "sade";
import { build, exec } from "./utils.tsx";

const prog = sade("reblog");

prog.version("0.1.0");

prog
  .command("build")
  .action(() => {
    return build();
  })
  .command("dev")
  .action(async () => {
    await build();
    console.log("running @ http://localhost:3000");
    await exec("npx serve dist");
  });

prog.parse(process.argv);
