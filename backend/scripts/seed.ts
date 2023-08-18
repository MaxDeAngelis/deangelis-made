import mongoose from 'mongoose';

import Recipe from '../Models/recipe';

mongoose.connect('mongodb://127.0.0.1:27017/deangelismade');

Recipe.create([
  {
    name: 'One pot garlic pasta',
    author: 'Katie DeAngelis',
    description: 'TBD',
    prepTime: '0:10',
    cookTime: '0:20',
    servings: '4',
    modDate: '2017-11-11 10:39:07',
    steps: [
      {
        text: 'Heat olive oil in a large skillet over medium high heat. Add garlic and cook, stirring frequently, until fragrant, about 1-2 minutes.',
      },
      {
        text: 'Stir in chicken broth, milk, butter and fettuccine; season with salt and pepper, to taste.',
      },
      {
        text: 'Bring to a boil; reduce heat and simmer, stirring occasionally, until pasta is cooked through, about 18-20 minutes. Stir in Parmesan. If the mixture is too thick, add more milk as needed until desired consistency is reached.',
      },
      { text: 'Serve immediately, garnished with parsley, if desired.' },
    ],
    ingredients: [
      { text: '1 Pinch Kosher salt' },
      { text: '8 oz Fettuccine' },
      { text: '2 Tbsp Unsalted butter' },
      { text: '1 Cup Milk' },
      { text: '2 Tbsp Parsley' },
      { text: '2 Cup Chicken broth' },
      { text: '1/4 Cup Grated parmesan' },
      { text: '4 Cloves Garlic' },
      { text: '1 Pinch Black pepper' },
      { text: '1 Tbsp Olive oil' },
    ],
  },
  {
    name: "Aunt Rita's lemon cheesecake bars",
    author: 'Katie DeAngelis',
    description: 'TBD',
    prepTime: '0:15',
    cookTime: '0:35',
    servings: '16',
    modDate: '2017-11-11 11:24:15',
    steps: [
      { text: 'Preheat oven to 350 degrees.' },
      {
        text: 'Combine yellow cake mix, one egg, and stick of butter (melted). Mixture should be crumbly. Pet the mixture into the bottom of a 13x9 inch baking pan.',
      },
      {
        text: 'Beat cream cheese, powdered sugar, lemon juice, and three eggs until light and smooth. Pour over crust mixture.',
      },
      {
        text: 'Bake for 30-35 minutes. Sprinkle the top with powdered sugar. Once cooled, cut into squares.',
      },
    ],
    ingredients: [
      { text: '4 Eggs' },
      { text: '1 package Yellow (pudding in mix) cake mix' },
      { text: '1 tsp lemon juice' },
      { text: '8 oz cream cheese' },
      { text: '1 lb Powdered sugar' },
      { text: '1 stick Unsalted butter' },
    ],
  },
  {
    name: 'Roasted monkfish and tomatoes',
    author: 'Katie DeAngelis',
    description: 'TBD',
    prepTime: '0:15',
    cookTime: '0:12',
    servings: '4',
    modDate: '2017-11-11 10:41:58',
    steps: [
      { text: 'Preheat the oven to 450Â°F.' },
      { text: 'Line a baking sheet with parchment paper.' },
      {
        text: 'Arrange slices of fish and tomatoes alternately, overlapping them slightly, to form two long rows.',
      },
      {
        text: 'Season with salt and pepper, drizzle with oil and sprinkle with chile flakes.',
      },
      {
        text: 'Roast in the bottom third of the oven, without flipping, until fish is just cooked through and tomatoes are bubbly and caramelized, 10 to 12 minutes.',
      },
    ],
    ingredients: [
      { text: '1/2 tsp Sea salt' },
      { text: '3 Roma tomatoes' },
      { text: '3/4 lb Monkfish' },
      { text: '1/2 tsp Crushed red chile flakes' },
      { text: '1 1/2 tsp Extra virgin olive oil' },
      { text: '1/4 tsp Black pepper' },
    ],
  },
  {
    name: 'Cherry brown sugar fool with honey almonds',
    author: 'Katie DeAngelis',
    description: 'TBD',
    prepTime: '0:20',
    cookTime: '0:10',
    servings: '4',
    modDate: '2017-11-11 10:43:29',
    steps: [
      {
        text: 'Preheat oven to 400 degrees and line a baking sheet with a baking mat.',
      },
      {
        text: 'In a small bowl, coat nuts with honey. Spread nuts on the baking mat. Bake 7 to 10 minutes, until golden. Transfer nuts to a bowl to cool. Coarsely chop, and set aside.',
      },
      {
        text: 'In a small saucepan, combine cherries, lemon juice, almond extract, sugar and water. Cook over medium heat, stirring frequently, until cherries begin to break down and juices boil and thicken, about 5 minutes.',
      },
      {
        text: 'Remove from heat, and transfer to a small bowl. Place bowl in a larger bowl of ice water, and stir mixture occasionally until cold.',
      },
      {
        text: 'In a separate bowl, combine cream, brown sugar, and vanilla and beat until stiff peaks form; fold in 1/3 cup of the cherry sauce. Combine, but not fully -- there should be beautiful cherry streaks running through the fresh cream.',
      },
      {
        text: 'Divide among four dessert dishes, and spoon remaining cherries over tops. Garnish with the honey almonds.',
      },
    ],
    ingredients: [
      { text: '2 Tbsp Brown sugar' },
      { text: '1 Cup Pitted fresh sweet cherries' },
      { text: '1 Tbsp Honey' },
      { text: '3/4 Cup Heavy cream' },
      { text: '1/3 Cup Sliced almonds' },
      { text: '2 Tbsp Water' },
      { text: '1 Tbsp White sugar' },
      { text: '1/2 tsp Almond extract' },
      { text: '1 tsp Vanilla extract' },
      { text: '1 tsp lemon juice' },
    ],
  },
  {
    name: 'Broiled tilapia with parmesan and herbs',
    author: 'Katie DeAngelis',
    description: 'TBD',
    prepTime: '0:10',
    cookTime: '0:08',
    servings: '4',
    modDate: '2017-11-11 10:45:04',
    steps: [
      {
        text: 'Combine 1/4 Cup Parmesan cheese with remaining ingredients (except fish).',
      },
      {
        text: 'Coat fillets with mixture and place in baking dish or shallow platter and let marinate for 15 to 20 minutes.',
      },
      { text: 'Preheat broiler. ' },
      { text: 'Transfer fillets to a foil-lined broiler pan.' },
      {
        text: 'Spoon a few tablespoons marinade on top and sprinkle with remaining Parmesan.',
      },
      {
        text: 'Broil 4 to 6 inches from heat until topping is lightly browned and fish flakes easily with a fork, 5 to 8 minutes.',
      },
    ],
    ingredients: [
      { text: '1/2 tsp Dried basil' },
      { text: '1 Lemons' },
      { text: '4 6-8 oz Tilapia fillets' },
      { text: '2 Tbsp Unsalted butter' },
      { text: '1 Pinch Black pepper' },
      { text: '2 Tbsp Greek yogurt (fat free)' },
      { text: '1 Pinch Sea salt' },
      { text: '2 Tbsp Mayonnaise (olive oil)' },
      { text: '1/4 tsp Onion powder' },
      { text: '1/2 Cup Grated parmesan' },
      { text: '1/2 tsp Dried tarragon' },
    ],
  },
  {
    name: 'Citrus bow tie pasta',
    author: 'Katie DeAngelis',
    description: 'TBD',
    prepTime: '0:20',
    cookTime: '0:10',
    servings: '6',
    modDate: '2017-11-11 10:48:18',
    steps: [
      {
        text: 'Cook pasta in boiling salted water according to package directions. Drain, but do not rinse the pasta. ',
      },
      {
        text: 'Place hot pasta in a large mixing bowl. Add avocado, green onions, feta, tomatoes and cilantro.',
      },
      {
        text: 'Whisk together lemon juice and olive oil and drizzle over the warm pasta. Toss to combine. Season with salt and pepper and serve warm or cold.',
      },
    ],
    ingredients: [
      { text: '1/3 Cup Garlic-infused olive oil' },
      { text: '1 lb Whole wheat bow tie pasta' },
      { text: '1/4 Cup lemon juice' },
      { text: '1/2 Cup Cilantro' },
      { text: '2 Roma tomatoes (seeded &amp;amp; chopped)' },
      { text: '3/4 Cup Feta' },
      { text: '1/2 tsp Black pepper' },
      { text: '3 Green onions' },
      { text: '1/2 tsp Sea salt' },
      { text: '1 Avocado' },
    ],
  },
  {
    name: 'Grilled salmon with sweet corn avocado salad',
    author: 'Katie DeAngelis',
    description: 'TBD',
    prepTime: '0:10',
    cookTime: '0:10',
    servings: '4',
    modDate: '2017-11-11 10:51:33',
    steps: [
      {
        text: 'Put corn, tomatoes, avocado, onion, cilantro, oil and vinegar into a large bowl and toss gently to combine. Set aside.',
      },
      {
        text: 'Prepare a grill for medium heat cooking. Spray fillets all over with spray oil, then sprinkle on both sides with salt and pepper. Place fillets, skin-side up, on the grill. After about 2 minutes, turn salmon a quarter turn and cook 2 minutes longer. Flip and grill until cooked through, 4 to 5 minutes more.',
      },
      {
        text: 'Remove salmon from the grill and top with corn and avocado salad.',
      },
    ],
    ingredients: [
      { text: '1/4 Cup Chopped red onion' },
      { text: '1/4 tsp Sea salt' },
      { text: '1 Avocado diced' },
      { text: '1 Spray Canola spray oil' },
      { text: '1 Cup Halved grape tomatoes' },
      { text: '4 (4- to 6-ounce) boneless skinless salmon fil' },
      { text: '4 Ears Fresh corn kernels removed from cob' },
      { text: '2 Tbsp Red wine vinegar' },
      { text: '2 Tbsp Extra-virgin olive oil' },
      { text: '1/4 Cup Chopped fresh cilantro' },
      { text: '1/4 tsp Black pepper' },
    ],
  },
  {
    name: 'Hummus and vegetable stuffed pita',
    author: 'Katie DeAngelis',
    description: 'TBD',
    prepTime: '0:10',
    cookTime: '0:00',
    servings: '2',
    modDate: '2017-11-11 10:58:01',
    steps: [
      {
        text: 'Spread half of the hummus inside each pita half then fill with lettuce and vegetables and serve.',
      },
    ],
    ingredients: [
      { text: '1/3 Cup Baby spinach' },
      { text: '1 Whole wheat pita bread' },
      { text: '1/2 Cup Hummus' },
      { text: '1 Avocado diced' },
      { text: '1/2 Cup Sliced cucumbers' },
      { text: '1/2 Cup Shredded carrots' },
      { text: '1/2 Cup Cherry tomatoes' },
    ],
  },
  {
    name: 'Sausage with zucchini and tomatoes',
    author: 'Katie DeAngelis',
    description: 'TBD',
    prepTime: '0:15',
    cookTime: '0:10',
    servings: '6',
    modDate: '2017-11-11 10:56:19',
    steps: [
      {
        text: 'Prepare sausages according to package directions, either in a saute pan or on the grill. While they are cooking, heat olive oil in a large heavy saute pan over medium high heat. Add garlic and oregano, stir for a few seconds, then add zucchini and cook 3 to 5 minutes. ',
      },
      {
        text: 'When sausages are cooked, cut into large bite-sized pieces and add to pan along with tomatoes, basil, salt and pepper. Continue to saute until tomatoes are just softened, about 1 minute more. Transfer to a large platter and serve.',
      },
    ],
    ingredients: [
      { text: '3/4 lb Mixed red and yellow cherry or grape tomatoes' },
      { text: '1 lb Zucchini' },
      { text: '1 Pinch Black pepper' },
      { text: '4 Cloves Garlic' },
      { text: '1 Pinch Sea salt' },
      { text: '2 Tbsp Extra virgin olive oil' },
      { text: '3 Tbsp Fresh oregano' },
      { text: '6 Links Sweet italian sausage' },
      { text: '1/2 Cup Fresh basil' },
    ],
  },
  {
    name: 'Buttermilk and honey wheat bread',
    author: 'Katie DeAngelis',
    description: 'TBD',
    prepTime: '0:10',
    cookTime: '0:25',
    servings: '12',
    modDate: '2017-11-11 15:47:55',
    steps: [
      {
        text: 'Put all ingredients in bread machine or in the order recommended by bread machine manufacturer.',
      },
      { text: 'Bake using whole wheat or regular bake cycle.' },
    ],
    ingredients: [
      { text: '1 tsp Unsalted butter' },
      { text: '2 Tbsp White sugar' },
      { text: '2 Tbsp Honey' },
      { text: '2 tsp Active yeast' },
      { text: '1 Cup Buttermilk' },
      { text: '1/2 Cup Whole wheat flour' },
      { text: '2 1/2 Cup Bread flour' },
      { text: '1/4 tsp Baking soda' },
      { text: '1/2 tsp Kosher salt' },
    ],
  },
  {
    name: "Max's marinara sauce",
    author: 'Max DeAngelis',
    description: 'TBD',
    prepTime: '00:30',
    cookTime: '04:00',
    servings: '10',
    modDate: '2017-11-11 10:27:04',
    steps: [
      { text: 'Mince or process onion and garlic' },
      { text: 'Saute in pan with oil and the rest of the dry ingredients' },
      { text: 'Blend tomatoes in a blender for consistency' },
      { text: 'Once ingredients in pan are fragrant, add blended tomatoes' },
      { text: 'Bring to a mild simmer for about 30 minutes' },
      { text: 'Transfer from pan to crock pot and cook on low for 3+ hours' },
    ],
    ingredients: [
      { text: '2 Can(s) Ground peeled tomatos' },
      { text: '8 Clove(s) Garlic' },
      { text: '1 Onions' },
      { text: '1 Bay leaves' },
      { text: '3 Tbsp Olive oil' },
      { text: '1 tsp Kosher salt' },
      { text: '1 Tbsp Basil' },
      { text: '1 Can(s) San Marzano tomatos' },
      { text: '1 Tbsp Oregano' },
    ],
  },
  {
    name: 'Teriyaki beef jerky',
    author: 'Max DeAngelis',
    description: 'TBD',
    prepTime: '24:00',
    cookTime: '05:00',
    servings: '15',
    modDate: '2017-11-11 10:35:12',
    steps: [
      {
        text: 'Cut steak into 1 inch by 1/8 inch strips, being sure to cut cross the grain',
      },
      {
        text: 'Combine meat with teriyaki marinade in a large 1 gallon zip lock bag. Squeeze out all of the air in the bag. Let stand in fridge over night',
      },
      {
        text: 'Lay strips of meat on dehydrator racks and sprinkle with dry ingredients',
      },
      {
        text: 'Dehydrate for 3-5 hours at 150 degrees or until all moisture is removed ',
      },
    ],
    ingredients: [
      { text: '2 Cup Teriyaki marinade' },
      { text: '1 Tbsp Black pepper' },
      { text: '1 Tbsp Onion powder' },
      { text: '1 Tbsp Garlic salt' },
      { text: '1 Pound(s) Lean beef' },
    ],
  },
  {
    name: 'Filet Mignon',
    author: 'Max DeAngelis',
    description: 'TBD',
    prepTime: '00:30',
    cookTime: '00:15',
    servings: '2',
    modDate: '2019-03-11 19:39:26',
    steps: [
      {
        text: 'Remove the filets from your refrigerator and set them on your counter top for approximately 30 minutes. This allows them to come to room temperature. Filet mignon is lean and typically does not require any trimming.',
      },
      { text: 'Meanwhile, pre-heat your oven to 425 degrees.' },
      {
        text: 'After your filets have come to room temperature, season the top and bottom surfaces with salt and black pepper, using your fingers to gently press down on the seasoning so it adheres to the meat. Do not season the sides. Set aside.',
      },
      {
        text: 'Heat an oven-proof stainless steel sauté pan over medium-high heat. Add the olive oil and let it get hot. Then add the filets and let them cook undisturbed for 4 minutes. DO NOT move the filets around in the pan during this time. Then, using a pair of tongs, flip the filets over to the second side and IMMEDIATELY transfer the entire sauté pan to your pre-heated oven. Cook the filets in your oven for 5-8 minutes, depending on your preferred level of doneness: 5-6 minutes for rare, 6-7 minutes for medium-rare or 7-8 minutes for medium.',
      },
      {
        text: 'Carefully remove the sauté pan from your oven and transfer the filets to a clean plate. Tent them with foil and let them rest for 5-7 minutes. Do not leave the filets to rest in your sauté pan, or they will overcook due to the residual heat in the pan.',
      },
      {
        text: 'Transfer the filets to serving plates, spooning any residual juices over top. Serve immediately.',
      },
    ],
    ingredients: [
      { text: '2 Pinch Salt' },
      { text: '2 Tbsp Olive oil' },
      { text: '2 Filet mignon steaks (6-8oz' },
      { text: ' ~2in thick)' },
    ],
  },
  {
    name: 'Chicken Marsala',
    author: 'Katie DeAngelis',
    description: 'TBD',
    prepTime: '00:15',
    cookTime: '00:30',
    servings: '4',
    modDate: '2020-08-04 06:27:57',
    steps: [
      {
        text: "Place the flour, 3/4 teaspoon salt, and 1/4 teaspoon pepper in a ziplock bag. Add the chicken to the bag; seal bag tightly and shake to coat chicken evenly. Set aside. Note: If your chicken breasts are large, it's best to first cut them horizontally to form four flat fillets, then pound them to an even 1/4-inch thickness.",
      },
      {
        text: 'Heat the oil and 2 tablespoons of the butter in a large skillet over medium-high heat. (Use a stainless steel pan for the best browning. Nonstick will work too, but you won’t get that nice golden color on the chicken.) Place the flour-dusted chicken in the pan, shaking off any excess first, and cook, turning once, until the chicken is golden and just barely cooked through, about 5 to 6 minutes total. Transfer the chicken to a plate and set aside.',
      },
      {
        text: 'Melt the remaining tablespoon of butter in the pan. Add the mushrooms and cook, stirring frequently, until the mushrooms begin to brown, 3 to 4 minutes. Add the shallots, garlic, and 1/4 teaspoon of salt; cook for 1 to 2 minutes more. Add the broth, Marsala, heavy cream, thyme, 1/4 teaspoon salt, and 1/8 teaspoon of pepper; use a wooden spoon to scrape any brown bits from the pan into the liquid. Bring the liquid to a boil, then reduce the heat to medium and gently boil, uncovered, until the sauce is reduced by about half, slightly thickened, and darkened in color, 10 to 15 minutes (you’re going for a thin cream sauce; it won’t start to thicken until the very end of the cooking time). Add the chicken back to the pan, along with any juices that accumulated on the plate. Reduce the heat to low and simmer until the chicken is warmed through and the sauce thickens a bit more, 2 to 3 minutes. Sprinkle with parsley, if using, and serve.',
      },
    ],
    ingredients: [
      { text: '2 Cloves Garlic' },
      { text: '1 Pinch Salt' },
      { text: '3 Tbsp All-purpose flour' },
      { text: '3 Tbsp Shallots' },
      { text: '2 Tbsp Parsley' },
      { text: '1 1/2 lb Chicken breast' },
      { text: '8 oz Button mushrooms' },
      { text: '2 tsp Fresh thyme' },
      { text: '2/3 Cup Heavy cream' },
      { text: '3 Tbsp Unsalted butter' },
      { text: '2/3 Cup Marsala wine' },
      { text: '1 Tbsp Olive oil' },
      { text: '2/3 Cup Chicken broth' },
      { text: '1 Pinch Ground black pepper' },
    ],
  },
  {
    name: 'No Bake Lactation Bites',
    author: 'Katie DeAngelis',
    description: 'TBD',
    prepTime: '00:10',
    cookTime: '00:10',
    servings: '24',
    modDate: '2020-08-26 08:15:07',
    steps: [
      {
        text: 'In the bowl of an electric mixer fitted with the paddle attachment, add all ingredients except for the chocolate chips. ',
      },
      {
        text: 'Mix on low speed until the mixture is well combined then stir in chocolate chips.',
      },
      {
        text: 'Roll mixture into 2-tablespoon sized smooth balls and place on a parchment-lined baking sheet.',
      },
      {
        text: 'Place in the refrigerator for 30 minutes or enjoy right away.',
      },
      {
        text: 'Once the bites have set, transfer them to an air-tight container and store in the refrigerator for up to 2 weeks.',
      },
    ],
    ingredients: [
      { text: '1/2 Cup Ground or milled flaxseed' },
      { text: '2 Cup Old-fashioned oats' },
      { text: '1/2 Cup Dark chocolate chips' },
      { text: '1 tsp Vanilla' },
      { text: '1/2 Cup Honey' },
      { text: '1 Cup Peanut butter' },
      { text: "3 Tbsp Brewer's yeast" },
    ],
  },
  {
    name: 'Banademic Bread',
    author: 'Katie DeAngelis',
    description: 'TBD',
    prepTime: '00:20',
    cookTime: '01:00',
    servings: '8',
    modDate: '2022-02-03 14:53:38',
    steps: [
      { text: 'Preheat your oven to 300°F' },
      { text: 'Rinse and dry your bananas.' },
      { text: 'Line a baking sheet with parchment paper or aluminum foil.' },
      { text: 'Place the unpeeled bananas on the lined baking sheet.' },
      {
        text: 'With the tines of a fork, poke a few holes in the banana skin. ',
      },
      {
        text: 'Bake the bananas for 15-30 minutes (cooking time will depend on the size of your bananas). When the peel becomes shiny and black, remove them from the oven.',
      },
      {
        text: 'When cool enough to handle, split open the skin in order to scoop out the roasted banana.',
      },
      {
        text: 'Preheat oven to 350°F. Butter a 9-by-5-by-3-inch loaf pan; set aside. In an electric mixer fitted with the paddle attachment, cream butter and sugar until light and fluffy. Add eggs and beat to incorporate.',
      },
      {
        text: 'In a medium bowl, whisk together flour, baking soda, and salt. Add to the butter mixture and mix until just combined. Add bananas, sour cream, and vanilla; mix to combine. Stir in cinnamon chips and pour into prepared pan.',
      },
      {
        text: 'Bake until a cake tester inserted into the center of the cake comes out clean, about 1 hour. Let rest in pan for 10 minutes, then turn out onto a rack to cool.',
      },
    ],
    ingredients: [
      { text: '1/2 Cup Sour cream' },
      { text: '1/2 Cup Butter' },
      { text: '3 Mashed Bananas' },
      { text: '1 tsp Salt' },
      { text: '1 tsp Baking soda' },
      { text: '1 1/2 Cup All-purpose flour' },
      { text: '1/2 Cup Cinnamon chips' },
      { text: '2 Large Eggs' },
      { text: '1 tsp Vanilla extract' },
      { text: '1 Cup Sugar' },
    ],
  },
]).then(() => console.log('done'));
