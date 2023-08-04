import { build } from "./utils.tsx";

build()
  .catch((e) => console.error(e))
  .finally(() => process.exit());
