import { Recipe } from './recipe';

export const ESTESRECIPES: Recipe[] = [
    {
        id: 1,
        title: 'Mediterranean Chicken Kebabs',
        img: '../../assets/images/Mediterranean-Chicken-Kebabs-1-full-size.jpg',
        desc: 'Juicy and flavorful Grilled Mediterranean Chicken Kebabs marinated in olive oil, lemon juice, garlic, and spices make for a light, delicious and easy dinner.',
        timePrep: '40',
        timePrepUnit: 'min.',
        timeCook: '10',
        timeCookUnit: 'min.',
        timeTotal: '55',
        timeTotalUnit: 'min.',
        servings: '10',
        servingsUnit: 'skewers',
        calories: '228',
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
    },
    {
        id: 2,
        title: 'Slow Cooker Chicken Chile Verde',
        desc: 'If you’ve got 5 minutes + a slow cooker, you’re on your way to the easiest Chicken Chile Verde you’ll ever make (and love)! It hardly gets any easier than this recipe with just 5 ingredients! Look for a salsa verde without preservatives or added sugars – we like the Trader Joe’s Salsa Verde because it’s just tomatillos, green chiles, water, onions, jalapenos, salt, and spices. Serve over cauliflower rice or tucked into lettuce wraps.',
        timePrep: '5',
        timePrepUnit: 'min.',
        timeCook: '5-6',
        timeCookUnit: 'hours',
        timeTotal: '6 hours 5 min.',
        servings: '3-4',
        servingsUnit: 'servings',
        calories: '195',
        caloriesUnit: 'calories',
        author: 'Jessica Beacom',
        website: 'https://therealfoodrds.com/slow-cooker-chicken-chile-verde/',
        websiteDesc: 'The Real Food Dieticians',
        ingredientsGroup: [
            {
                ingredientsIndividual: [
                    {
                        quantity: '24 oz. or 1.5 lb.',
                        ingredient: 'chicken'
                    },
                    {
                        quantity: '12',
                        quantityUnit: 'oz. jar',
                        ingredient: 'Trader Joe\'s Salsa Verde'
                    },
                    {
                        quantity: '4',
                        quantityUnit: 'oz. can',
                        ingredient: 'fire roasted green chiles'
                    },
                    {
                        quantity: '1/2',
                        quantityUnit: 'teaspoon',
                        ingredient: 'cumin'
                    },
                    {
                        quantity: '1/2',
                        quantityUnit: 'teaspoon',
                        ingredient: 'oregano'
                    },
                    {
                        ingredient: 'salt/pepper'
                    },
                    {
                        ingredient: 'cilantro, lime, avocado--for serving'
                    },
                    {
                        ingredient: 'veggies--peppers (2), onions (1-2 depending on size)',
                    },
                    {
                        ingredient: 'rice (cauliflower rice or lettuce leaves may be substituted)'
                    }
                ]
            }
        ],
        instructionsGroup: [
            {
                heading: 'Using Slow Cooker',
                instructionsIndividual: [
                    {
                        step: 'Put chicken in slow cooker.'
                    },
                    {
                        step: 'Combine salsa, green chiles, cumin, and oregano in small bowl. Pour mixture over chicken.'
                    },
                    {
                        step: 'Cook on low heat for 4 – 6 hours in slow cooker (with lid on).'
                    },
                    {
                        step: 'Remove lid; allow chicken to cool slightly before shredding it with (2 forks work well) in the slow cooker. Season with salt and pepper to taste.'
                    },
                    {
                        step: 'Transfer to serving dish; top with fresh chopped cilantro and serve with lime wedges, if desired.'
                    },
                    {
                        step: 'Serve over rice, cauliflower rice or in lettuce wraps.'
                    }
                ]
            },
            {
                heading: 'Using Instant Pot',
                instructionsIndividual: [
                    {
                        step: 'Place ingredients in the Instant Pot. After closing lid, ensure vent is sealed.'
                    },
                    {
                        step: 'Choose \'Poultry setting on Instant Pot or set the cooking time for 15 minutes at high pressure.'
                    },
                    {
                        step: 'When cook time is complete, allow natural releasing of pressure for 5 minutes, then safely vent.'
                    },
                    {
                        step: 'Once pressure disappates and lid unlocks, remove chicken and shred chicken with two forks. Toss chicken back into the pot to coat with sauce (or carefully shred chicken in the pot, if preferred).'
                    }
                ]
            }
        ],
        notes: [
            'If preparing double, consider doubling all ingredients except for chicken.'
        ],
        takenFromWebsite: 'https://therealfoodrds.com/slow-cooker-chicken-chile-verde/',
        takenFromLabel: 'The Real Food Dieticians'
    },
    {
        id: 3,
        title: 'Italian Salad',
        img: '../../assets/images/Italian_Salad.png',
        desc: 'A healthy and simple Italian Couscous Salad that everyone will go crazy for!',
        timePrep: '25',
        timePrepUnit: 'min.',
        timeTotal: '25',
        timeTotalUnit: 'min.',
        servings: '6',
        servingsUnit: 'meal prep servings',
        calories: '547',
        caloriesUnit: 'kcal',
        author: 'Chelsea',
        website: 'https://www.chelseasmessyapron.com/italian-salad/',
        websiteDesc: 'Chelsea\'s Messy Apron',
        ingredientsGroup: [
            {
                heading: 'Salad (doubled from original recipe)',
                ingredientsIndividual: [
                    {
                        ingredient: 'couscous (or another grain, such as farro or rice)'
                    },
                    {
                        quantity: '10',
                        quantityUnit: 'oz.',
                        ingredient: 'salami'
                    },
                    {
                        ingredient: 'cheese'
                    },
                    {
                        quantity: '2',
                        ingredient: 'green bell peppers'
                    },
                    {
                        quantity: '10',
                        quantityUnit: 'oz',
                        ingredient: 'black olives'
                    },
                    {
                        quantity: '4',
                        quantityUnit: 'cups',
                        ingredient: 'cherry tomatoes'
                    },
                    {
                        quantity: '1 1/2',
                        quantityUnit: 'cups',
                        ingredient: 'basil'
                    },
                    {
                        quantity: '1',
                        quantityUnit: 'cup',
                        ingredient: 'red beans'
                    }
                ]
            },
            {
                heading: 'Dressing (tripled from original recipe)',
                ingredientsIndividual: [
                    {
                        quantity: '1',
                        quantityUnit: 'cup',
                        ingredient: 'olive oil',
                    },
                    {
                        quantity: '1',
                        quantityUnit: 'cup',
                        ingredient: 'red wine vinegar'
                    },
                    {
                        quantity: '3',
                        quantityUnit: 'tablespoons',
                        ingredient: 'Dijon mustard'
                    },
                    {
                        quantity: '3',
                        quantityUnit: 'teaspoons',
                        ingredient: 'honey'
                    },
                    {
                        quantity: '3',
                        quantityUnit: 'teaspoon',
                        ingredient: 'minced garlic'
                    },
                    {
                        quantity: '1 1/2',
                        quantityUnit: 'teaspoons EACH',
                        ingredient: 'dried basil, dried parsley, dried oregano'
                    },
                    {
                        quantity: '1/4',
                        quantityUnit: 'teaspoon',
                        ingredient: 'red pepper flakes, optional'
                    },
                    {
                        ingredient: 'salt, pepper'
                    }
                ]
            }
        ],
        instructionsGroup: [
            {
                instructionsIndividual: [
                    {
                        step: 'Prepare the couscous mix according to package instructions making sure to add in the seasoning mix. If you don\'t use couscous from a package, you\'ll want to add a few teaspoons of your favorite seasonings (salt, pepper, Italian seasonings, garlic powder, etc.) to taste.'
                    },
                    {
                        step: 'While the couscous is cooking, prep the rest of the salad: drain the chickpeas (roast if desired; see last paragraph in blogpost), coarsely chop the salami, cut the mozzarella into small bite-sized pieces, slice the pepper into strips and then cut those strips in half or thirds, slice or halve the olives, and slice or halve the cherry tomatoes. Chiffonade the basil (stack basil leaves, roll them tightly, and then slice the leaves perpendicular to the roll.)'
                    },
                    {
                        step: 'Place Dressing ingredients in a jar and shake well. Add salt and pepper to taste (I like to add about 3/4 teaspoon salt and 1/2 teaspoon pepper, but add to personal preference). '
                    },
                    {
                        step: 'TO SERVE AS A SALAD: Add the prepared couscous to a large bowl and allow to cool. Add in all of the veggies, salami, basil, and chickpeas. Add some freshly squeezed lemon, salt and pepper to taste, and the dressing. Only dress what you will enjoy as this salad doesn\'t sit well for a long time with the dressing on it.'
                    },
                    {
                        step: 'TO MEAL PREP: Divide the dressing evenly into 6 small containers. Divide the couscous evenly among 6 meal prep containers. Next add in equal parts of all of the chopped veggies, salami, basil, and chickpeas. Add a lemon wedge and a pinch of some salt and pepper on top of each container. To enjoy, add the dressing, squeeze the lemon over everything, stir together, and eat!'
                    }
                ]
            }
        ],
        nutrition: '../../assets/images/Italian_Salad_nutrition.png',
        takenFromWebsite: 'https://www.chelseasmessyapron.com/italian-salad/',
        takenFromLabel: 'Chelsea\'s Messy Apron'
    }
]

