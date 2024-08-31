import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const getBusinesses = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("businesses").collect();
  },
});

export const getApprovedBusinesses = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("businesses")
      .filter((q) => q.eq(q.field("is_approved"), true))
      .collect();
  },
});

export const saveBusinesses = mutation({
  args: {
    amount_of_ask: v.float64(),
    description: v.string(),
    industry: v.string(),
    investment_option: v.string(),
    investors: v.float64(),
    logo: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const {
      amount_of_ask,
      description,
      industry,
      investment_option,
      logo,
      name,
    } = args;

    await ctx.db.insert("businesses", {
      amount_of_ask,
      description,
      industry,
      investment_option,
      investors: 0,
      logo,
      name,
      amount_raised: 0,
      is_approved: false,
      valuation: null,
      value_per_share: null,
    });
  },
});
