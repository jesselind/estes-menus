export interface Recipe {
    id: number;
    title: string;
    img: string;
    desc?: string;
    timePrep: number;
    timePrepUnit: string;
    timeCook: number;
    timeCookUnit: string;
    timeTotal: number;
    timeTotalUnit: string;
    servings: string;
    servingsUnit: string;
    calories?: number;
    caloriesUnit?: string;
    author: string;
    website: string;
    websiteDesc: string;
    ingredientsGroup: IngredientsGroup[];
    instructionsGroup: InstructionsGroup[];
    notes?: string[];
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