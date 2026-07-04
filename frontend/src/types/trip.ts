export interface CreateTripDto {
  destination: string;
  days: number;
  budget: number;
  interests: string[];
}

export interface Activity {
  time: string;
  activity: string;
  location: string;
  cost: string;
}

export interface DayPlan {
  day: number;
  title: string;
  activities: Activity[];
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

export interface Trip {
  id: string;
  destination: string;
  days: number;
  budget: number;
  interests: string[];
  itinerary: Itinerary | null;
}
