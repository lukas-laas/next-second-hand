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
  id: uuid("id").notNull(),
  title: text("title").notNull(),
  price: decimal("price").notNull(),
  originalPrice: decimal("original_price").notNull(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  condition: text("contiditon"),
  age: integer("age").notNull(),
});