export const JRLRECIPES: Recipe[] = [
    {
        id: 1,
        title: 'Blueberry Pancakes',
        img: '../../assets/images/blueberryPancakes.jpeg',
        timePrep: '15',
        timePrepUnit: 'min.',
        timeCook: '15',
        timeCookUnit: 'min.',
        timeTotal: '30',
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

export const SJARECIPES: Recipe[] = [
    {
        id: 1,
        title: '(Easy Peasy) Keto Tiramisu-For-1 🥄 gluten free',
        img: '../../assets/images/Very-Easy-Gluten-Free-Low-Carb-Keto-TIramisu-For-One-by-Gnom-Gnom-9-1.jpg',
        desc: 'Extra luscious and easy-peasy, this gluten free and keto tiramisu for one (with its instant ‘cookie’ layer!) is bound to become a favorite low carb treat!',
        timePrep: '15',
        timePrepUnit: 'min.',
        timeCook: '5',
        timeCookUnit: 'min.',
        timeTotal: '20',
        timeTotalUnit: 'min',
        servings: '2',
        servingsUnit: 'servings',
        calories: '305',
        caloriesUnit: 'kcal',
        author: 'Paola van der Hulst',
        website: 'https://www.gnom-gnom.com/easy-gluten-free-keto-tiramisu/',
        websiteDesc: 'gnom-gnom',
        ingredientsGroup: [
            {
                heading: 'For the Coffee Soaked Biscuit Base',
                ingredientsIndividual: [
                    {
                        quantity: '25',
                        quantityUnit: 'g',
                        ingredient: 'almond flour'
                    },
                    {
                        quantity: '1-3',
                        quantityUnit: 'teaspoons',
                        ingredient: 'powdered erythritol or allulose and xylitol*'
                    },
                    {
                        quantityUnit: 'pinch',
                        ingredient: 'cinnamon',
                    },
                    {
                        quantityUnit: 'pinch',
                        ingredient: 'kosher salt'
                    },
                    {
                        quantity: '2',
                        quantityUnit: 'teaspoons',
                        ingredient: 'melted unsalted grass-fed butter'
                    },
                    {
                        quantity: '1',
                        quantityUnit: 'teaspoon',
                        ingredient: 'espresso or strong-brewed coffee'
                    }
                ]
            },
            {
                heading: 'For the Keto Tiramasu',
                ingredientsIndividual: [
                    {
                        quantity: '1',
                        ingredient: 'large egg yolk'
                    },
                    {
                        quantity: '1',
                        quantityUnit: 'tablespoon',
                        ingredient: 'dry Marsala wine or dry white wine'
                    },
                    {
                        quantity: '2-3',
                        quantityUnit: 'tablespoons',
                        ingredient: 'powdered erythritol or xylitol, to taste (we use 2)*'
                    },
                    {
                        quantity: '70',
                        quantityUnit: 'g',
                        ingredient: 'mascarpone cheese at room temperature'
                    },
                    {
                        quantity: '40',
                        quantityUnit: 'g',
                        ingredient: 'heavy cream whipped'
                    },
                    {
                        ingredient: 'cocoa powder for dusting'
                    }
                ]
            }
        ],
        instructionsGroup: [
            {
                heading: 'For the Coffee Soaked Biscuit Base',
                instructionsIndividual: [
                    {
                        step: 'Lightly toast almond flour in a dry skillet or pan over medium heat, until fully golden and fragrant (2-4 minutes). This is very important taste-wise, so don\'t skip!'
                    },
                    {
                        step: 'Transfer toasted almond flour to a small bowl (or go straight for the serving glass), and mix in Swerve, cinnamon and salt. Add in butter and coffee, mix until thoroughly combined, and sprinkle into serving glass or dish. Refrigerate while you make the tiramisu (and don\'t worry if it tastes soggy right now!).'
                    }
                ]
            },
            {
                heading: 'For the Keto Tiramasu (the easy version)',
                instructionsIndividual: [
                    {
                        step: 'Add heavy cream to a medium bowl and beat with an electric mixer until whipped (2-3 minutes). Set aside.'
                    },
                    {
                        step: 'Fold in mascarpone, marsala (optional), and powdered sweetener to taste.'
                    },
                    {
                        step: 'Transfer to prepared serving glass and freeze for 30-40 minutes or refrigerate for a couple hours (or overnight). Serve with a generous dusting of cocoa powder.'
                    }
                ]
            },
            {
                heading: 'For the Keto Tiramasu (the Zabaglione version)',
                instructionsIndividual: [
                    {
                        step: 'Add heavy cream to a medium bowl and beat with an electric mixer until whipped (2-3 minutes). Set aside.'
                    },
                    {
                        step: 'Beat egg yolk, marsala and powdered sweetener in a heat-proof bowl set over a simmering water bath. Making sure the bottom doesn\'t touch the water. Whisk rapidly and constantly (much easier with an electric mixer or handheld whisk), until tripled in volume, 4-6 minutes.'
                    },
                    {
                        step: 'Remove from heat and fold in mascarpone until thoroughly combined.'
                    },
                    {
                        step: 'Fold in whipped cream gently until creamy smooth, transfer to prepared serving glass and freeze for 30-40 minutes or refrigerate for a couple hours (or overnight). Serve with a generous dusting of cocoa powder.'
                    }
                ]
            }
        ],
        notes: [
            '*If using xylitol, make sure to be careful if you have a pup around the house, as it’s highly toxic to the little guys! 🐕'
        ],
        nutritionNotes: 'Each batch of our keto tiramisu-for-1 yields a full-sized (very large!) serving. So I prefer to portion it into two servings, rather than indulge all at once (2.5g net carbs rather than 5g net). But feel free to portion it even smaller (think tiramisu fat bombs!) in small muffin pans or moulds. Keep in the fridge for up to 4 days, and in the freezer afterwards.',
        nutrition: '../../assets/images/keto-tiramasu-nutrition.png',
        takenFromWebsite: 'https://www.gnom-gnom.com/easy-gluten-free-keto-tiramisu/',
        takenFromLabel: 'gnom-gnom.com'
    }
]