export type StorageLocation = "fridge" | "pantry";

export type QuantityUnit = "unit" | "g" | "kg" | "ml" | "l" | "pack";

export interface FoodItem {
  id: string;
  name: string;
  location: StorageLocation;
  quantity: number;
  unit: QuantityUnit;
  /** Gramos de proteína por porción */
  proteinPerServing: number;
  /** Texto libre opcional, ej: "1 huevo" o "100 g" */
  servingDescription?: string;
  /** Formato ISO "YYYY-MM-DD", o null si no vence */
  expirationDate: string | null;
}

export type ProteinObjective = "maintain" | "lose-fat" | "gain-muscle";

export type ActivityLevel = "low" | "moderate" | "high";

export interface UserProfile {
  weightKg: number;
  objective: ProteinObjective;
  activityLevel: ActivityLevel;
}

export interface ProteinGoal {
  dailyGrams: number;
  gramsPerKg: number;
}
