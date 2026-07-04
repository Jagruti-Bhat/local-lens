export interface Activity {
  time: string;
  activity: string;
  location: string;
  cost: string;
}

export interface Day {
  day: number;
  title: string;
  activities: Activity[];
}

export interface BudgetBreakdown {
  hotel: string;
  food: string;
  transport: string;
  flights: string;
}

export interface Itinerary {
  days: Day[];
  tips: string[];
  budgetBreakdown: BudgetBreakdown;
}

export interface Trip {
  id: string;
  destination: string;
  days: number;
  budget: number;
  interests: string[];
  itinerary?: Itinerary;
  imageUrl?: string;
}
