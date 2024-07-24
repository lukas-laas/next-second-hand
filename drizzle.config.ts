import { type Config } from "drizzle-kit";
import { env } from "process";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.POSTGRES_URL!,
  },
  tablesFilter: ["next_second_hand_*"],
} satisfies Config;
