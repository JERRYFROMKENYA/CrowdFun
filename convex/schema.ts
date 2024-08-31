import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({

  investors: defineTable({
    email: v.string(),
    name: v.string(),
  }),

  businesses: defineTable({
    amount_of_ask: v.float64(),
    amount_raised: v.float64(),
    description: v.string(),
    industry: v.string(),
    investment_option: v.string(),
    investors: v.float64(),
    is_approved: v.boolean(),
    logo: v.string(),
    name: v.string(),
    valuation: v.union(v.null(), v.float64()),
    value_per_share: v.union(v.null(), v.float64()),
  }),

  investments: defineTable({
    amount: v.float64(),
    business_id: v.id("businesses"),
    investor_id: v.id("investors"),
    percentage_share: v.float64(),
  }),
  
});
