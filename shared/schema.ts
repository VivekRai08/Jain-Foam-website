import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
});

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

export const categories = pgTable("categories", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
});

export const insertCategorySchema = createInsertSchema(categories).omit({
  id: true,
});

export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;

export const contactInquiries = pgTable("contact_inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  service: text("service").notNull(),
  message: text("message").notNull(),
});

export const insertContactInquirySchema = createInsertSchema(contactInquiries)
  .omit({
    id: true,
  })
  .extend({
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    name: z.string().min(2, "Please enter your name"),
    service: z.string().min(1, "Please select a service"),
    message: z.string().min(10, "Please provide more details"),
  });

export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;
export type ContactInquiry = typeof contactInquiries.$inferSelect;

