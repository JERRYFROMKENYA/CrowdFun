import { Id } from "./convex/_generated/dataModel";

export type TBusiness = {
    business: { 
        _id: Id<"businesses">;
        _creationTime: number; 
        investors: number; 
        name: string; 
        amount_of_ask: number; 
        amount_raised: number; 
        description: string; 
        industry: string; 
        investment_option: string; 
        is_approved: boolean; 
        logo: string; 
        valuation: number | null; 
        value_per_share: number | null; 
    }; 
}
