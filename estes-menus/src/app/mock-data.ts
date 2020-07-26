import { Recipe } from './recipe';

export const ESTESRECIPES: Recipe[] = [
    {
        id: 1,
        title: 'Mediterranean Chicken Kebabs',
        img: '../../assets/images/Mediterranean-Chicken-Kebabs-1-full-size.jpg',
        desc: 'Juicy and flavorful Grilled Mediterranean Chicken Kebabs marinated in olive oil, lemon juice, garlic, and spices make for a light, delicious and easy dinner.',
        timePrep: 40,
        timePrepUnit: 'min.',
        timeCook: 10,
        timeCookUnit: 'min.',
        timeTotal: 55,
        timeTotalUnit: 'min.',
        servings: '10',
        servingsUnit: 'skewers',
        calories: 228,
        caloriesUnit: 'kcal',
        author: 'Neli Howard',
        website: 'https://www.deliciousmeetshealthy.com/grilled-mediterranean-chicken-kebabs/',
        websiteDesc: 'Delicious Meets Healthy',
        ingredientsGroup: [
            {
                heading: 'Chicken Kebabs',
                ingredientsIndividual: [
                    {
                        quantity: '3',
                        ingredient: 'chicken fillets, cut in 1-inch cubes'
                    },
                    {
                        quantity: '2',
                        ingredient: 'red bell peppers'
                    },
                    {
                        quantity: '2',
                        ingredient: 'green bell peppers'
                    },
                    {
                        quantity: '1',
                        quantityUnit: '',
                        ingredient: 'red onion'
                    }
                ]
            },
            {
                heading: 'Chicken Kebab Marinade',
                ingredientsIndividual: [
                    {
                        quantity: '2/3',
                        quantityUnit: 'cup',
                        ingredient: 'extra virgin olive oil, divided'
                    },
                    {
                        ingredient: 'juice of 1 lemon, divided'
                    },
                    {
                        quantity: '6',
                        quantityUnit: 'clove',
                        ingredient: 'of garlic, chopped, divided'
                    },
                    {
                        quantity: '2',
                        quantityUnit: 'tsp',
                        ingredient: 'paprika, divided'
                    },
                    {
                        quantity: '2',
                        quantityUnit: 'tsp',
                        ingredient: 'thyme, divided'
                    },
                    {
                        quantity: '4',
                        quantityUnit: 'tsp',
                        ingredient: 'oregano, divided'
                    },
                    {
                        quantity: '4',
                        quantityUnit: 'tsp',
                        ingredient: 'salt, divided'
                    },
                    {
                        quantity: '2',
                        quantityUnit: 'tsp',
                        ingredient: 'freshly ground black pepper, divided'
                    }
                ]
            }
        ],
        instructionsGroup: [
            {
                heading: 'Marinade',
                instructionsIndividual: [
                    {
                        step: 'Mix 1/2 of all ingredients for the marinade in small bowl. Place chicken in a ziplock bag and pour marinade over it. Marinade in the fridge for at least 30 minutes.'
                    },
                    {
                        step: 'Mix the other HALF of the ingredients in the same bowl pour into a ziplock bag with the vegetables. Marinade for at least 30 minutes.'
                    },
                    {
                        step: 'If you are using wood skewers, while the chicken and veggies are marinating, soak the skewers in water for about 15 minutes. You need to soak wooden skewers in water for about 20- 30 minutes to keep them from igniting right there on the grill. I have also noticed that it\'s much easier to slide out the meat and veggies on your plate if the skewers have been soaked before grilling.'
                    }
                ]
            },
            {
                heading: 'Chicken Kebabs',
                instructionsIndividual: [
                    {
                        step: 'Thread the chicken and peppers and onions on the skewers. I usually place about 5-6 chicken pieces and a combo of peppers and onion in between.'
                    },
                    {
                        step: 'Heat an outdoor grill or indoor grill pan over medium-high heat. Spray the grates lightly with oil and grill for about 5 minutes on each side, or until the center is no longer pink.'
                    },
                    {
                        step: 'You can also bake this Mediterranean chicken skewers in the oven if you want to. Preheat the oven to 425F. Place chicken skewers on roasting racks over two foil-lined baking sheets and bake for about 10-15 minutes, turn over once and bake for another 10 - 15 minutes on the other side, or until they are baked through.'
                    }
                ]
            }
        ],
        notes: [
            'The nutrition label doesn\'t take into account that the marinade is discarded.'
        ],
        nutrition: '../../assets/images/Annotation 2020-07-11 134958.png',
        takenFromWebsite: 'https://www.deliciousmeetshealthy.com/grilled-mediterranean-chicken-kebabs/',
        takenFromLabel: 'DeliciousMeetsHealthy.com'
    }
]

