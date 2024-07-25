import {
  decimal,
  integer,
  pgTableCreator,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `next_second_hand_${name}`);

export const Products = createTable("products", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  title: text("title").notNull(),
  price: decimal("price").notNull(),
  originalPrice: decimal("original_price").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  condition: text("contiditon"),
  category: text("category"),
  age: integer("age").notNull(),
});
