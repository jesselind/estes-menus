export interface Recipe {
    id?: number;
    group?: string;
    title: string;
    img?: string;
    desc?: string;
    timePrep?: string;
    timePrepUnit?: string;
    timeCook?: string;
    timeCookUnit?: string;
    timeTotal?: string;
    timeTotalUnit?: string;
    servings: string;
    servingsUnit: string;
    calories?: string;
    caloriesUnit?: string;
    author?: string;
    website: string;
    websiteDesc: string;
    ingredientsGroup: IngredientsGroup[];
    instructionsGroup: InstructionsGroup[];
    notes?: string[];
    nutritionNotes?: string;
    nutrition?: string;
    takenFromWebsite?: string;
    takenFromLabel?: string;
}

export interface IngredientsGroup {
    heading?: string;
    ingredientsIndividual: Ingredient[];
}

export interface Ingredient {
    quantity?: string;
    quantityUnit?: string;
    ingredient: string;
}
export interface InstructionsGroup {
    heading?: string;
    instructionsIndividual: Step[];
}

export interface Step {
    step: string;
}