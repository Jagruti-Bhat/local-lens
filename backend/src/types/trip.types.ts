export interface CreateTripDto {
  destination: string;
  days: number;
  budget: number;
  interests: string[];
}

export interface DayPlan {
  day: number;
  title: string;
  activities: string[];
}

export interface BudgetBreakdown {
  flights: string;
  hotel: string;
  food: string;
  transport: string;
}

export interface Itinerary {
  days: DayPlan[];
  budgetBreakdown: BudgetBreakdown;
  tips: string[];
}

export interface TripPromptData {
  destination: string;
  days: number;
  budget: number;
  interests: string[];
}