export const JRLRECIPES: Recipe[] = [
    {
        id: 1,
        title: 'Blueberry Pancakes',
        img: '../../assets/images/blueberryPancakes.jpeg',
        timePrep: 15,
        timePrepUnit: 'min.',
        timeCook: 15,
        timeCookUnit: 'min.',
        timeTotal: 30,
        timeTotalUnit: 'min.',
        servings: '4-6',
        servingsUnit: 'servings',
        author: 'Trisha Yearwood',
        website: 'https://www.foodnetwork.com/recipes/trisha-yearwood/blueberry-pancakes-2120801',
        websiteDesc: 'Food Network',
        ingredientsGroup: [
            {
                ingredientsIndividual: [
                    {
                        quantity: '1 3/4',
                        quantityUnit: 'cups',
                        ingredient: 'all-purpose flour'
                    },
                    {
                        quantity: '2',
                        quantityUnit: 'tablespoons',
                        ingredient: 'sugar'
                    },
                    {
                        quantity: '1',
                        quantityUnit: 'teaspoon',
                        ingredient: 'baking powder'
                    },
                    {
                        quantity: '1/2',
                        quantityUnit: 'teaspoon',
                        ingredient: 'vanilla extract'
                    },
                    {
                        quantity: '1 1/2',
                        quantityUnit: 'cups',
                        ingredient: 'fresh or frozen blueberries'
                    },
                    {
                        quantity: '1/2',
                        quantityUnit: 'teaspoon',
                        ingredient: 'baking soda'
                    },
                    {
                        quantity: '1/2',
                        quantityUnit: 'teaspoon',
                        ingredient: 'salt'
                    },
                    {
                        quantity: '2',
                        ingredient: 'large eggs'
                    },
                    {
                        quantity: '1',
                        quantityUnit: 'cup',
                        ingredient: 'milk, plus more if needed'
                    },
                    {
                        quantity: '1',
                        quantityUnit: 'cup',
                        ingredient: 'sour cream'
                    },
                    {
                        quantity: '1',
                        quantityUnit: 'stick',
                        ingredient: 'butter, melted'
                    },
                    {
                        quantity: '1/2',
                        quantityUnit: 'teaspoon',
                        ingredient: 'lemon zest'
                    }
                ]
            }
        ],
        instructionsGroup: [
            {
                instructionsIndividual: [
                    {
                        step: 'Sift the flour, sugar, baking powder, baking soda and salt into a large mixing bowl. In a separate large bowl, lightly whisk the eggs. Add the milk, sour cream, half the melted butter and the vanilla, whisking to blend. Make a well in the dry ingredients and pour the egg mixture into it. Whisk the ingredients together just until blended. Fold the blueberries and lemon zest into the batter.'
                    },
                    {
                        step: 'Heat a large skillet or griddle over medium heat and coat with some of the remaining melted butter. For each pancake, pour about 1/4 cup of the batter into the hot skillet. Cook 3 or 4 pancakes at a time, depending on the size of the skillet. If the batter seems too thick, thin it with 1 to 2 tablespoons milk. When bubbles begin to form and "pop" on the pancake\'s surface, after about 1 minute, and the outer edge looks done, flip it over and cook briefly for about 30 seconds on the other side.'
                    }
                ]
            }
        ],
        takenFromLabel: 'Recipe adapted from Home Cooking with Trisha Yearwood (c) Clarkson Potter 2010'
    }
]