import { dev } from "./utils.tsx";

dev()
  .catch((e) => console.error(e))
  .finally(() => process.exit());
