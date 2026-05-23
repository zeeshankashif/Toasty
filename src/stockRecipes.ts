import { Recipe } from './types';

export const STOCK_RECIPES: Partial<Recipe>[] = [
  {
    title: "Classic Avocado Toast",
    category: "Breakfast",
    rating: 5,
    estimatedTime: 10,
    ingredients: [
      "2 slices of sourdough bread",
      "1 ripe avocado",
      "1/2 lemon, juiced",
      "Pinch of sea salt and black pepper",
      "Red pepper flakes (optional)",
      "1 tbsp olive oil"
    ],
    instructions: [
      "Toast the sourdough bread slices until golden brown and crispy.",
      "In a small bowl, mash the avocado with lemon juice, salt, and pepper.",
      "Spread the mashed avocado evenly over the toasted bread.",
      "Drizzle with olive oil and sprinkle with red pepper flakes if desired."
    ],
    imageUrl: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Fluffy Blueberry Pancakes",
    category: "Breakfast",
    rating: 5,
    estimatedTime: 15,
    ingredients: [
      "1 cup all-purpose flour",
      "2 tbsp sugar",
      "1 tsp baking powder",
      "1/2 tsp baking soda",
      "1/4 tsp salt",
      "3/4 cup buttermilk",
      "1 large egg",
      "2 tbsp unsalted butter, melted",
      "1/2 cup fresh blueberries"
    ],
    instructions: [
      "Whisk dry ingredients in a large bowl.",
      "In another bowl, whisk buttermilk, egg, and melted butter.",
      "Pour wet ingredients into dry, mixing until just combined (lumps are fine).",
      "Heat a non-stick skillet over medium heat, grease lightly with butter.",
      "Pour battery onto skillet and drop blueberries onto each pancake.",
      "Cook until bubbles pop, flip, and cook until golden brown."
    ],
    imageUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Chai Spiced French Toast",
    category: "Breakfast",
    rating: 5,
    estimatedTime: 20,
    ingredients: [
      "4 thick slices of brioche bread",
      "2 large eggs",
      "1/4 cup whole milk",
      "1/2 tsp chai masala powder",
      "1 tsp vanilla extract",
      "2 tbsp butter for frying",
      "Maple syrup for serving"
    ],
    instructions: [
      "In a shallow dish, whisk eggs, milk, chai masala, and vanilla extract.",
      "Melt butter in a large skillet over medium heat.",
      "Dip brioche slices in the egg mixture, coating both sides.",
      "Fry slices for 3-4 minutes per side until crispy and golden.",
      "Serve warm with a dusting of powdered sugar and pure maple syrup."
    ],
    imageUrl: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Açai Berry Power Bowl",
    category: "Breakfast",
    rating: 4,
    estimatedTime: 8,
    ingredients: [
      "1 frozen açai packet",
      "1/2 cup frozen mixed berries",
      "1/2 cup almond milk",
      "1 ripe banana (split)",
      "1/4 cup gluten-free granola",
      "1 tbsp chia seeds",
      "1 tbsp sliced almonds"
    ],
    instructions: [
      "Blend the frozen açai packet, blended frozen berries, almond milk, and half a banana until thick.",
      "Pour into a serving bowl.",
      "Top with granola, chia seeds, sliced almonds, and the remaining sliced banana.",
      "Enjoy immediately with a drizzle of pure honey."
    ],
    imageUrl: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Mediterranean Shakshuka",
    category: "Breakfast",
    rating: 5,
    estimatedTime: 25,
    ingredients: [
      "1 tbsp olive oil",
      "1/2 medium onion, chopped",
      "1/2 red bell pepper, chopped",
      "2 cloves garlic, minced",
      "1 tsp ground cumin",
      "1 tsp paprika",
      "1 can crushed tomatoes (14 oz)",
      "3 large eggs",
      "Fresh cilantro & feta for garnish"
    ],
    instructions: [
      "Heat olive oil in a skillet. Saute onion, bell pepper, and garlic until soft.",
      "Stir in cumin and paprika, heating for 1 minute.",
      "Pour in crushed tomatoes and simmer on low for 10 minutes to thicken.",
      "Crack eggs directly into the spiced tomato sauce.",
      "Cover and cook on low heat for 5-8 minutes until egg whites are set.",
      "Garnish with feta crumbles and chopped cilantro before serving."
    ],
    imageUrl: "https://images.unsplash.com/photo-1590412200988-a436bb7050a7?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Smoked Salmon & Dill Omelette",
    category: "Breakfast",
    rating: 4,
    estimatedTime: 12,
    ingredients: [
      "3 large free-range eggs",
      "1 tbsp heavy cream",
      "2 oz smoked salmon, flaked",
      "1 tbsp fresh dill, chopped",
      "1 tbsp butter",
      "Pinch of sea salt and white pepper"
    ],
    instructions: [
      "Whisk eggs, cream, salt, and pepper in a medium bowl.",
      "Melt butter in a non-stick skillet over medium-low heat.",
      "Pour in egg mixture, letting it set slightly around the edges.",
      "Scatter flaked smoked salmon and chopped dill over the top.",
      "Fold the omelette in half once bottom is golden and eggs are cooked."
    ],
    imageUrl: "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Overnight Vanilla Chia Seed Pudding",
    category: "Breakfast",
    rating: 4,
    estimatedTime: 5,
    ingredients: [
      "1/4 cup chia seeds",
      "1 cup unsweetened almond milk",
      "1 tsp vanilla extract",
      "1 tbsp maple syrup",
      "Fresh strawberries & mint for garnish"
    ],
    instructions: [
      "In a glass jar, stir chia seeds, almond milk, vanilla, and maple syrup.",
      "Let sit for 5 minutes, then stir thoroughly to break any clumps.",
      "Cover and refrigerate for at least 4 hours (ideally overnight).",
      "Top with fresh sliced strawberries and mint leaves before serving."
    ],
    imageUrl: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Ultimate Breakfast Burrito",
    category: "Breakfast",
    rating: 5,
    estimatedTime: 15,
    ingredients: [
      "1 large flour tortilla",
      "2 large eggs, scrambled",
      "2 strips cooked bacon, crumbled",
      "1/4 cup shredded cheddar cheese",
      "2 tbsp fresh tomato salsa",
      "1/4 avocado, sliced"
    ],
    instructions: [
      "Scramble eggs in a small skillet until light and modern.",
      "Warm the flour tortilla in a dry pan until soft.",
      "Layer scrambled eggs, bacon, cheddar cheese, fresh salsa, and avocado slices in the center.",
      "Fold in the sides of the tortilla and roll tightly.",
      "Toast the rolled burrito on a skillet for 1 minute on each side to crisp."
    ],
    imageUrl: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Mediterranean Quinoa Bowl",
    category: "Lunch",
    rating: 4,
    estimatedTime: 20,
    ingredients: [
      "1 cup cooked quinoa",
      "1/2 cup cherry tomatoes, halved",
      "1/4 cup cucumber, diced",
      "1/4 cup kalamata olives, pitted",
      "1/4 cup feta cheese, crumbled",
      "2 tbsp hummus",
      "1 tbsp lemon vinaigrette"
    ],
    instructions: [
      "Place the cooked quinoa in the base of a bowl.",
      "Arrange the cherry tomatoes, cucumber, olives, and feta cheese on top of the quinoa.",
      "Add a dollop of hummus in the center.",
      "Drizzle the lemon vinaigrette over the entire bowl before serving."
    ],
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Classic Caesar Salad with Grilled Chicken",
    category: "Lunch",
    rating: 5,
    estimatedTime: 20,
    ingredients: [
      "1 chicken breast, grilled and sliced",
      "4 cups romaine lettuce, washed and chopped",
      "1/3 cup sourdough croutons",
      "1/4 cup parmigiano-reggiano, shaved",
      "1/4 cup Caesar salad dressing",
      "1 tbsp olive oil"
    ],
    instructions: [
      "Season chicken breast with olive oil, salt, pepper, and grill until fully cooked.",
      "In a large bowl, toss the crisp romaine lettuce with Caesar dressing.",
      "Add the chicken slices, sourdough croutons, and grated cheese on top.",
      "Toss gently and serve immediately with fresh black pepper."
    ],
    imageUrl: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Lemon Herb Tuna Salad Wrap",
    category: "Lunch",
    rating: 4,
    estimatedTime: 10,
    ingredients: [
      "1 can water-packed tuna, drained",
      "1 tbsp mayonnaise",
      "1 tsp Dijon mustard",
      "1 tbsp chopped red onion",
      "1 tbsp squeeze lemon juice",
      "2 large spinach tortillas",
      "Handful of sliced cucumbers"
    ],
    instructions: [
      "In a bowl, mix drained tuna, mayonnaise, mustard, red onion, and lemon juice.",
      "Mash with a fork until nicely combined.",
      "Place spinach tortillas on a flat work surface.",
      "Distribute cucumbers on the wrap, then top with tuna salad.",
      "Roll snugly, tucking the sides in, and slice in half."
    ],
    imageUrl: "https://images.unsplash.com/photo-1540713434306-53f2c3d1a3be?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Gourmet Grilled Cheese & Tomato Soup",
    category: "Lunch",
    rating: 5,
    estimatedTime: 22,
    ingredients: [
      "2 slices sourdough bread",
      "2 slices sharp cheddar",
      "1 slice gruyere cheese",
      "1.5 tbsp unsalted butter",
      "1 can creamy tomato soup",
      "Fresh basil leaves for serving"
    ],
    instructions: [
      "Heat tomato soup in a saucepan until hot and steaming.",
      "Butter one side of each bread slice.",
      "Place one slice butter-side-down in a hot skillet, and layer cheeses.",
      "Add top slice of bread butter-side-up.",
      "Grill for 3-4 minutes per side until gold and cheese melts completely.",
      "Serve warm, sliced diagonally, with soup topped with basil."
    ],
    imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Thai Peanut Noodle Salad",
    category: "Lunch",
    rating: 5,
    estimatedTime: 15,
    ingredients: [
      "4 oz dry ramen or Soba noodles",
      "1/2 cup shredded carrots",
      "1/2 cup purple cabbage, sliced",
      "2 tbsp peanut butter",
      "1 tbsp soy sauce",
      "1 tsp sriracha",
      "1 tbsp warm water",
      "1 tbsp crushed peanuts"
    ],
    instructions: [
      "Cook noodles according to instructions, rinse under cold water, and drain.",
      "Whisk peanut butter, soy sauce, sriracha, and warm water until emulsified.",
      "Toss cold noodles with carrots, sliced cabbage, and peanut sauce.",
      "Serve garnished with crushed peanuts and chopped green onions if desired."
    ],
    imageUrl: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Vietnamese Rice Paper Spring Rolls",
    category: "Lunch",
    rating: 4,
    estimatedTime: 25,
    ingredients: [
      "6 rice paper wrappers",
      "12 raw shrimp, boiled and halved",
      "1 cup rice vermicelli, cooked",
      "1/2 cup julienned cucumber",
      "1/4 cup fresh mint leaves",
      "Sweet chili peanut dip"
    ],
    instructions: [
      "Soak one rice paper wrapper in warm water for 5 seconds until pliable.",
      "Lay flat on a damp board; arrange 3 halves of shrimp in the middle.",
      "Top with rice vermicelli, julienned cucumber, and fresh mint leaves.",
      "Fold the bottom up, fold the sides in, and roll tightly.",
      "Repeat for all wrappers and serve cold with chili peanut dipping sauce."
    ],
    imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Creamy Avocado Pasta Salad",
    category: "Lunch",
    rating: 4,
    estimatedTime: 15,
    ingredients: [
      "2 cups fusilli or penne pasta",
      "1 ripe avocado, pitted",
      "1/4 cup fresh basil leaves",
      "1 clove garlic",
      "1 tbsp olive oil",
      "1/2 cup cherry tomatoes, halved",
      "1/2 cup mozzarella balls"
    ],
    instructions: [
      "Cook pasta in salted water, drain, and let cool.",
      "In a food processor, blend avocado, basil, garlic, and olive oil to make a green sauce.",
      "Toss the pasta with the green avocado sauce.",
      "Gently stir in halved cherry tomatoes and mozzarella balls.",
      "Season with salt and pepper to serve."
    ],
    imageUrl: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Harvest Apple & Pecan Salad",
    category: "Lunch",
    rating: 5,
    estimatedTime: 12,
    ingredients: [
      "4 cups baby arugula",
      "1 crisp apple, thinly sliced",
      "1/4 cup pecan halves, toasted",
      "1/4 cup goat cheese crumbles",
      "2 tbsp dried cranberries",
      "1.5 tbsp balsamic glaze"
    ],
    instructions: [
      "Spread baby arugula on a wide salad platter.",
      "Layer the crisp sliced apples, toasted pecans, cranberries, and goat cheese.",
      "Drizzle with sweet balsamic glaze.",
      "Serve as a light autumn-inspired lunch."
    ],
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Garlic Butter Salmon",
    category: "Dinner",
    rating: 5,
    estimatedTime: 25,
    ingredients: [
      "2 salmon fillets",
      "3 cloves garlic, minced",
      "2 tbsp butter, melted",
      "1 tbsp fresh parsley, chopped",
      "1/2 lemon, sliced",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.",
      "Place salmon fillets on the baking sheet and season generously with salt and pepper.",
      "In a small bowl, mix melted butter, minced garlic, and chopped parsley.",
      "Brush the garlic butter mixture over the salmon fillets.",
      "Top with lemon slices and bake for 12-15 minutes until salmon is flaky."
    ],
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Tuscan Garlic Chicken Pasta",
    category: "Dinner",
    rating: 5,
    estimatedTime: 30,
    ingredients: [
      "2 chicken breasts, cut into bite-sized pieces",
      "8 oz penne pasta",
      "2 cloves garlic, minced",
      "1/2 cup sun-dried tomatoes",
      "2 cups fresh baby spinach",
      "1/2 cup heavy cream",
      "1/4 cup grated parmesan cheese"
    ],
    instructions: [
      "Cook penne pasta in boiling water until al dente; drain and set aside.",
      "In a large skillet, cook chicken pieces in olive oil until golden and fully cooked.",
      "Add minced garlic and sun-dried tomatoes; cook for 1 minute.",
      "Reduce heat to medium-low, pour in heavy cream, and bring to a gentle simmer.",
      "Stir in the baby spinach until it wilts, then add parmesan cheese.",
      "Add cooked penne pasta to the skillet, toss to coat, and serve."
    ],
    imageUrl: "https://images.unsplash.com/photo-1621996346565-e3bb64e0be5e?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Szechuan Beef & Broccoli Stir-Fry",
    category: "Dinner",
    rating: 5,
    estimatedTime: 20,
    ingredients: [
      "1/2 lb flank steak, thinly sliced",
      "2 cups broccoli florets",
      "2 tbsp soy sauce",
      "1 tbsp sesame oil",
      "1 tbsp brown sugar",
      "1 tsp minced fresh ginger",
      "1 tbsp cornstarch"
    ],
    instructions: [
      "Whisk soy sauce, sesame oil, brown sugar, ginger, and cornstarch in a small bowl.",
      "Heat olive oil in a wok or large skillet over high heat.",
      "Add sliced steak, searing quickly for 2-3 minutes. Remove beef and set aside.",
      "Add broccoli florets to the skillet with 2 tbsp of water; steam for 3 minutes.",
      "Add the steak back to skillet, pour in the stir-fry sauce, and toss.",
      "Cook for 2 minutes until sauce is glassy and thick. Serve with rice."
    ],
    imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Spicy Seafood Cioppino",
    category: "Dinner",
    rating: 5,
    estimatedTime: 40,
    ingredients: [
      "6 raw shrimp, peeled",
      "6 fresh mussels, cleaned",
      "1/2 lb firm white fish cod, cubed",
      "1 can crushed tomatoes (14 oz)",
      "1/2 cup white wine",
      "1 clove garlic, minced",
      "1/2 tsp crushed chili flakes",
      "1 cup seafood broth"
    ],
    instructions: [
      "Sauté garlic and chili flakes in a large pot with olive oil for 1 minute.",
      "Pour in white wine to deglaze the pot.",
      "Add crushed tomatoes and seafood broth; simmer on medium-low for 15 minutes.",
      "Add cod cubes, shrimp, and mussels to the pot.",
      "Cover and simmer for 5-8 minutes until fish is cooked and mussels open.",
      "Discard any unopened mussels and serve warm with garlic bread."
    ],
    imageUrl: "https://images.unsplash.com/photo-1534080391025-09795d197360?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Homemade Margherita Pizza",
    category: "Dinner",
    rating: 4,
    estimatedTime: 30,
    ingredients: [
      "1 pre-made store bought pizza dough",
      "1/2 cup marinara sauce",
      "1 cup fresh sliced mozzarella cheese",
      "6 fresh whole basil leaves",
      "1 tbsp olive oil"
    ],
    instructions: [
      "Preheat your oven to 450°F (230°C) with a pizza stone inside if possible.",
      "Roll out pizza dough on a floured surface to form a 12-inch circle.",
      "Spread marinara sauce over the dough, leaving a small border.",
      "Top with mozzarella slices.",
      "Bake for 10-12 minutes until crust is browned and crisp.",
      "Top with fresh basil leaves and a drizzle of olive oil before slicing."
    ],
    imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Creamy Mushroom Risotto",
    category: "Dinner",
    rating: 4,
    estimatedTime: 35,
    ingredients: [
      "1 cup Arborio rice",
      "2 cups mixed mushrooms (cremini, shiitake), sliced",
      "1/2 onion, finely chopped",
      "3 cups warm vegetable broth",
      "1/3 cup dry white wine",
      "2 tbsp butter",
      "1/4 cup grated parmesan"
    ],
    instructions: [
      "Sauté onion and sliced mushrooms in a large pot until tender.",
      "Stir in Arborio rice, toasting it for 2 minutes.",
      "Add white wine, stirring constantly until fully absorbed.",
      "Begin adding warm broth 1/2 cup at a time, stirring constantly.",
      "Wait until broth is mostly absorbed before adding more.",
      "Once rice is tender and creamy (approx 20 mins), stir in butter and parmesan."
    ],
    imageUrl: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Slow-Cooked Beef Stew",
    category: "Dinner",
    rating: 5,
    estimatedTime: 120,
    ingredients: [
      "1 lb beef chuck roast, cubed",
      "3 large carrots, thickly sliced",
      "2 russet potatoes, peeled and cubed",
      "1 medium onion, diced",
      "3 cups beef stock",
      "2 tbsp tomato paste",
      "1 bay leaf",
      "2 tbsp all-purpose flour"
    ],
    instructions: [
      "Toss beef cubes in flour, salt, and black pepper.",
      "Sear beef in a large Dutch oven until caramelized; transfer to a dish.",
      "Sauté onion and carrots in the same pot for 3 minutes.",
      "Pour in tomato paste and beef stock; bring to a slow boil.",
      "Return beef to the stew, add potato cubes, and add the bay leaf.",
      "Cover and simmer on low for 1.5 to 2 hours until beef is tender."
    ],
    imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Vegetarian Lentil Shepherd’s Pie",
    category: "Dinner",
    rating: 4,
    estimatedTime: 50,
    ingredients: [
      "1 cup dry brown lentils",
      "1 onion, chopped",
      "1 cup frozen peas and carrots",
      "2 cups mashed potatoes, warm",
      "2 tbsp tomato paste",
      "1 cup vegetable broth",
      "1/4 tsp dried thyme"
    ],
    instructions: [
      "Boil lentils in water until cooked (about 20 minutes); drain.",
      "In a skillet, cook onions, then stir in pea & carrot mix.",
      "Add tomato paste, lentils, broth, thyme, simmer for 10 minutes.",
      "Transfer lentil filling to a baking dish.",
      "Spread warm mashed potatoes over the top.",
      "Bake at 375°F (190°C) for 20 minutes until potatoes are golden."
    ],
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Japanese Chicken katsu Curry",
    category: "Dinner",
    rating: 5,
    estimatedTime: 40,
    ingredients: [
      "2 chicken breasts",
      "1 cup panko breadcrumbs",
      "1 egg, beaten",
      "2 Japanese curry roux blocks",
      "1 onion, sliced",
      "1 potato, cubed",
      "1 carrot, sliced",
      "3 cups warm water"
    ],
    instructions: [
      "Dredge chicken in flour, then egg, then panko breadcrumbs.",
      "Shallow fry chicken until golden brown and cooked through; set aside.",
      "Sauté onion, potato, and carrot in a saucepan with a bit of oil.",
      "Add water, bring to a boil, then cover and simmer for 15 minutes.",
      "Turn off heat, stir in curry blocks until dissolved.",
      "Simmer on low for 5 minutes until thick. Serve chicken over rice with curry."
    ],
    imageUrl: "https://images.unsplash.com/photo-1626804475315-7644917dd641?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Classic Pork Carnitas",
    category: "Dinner",
    rating: 5,
    estimatedTime: 180,
    ingredients: [
      "2 lbs pork shoulder, cubed",
      "1 orange, halved and juiced",
      "1 lime, juiced",
      "4 cloves garlic, crushed",
      "1 tsp dried oregano",
      "1 tsp cumin powder",
      "1 cup Coca-Cola or water"
    ],
    instructions: [
      "Season pork shoulder cubes with oregano, cumin, salt, and pepper.",
      "Add pork, orange juice, lime juice, orange rinds, garlic, and liquid to slow cooker.",
      "Cook on low for 6-8 hours (or high for 4 hours) until tender.",
      "Shred pork, then broil on a baking sheet for 5-7 minutes to get crispy edges."
    ],
    imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Fudgy Chocolate Brownies",
    category: "Dessert",
    rating: 5,
    estimatedTime: 45,
    ingredients: [
      "1/2 cup unsalted butter, melted",
      "1 cup granulated sugar",
      "2 large eggs",
      "1 tsp vanilla extract",
      "1/3 cup cocoa powder",
      "1/2 cup all-purpose flour",
      "1/4 tsp salt",
      "1/2 cup chocolate chips"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C) and grease an 8x8 inch baking pan.",
      "In a large bowl, whisk together melted butter and sugar until well combined.",
      "Beat in the eggs and vanilla extract until the mixture is smooth.",
      "Fold in the cocoa powder, flour, and salt until just combined (do not overmix).",
      "Stir in the chocolate chips.",
      "Pour the batter into the prepared pan and bake for 20-25 minutes.",
      "Let cool completely before cutting into squares."
    ],
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Classic Crème Brûlée",
    category: "Dessert",
    rating: 5,
    estimatedTime: 60,
    ingredients: [
      "4 large egg yolks",
      "1/4 cup granulated sugar",
      "1 cup heavy cream",
      "1 tsp vanilla bean paste",
      "4 tbsp sugar for caramel topping"
    ],
    instructions: [
      "Preheat oven to 325°F (165°C) and place 4 ramekins in a baking dish.",
      "Whisk egg yolks and sugar until pale yellow and creamy.",
      "In a saucepan, heat heavy cream and vanilla until just boiling.",
      "Slowly temper warm cream into egg mixture, whisking constantly.",
      "Strain custard, pour into ramekins, fill baking dish with hot water halfway up.",
      "Bake for 35 minutes until set but slightly jiggly. Chill.",
      "Dust tops with sugar, use a kitchen torch to melt and caramelize."
    ],
    imageUrl: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Tangy Key Lime Pie",
    category: "Dessert",
    rating: 4,
    estimatedTime: 50,
    ingredients: [
      "1.5 cups graham cracker crumbs",
      "1/3 cup butter, melted",
      "3 cups sweetened condensed milk",
      "1/2 cup key lime juice",
      "1 tbsp lime zest",
      "3/4 cup sour cream"
    ],
    instructions: [
      "Mix graham cracker crumbs with melted butter and press into a pie dish.",
      "Preheat oven to 350°F (175°C).",
      "Whisk condensed milk, sour cream, lime juice, and zest until smooth.",
      "Pour filling into the crust.",
      "Bake for 8-10 minutes (do not brown).",
      "Cool completely, then refrigerate for at least 4 hours before slicing."
    ],
    imageUrl: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Italian Tiramisu Classico",
    category: "Dessert",
    rating: 5,
    estimatedTime: 30,
    ingredients: [
      "2 cups strong espresso, cooled",
      "24 ladyfinger cookies",
      "3 large egg yolks",
      "1/2 cup granulated sugar",
      "8 oz mascarpone cheese",
      "1 tbsp unsweetened cocoa powder"
    ],
    instructions: [
      "Whisk egg yolks and sugar over double-boiler until thick and light.",
      "Fold in soft mascarpone cheese until combined and smooth.",
      "Dip ladyfinger cookies quickly in the cold espresso.",
      "Layer dipped cookies in an 8x8 dish, topped with mascarpone mix.",
      "Create another layer, then sift cocoa powder heavily over the top.",
      "Chill for at least 6 hours to let flavors integrate."
    ],
    imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Warm Apple Crisp",
    category: "Dessert",
    rating: 5,
    estimatedTime: 50,
    ingredients: [
      "4 medium apples, peeled and chopped",
      "1 tbsp lemon juice",
      "1/2 cup rolled oats",
      "1/2 cup brown sugar",
      "1/4 cup unsalted butter, cubed",
      "1 tsp ground cinnamon"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Toss apple slices with lemon juice and half the cinnamon, place in a baker.",
      "Mix oats, brown sugar, cubed butter, and rest of cinnamon in a bowl.",
      "Rub butter with dry ingredients until crumbly.",
      "Scatter oatmeal crumbs evenly over apples.",
      "Bake for 35 minutes until bubbling and oats are crispy and brown."
    ],
    imageUrl: "https://images.unsplash.com/photo-1501156846897-99_d247f1cf34?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Decadent Lava Cake",
    category: "Dessert",
    rating: 5,
    estimatedTime: 25,
    ingredients: [
      "1/2 cup dark chocolate chips",
      "1/4 cup unsalted butter",
      "1 paper-cup powder sugar",
      "1 large egg + 1 yolk",
      "3 tbsp flour"
    ],
    instructions: [
      "Preheat oven to 425°F (218°C) and grease 2 ramekins.",
      "Melt butter and chocolate chips together in the microwave.",
      "Whisk in powdered sugar, then egg and egg yolk.",
      "Fold in flour gently until smooth.",
      "Pour into ramekins, bake for 12 minutes (edges set, centers soft/molten).",
      "Let cool for 2 minutes, flip onto a plate, dust with cocoa sugar."
    ],
    imageUrl: "https://images.unsplash.com/photo-160631356401-eff397262a03?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "New York Vanilla Cheesecake",
    category: "Dessert",
    rating: 5,
    estimatedTime: 90,
    ingredients: [
      "2 cups graham cracker crumbs",
      "1/2 cup butter, melted",
      "24 oz cream cheese, softened",
      "1 cup granulated sugar",
      "3 eggs",
      "1 tbsp vanilla paste",
      "1 cup sour cream"
    ],
    instructions: [
      "Combine graham crumb and butter, press into 9-inch springform pan.",
      "Whisk cream cheese and sugar on medium speed until smooth.",
      "Add eggs one at a time, followed by vanilla and sour cream.",
      "Pour over crust, wrap bottom of pan with aluminum foil.",
      "Place in a baking pan containing hot water (water bath).",
      "Bake at 325°F (165°C) for 60 minutes. Cool slowly before chilling."
    ],
    imageUrl: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Fresh Lemon Sorbet",
    category: "Dessert",
    rating: 4,
    estimatedTime: 120,
    ingredients: [
      "1 cup fresh lemon juice",
      "1 cup sugar",
      "1 cup water",
      "1 tbsp lemon zest"
    ],
    instructions: [
      "Boil sugar and water together for 3 minutes to make a simple syrup.",
      "Let syrup cool completely.",
      "Whisk cooled syrup with fresh lemon juice and zest.",
      "Pour into an ice cream maker and churn for 25 minutes.",
      "Transfer to a container and freeze for 2 hours before serving."
    ],
    imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Spicy Roasted Chickpeas",
    category: "Snack",
    rating: 4,
    estimatedTime: 35,
    ingredients: [
      "1 can (15 oz) chickpeas, rinsed and thoroughly dried",
      "1 tbsp olive oil",
      "1 tsp smoked paprika",
      "1/2 tsp garlic powder",
      "1/4 tsp cayenne pepper",
      "1/2 tsp sea salt"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.",
      "Ensure chickpeas are completely dry to ensure crispiness.",
      "Toss the chickpeas with olive oil, paprika, garlic powder, cayenne pepper, and salt.",
      "Spread them in a single layer on the baking sheet.",
      "Roast for 25-30 minutes, shaking the pan halfway through, until crispy.",
      "Let cool slightly before serving."
    ],
    imageUrl: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Crispy Baked Zucchini Fries",
    category: "Snack",
    rating: 4,
    estimatedTime: 25,
    ingredients: [
      "2 medium zucchini, cut into sticks",
      "1 cup panko breadcrumbs",
      "1/2 cup grated parmesan cheese",
      "2 large eggs, beaten",
      "1/2 tsp garlic powder",
      "1/2 tsp dried oregano"
    ],
    instructions: [
      "Preheat baking oven to 425°F (220°C) and line baking tray.",
      "In a bowl, mix panko breadcrumbs, parmesan, garlic powder, and oregano.",
      "Dip zucchini sticks in beaten eggs, then roll in the breadcrumb mix.",
      "Arrange sticks on baking tray without overlapping.",
      "Bake for 15-18 minutes until golden and crispy."
    ],
    imageUrl: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Creamy Garlic Hummus",
    category: "Snack",
    rating: 5,
    estimatedTime: 10,
    ingredients: [
      "1 can chickpeas, drained with liquid reserved",
      "1/4 cup tahini paste",
      "2 cloves garlic, peeled",
      "1 tbsp extra virgin olive oil",
      "1 large fresh lemon, juiced",
      "Pinch of cumin & sea salt"
    ],
    instructions: [
      "In a blender, spin tahini lemon juice for 1 minute until whipped.",
      "Add drained chickpeas, garlic, cumin, olive oil, and sea salt.",
      "Blend until silky, adding 1-2 tbsp of reserved chickpea water as needed.",
      "Scrape out into a shallow dish, drizzle oil, sprinkle with paprika."
    ],
    imageUrl: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Homemade Salted Caramel Popcorn",
    category: "Snack",
    rating: 5,
    estimatedTime: 15,
    ingredients: [
      "1/2 cup popping corn kernels",
      "1.5 tbsp vegetable oil",
      "1/2 cup granulated sugar",
      "2 tbsp clean butter",
      "1/2 tsp coarse sea salt"
    ],
    instructions: [
      "Pop corn kernels in a large lidded pot with vegetable oil.",
      "Heat sugar in a saucepan over medium heat until it melts into amber liquid.",
      "Quickly whisk butter and sea salt into the melted sugar.",
      "Pour caramelized sugar immediately over the popped corn, toss with spatula to coat.",
      "Spread on parchment to cool and harden."
    ],
    imageUrl: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Baked Sweet Potato Crisps",
    category: "Snack",
    rating: 4,
    estimatedTime: 30,
    ingredients: [
      "1 large sweet potato, scrubbed",
      "1.5 tbsp olive oil",
      "1/2 tsp sea salt",
      "1/4 tsp wood-smoked paprika"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C) and line two bake trays.",
      "Slice sweet potato paper-thin using a mandoline slicer.",
      "Toss slices with olive oil, sea salt, and smoked paprika in a bowl.",
      "Lay in a single layer on parchment paper sheets.",
      "Bake for 18-20 minutes, flipping halfway, until crispy and dehydrated."
    ],
    imageUrl: "https://images.unsplash.com/photo-1598114639535-c38634860b_d2?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Gourmet Avocado & Tomato Bruschetta",
    category: "Snack",
    rating: 4,
    estimatedTime: 15,
    ingredients: [
      "1 French baguette, sliced",
      "1 cup sweet cherry tomatoes, quartered",
      "1 avocado, pulsed/diced",
      "1 tbsp extra virgin olive oil",
      "1 fresh garlic clove",
      "Fresh basil leaves"
    ],
    instructions: [
      "Toast baguette slices in a cast-iron skillet until brown and crusty.",
      "Rub toasted warm warm bread surface with cut garlic.",
      "Toss chopped tomatoes, basil, and diced avocado in olive oil.",
      "Top garlic-scented baguette flats with avocado mixture.",
      "Finish with sea salt and serve immediately."
    ],
    imageUrl: "https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Crispy Parmesan Tortilla Chips",
    category: "Snack",
    rating: 5,
    estimatedTime: 12,
    ingredients: [
      "4 small flour tortillas",
      "1 tbsp olive oil",
      "1/4 cup grated fresh Parmesan",
      "1/2 tsp garlic salt"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Cut flour tortillas into triangles.",
      "Lightly brush both sides of tortilla chips with olive oil.",
      "Sprinkle parmesan and garlic salt on top.",
      "Bake for 7-9 minutes on a cookie sheet until crisp."
    ],
    imageUrl: "https://images.unsplash.com/photo-1518047601542-79f18c655718?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Cheesy Bacon Jalapeño Poppers",
    category: "Snack",
    rating: 5,
    estimatedTime: 25,
    ingredients: [
      "6 fresh jalapeño peppers",
      "4 oz cream cheese, softened",
      "1/2 cup shredded cheddar",
      "3 strips cooked bacon, crumbled",
      "1/4 tsp garlic powder"
    ],
    instructions: [
      "Slice jalapeños in half length-wise, scraping out seeds.",
      "In a bowl, mix cream cheese, cheddar, bacon crumbles, and garlic powder.",
      "Stuff each jalapeño half with the rich cream cheese mixture.",
      "Place on a baking dish.",
      "Bake at 400°F (200°C) for 15 minutes or until cheddar starts bubbling and sizzling."
    ],
    imageUrl: "https://images.unsplash.com/photo-1587573089734-09cb6b46367d?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Refreshing Berry Smoothie",
    category: "Drink",
    rating: 5,
    estimatedTime: 5,
    ingredients: [
      "1 cup mixed frozen berries (strawberries, blueberries, raspberries)",
      "1/2 cup Greek yogurt",
      "1/2 cup almond milk",
      "1 tbsp honey or maple syrup",
      "1/2 banana"
    ],
    instructions: [
      "Add all ingredients into a blender.",
      "Blend on high speed until smooth and creamy.",
      "If the smoothie is too thick, add a splash more almond milk.",
      "Pour into a glass and serve immediately."
    ],
    imageUrl: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Iced Caramel Macchiato",
    category: "Drink",
    rating: 5,
    estimatedTime: 7,
    ingredients: [
      "2 shots fresh hot espresso",
      "1 cup cold whole milk",
      "1 tbsp vanilla syrup",
      "1.5 tbsp sweet caramel drizzle",
      "1 cup ice cubes"
    ],
    instructions: [
      "Fill a tall tumbler glasses with clean ice cubes.",
      "Pour in vanilla syrup, followed by cold whole milk.",
      "Carefully pour espresso shots directly over the top to create layers.",
      "Drizzle with sweet caramel sauce in heavy zig-zags and enjoy."
    ],
    imageUrl: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Fresh Strawberry Basil Lemonade",
    category: "Drink",
    rating: 5,
    estimatedTime: 15,
    ingredients: [
      "1 cup fresh lemon juice",
      "4 fresh sweet strawberries, hulled",
      "4 clean fresh basil leaves",
      "1/3 cup sugar",
      "3 cups water",
      "Ice cubes"
    ],
    instructions: [
      "In a pitcher, muddle strawberries and basil leaves with sugar.",
      "Pour in lemon juice and water, stirring until sugar fully dissolves.",
      "Pass through a sieve to remove pulp if a clean consistency is desired.",
      "Serve poured over cold ice cubes, garnished with whole sliced berries."
    ],
    imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Matcha Green Tea Latte",
    category: "Drink",
    rating: 4,
    estimatedTime: 8,
    ingredients: [
      "1 tsp ceremonial matcha powder",
      "2 tbsp hot water (not boiling)",
      "1 cup unsweetened oat milk",
      "1 tbsp liquid sweetener honey"
    ],
    instructions: [
      "Sift matcha powder into a wide mug.",
      "Whisk matcha with warm water using a bamboo whisk in W motions until frothy.",
      "Warm the oat milk and froth using an automatic frother.",
      "Pour frothed oat milk slowly into the whisked matcha mug.",
      "Sweeten with liquid honey to taste."
    ],
    imageUrl: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Citrus Mint Refresher",
    category: "Drink",
    rating: 4,
    estimatedTime: 5,
    ingredients: [
      "1/2 grapefruit, juiced",
      "1 sprig fresh mint",
      "1 cup sparkling water",
      "1 tsp simple syrup",
      "Ice cubes"
    ],
    instructions: [
      "Muddle mint sprigs in simple syrup in a serving glass.",
      "Fill the glass with crushed ice.",
      "Pour in grapefruit juice followed by cold sparkling water.",
      "Stir lightly, garnish with whole mint leaf."
    ],
    imageUrl: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Golden Turmeric Ginger Latte",
    category: "Drink",
    rating: 4,
    estimatedTime: 10,
    ingredients: [
      "1 cup almond milk",
      "1/2 tsp ground turmeric",
      "1/4 tsp ground ginger",
      "Pinch of black pepper",
      "1 tbsp maple syrup"
    ],
    instructions: [
      "Add almond milk, turmeric, ginger, black pepper, and maple syrup to a saucepan.",
      "Whisk constantly on medium heat until steaming (do not boil).",
      "Froth up before pouring into an oversized cozy mug.",
      "Dust with cinnamon to serve."
    ],
    imageUrl: "https://images.unsplash.com/photo-1577968897866-be333a5_ec1?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Hot Spiced Apple Cider",
    category: "Drink",
    rating: 5,
    estimatedTime: 30,
    ingredients: [
      "4 cups organic apple juice",
      "2 cinnamon sticks",
      "4 whole cloves",
      "1 star anise",
      "1/2 orange, sliced"
    ],
    instructions: [
      "Add apple juice, cinnamon sticks, cloves, star anise, and orange slices to a pan.",
      "Bring to a soft boil over medium heat.",
      "Reduce heat to low and simmer covered for 25 minutes so spices steep.",
      "Strain spices out and pour steaming cider into mugs."
    ],
    imageUrl: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Iced Hibiscus Herbal Tea",
    category: "Drink",
    rating: 5,
    estimatedTime: 15,
    ingredients: [
      "2 hibiscus tea bags",
      "2 cups boiling water",
      "1 tbsp honey",
      "Lemon wedges for flavor"
    ],
    instructions: [
      "Steep hibiscus tea bags in boiling water for 10 minutes.",
      "Stir honey in while hot to dissolve completely.",
      "Let tea cool, then pour over tall glasses filled with ice.",
      "Squeeze a fresh lemon wedge on top before serving."
    ],
    imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Frozen Piña Colada Mocktail",
    category: "Drink",
    rating: 5,
    estimatedTime: 5,
    ingredients: [
      "1 cup frozen pineapple chunks",
      "1/2 cup cream of coconut",
      "1/2 cup organic pineapple juice",
      "1 cup ice cubes"
    ],
    instructions: [
      "Place all ingredients (frozen pineapple, coconut cream, pineapple juice, and ice) in a high-powered blender.",
      "Blend on top speed until beautifully smooth and unified.",
      "Serve garnished with a pineapple wedge and paper straw."
    ],
    imageUrl: "https://images.unsplash.com/photo-1583064313642-a7c149480c7e?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Classic Creamy Espresso Martini",
    category: "Drink",
    rating: 5,
    estimatedTime: 5,
    ingredients: [
      "1.5 oz freshly brewed hot espresso",
      "1.5 oz vodka",
      "1 oz Coffee Liqueur Kahlúa",
      "Handful of ice cubes",
      "3 whole roasted coffee beans"
    ],
    instructions: [
      "In an elegant cocktail shaker, add espresso, vodka, Kahlúa, and plenty of ice cubes.",
      "Shake vigorously for 15-20 seconds to establish a thick head of micro-foam.",
      "Double strain into a chilled martini coupon glass.",
      "Garnish with three coffee beans arranged in a triad representing health, wealth, and happiness."
    ],
    imageUrl: "https://images.unsplash.com/photo-1545438102-799c3991ffb2?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Strawberry Banana Smoothie Bowl",
    category: "Breakfast",
    rating: 5,
    estimatedTime: 10,
    ingredients: [
      "1 cup frozen strawberries",
      "1 ripe banana",
      "1/2 cup almond milk",
      "1 tbsp chia seeds",
      "Handful of granola",
      "Fresh strawberries for topping"
    ],
    instructions: [
      "Blend the frozen strawberries, banana, and almond milk until thick and creamy.",
      "Pour the blended mixture into a serving bowl.",
      "Top with granola, chia seeds, and sliced fresh strawberries in clean rows."
    ],
    imageUrl: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Spinach and Feta Frittata",
    category: "Breakfast",
    rating: 4,
    estimatedTime: 20,
    ingredients: [
      "6 large eggs",
      "1 cup fresh spinach, chopped",
      "1/2 cup crumbled feta cheese",
      "1/4 cup red onion, diced",
      "2 tbsp milk",
      "1 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Whisk eggs, milk, salt, and pepper in a medium bowl.",
      "Heat olive oil in an oven-safe skillet and sauté onions and spinach until soft.",
      "Pour the egg mixture into the skillet and sprinkle crumbled feta on top.",
      "Bake for 12-15 minutes until eggs are completely set and slightly golden."
    ],
    imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Belgian Waffles with Strawberry Compote",
    category: "Breakfast",
    rating: 5,
    estimatedTime: 20,
    ingredients: [
      "2 cups waffle mix",
      "1 cup fresh strawberries, chopped",
      "2 tbsp sugar",
      "1 tbsp lemon juice",
      "Whipped cream for garnish"
    ],
    instructions: [
      "Prepare waffle batter according to package directions and cook in a waffle maker.",
      "In a small saucepan, simmer strawberries, sugar, and lemon juice until thickened (approx 10 minutes).",
      "Pour warm strawberry compote over freshly baked waffles and top with whipped cream."
    ],
    imageUrl: "https://images.unsplash.com/photo-1546272989-40c92909c86b?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Greek Yogurt Parfait",
    category: "Breakfast",
    rating: 5,
    estimatedTime: 5,
    ingredients: [
      "1 cup Greek yogurt",
      "1/2 cup gluten-free granola",
      "1/4 cup blueberries and honey",
      "Fresh mint for garnish"
    ],
    instructions: [
      "Layer half of the Greek yogurt in a glass or jar.",
      "Add a layer of granola, blueberries, and a drizzle of honey.",
      "Repeat the layers and serve garnished with a fresh mint leaf."
    ],
    imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Caprese Breakfast Toast",
    category: "Breakfast",
    rating: 4,
    estimatedTime: 10,
    ingredients: [
      "2 thick slices of sourdough bread",
      "2 tbsp basil pesto",
      "1 ripe tomato, sliced",
      "1/2 cup fresh mozzarella, sliced",
      "1 tbsp balsamic glaze"
    ],
    instructions: [
      "Toast sourdough slices until crispy.",
      "Spread basil pesto evenly on the toasted surfaces.",
      "Layer with fresh mozzarella sliced and tomato rounds.",
      "Drizzle with sweet balsamic glaze and serve immediately."
    ],
    imageUrl: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Denver Scramble",
    category: "Breakfast",
    rating: 5,
    estimatedTime: 12,
    ingredients: [
      "3 large eggs",
      "1/4 cup ham, diced",
      "1/4 cup green bell pepper, diced",
      "1/4 cup onion, diced",
      "1/4 cup cheddar cheese, shredded",
      "1 tbsp butter"
    ],
    instructions: [
      "Melt butter in a medium skillet over medium heat.",
      "Sauté diced ham, bell pepper, and onion for 4 minutes until veggies are tender.",
      "Whisk eggs with a pinch of salt and pour into the skillet.",
      "Scramble gently until cooked, then fold in cheddar cheese until melted."
    ],
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Lemon Poppyseed Muffins",
    category: "Breakfast",
    rating: 4,
    estimatedTime: 25,
    ingredients: [
      "1.5 cups all-purpose flour",
      "3/4 cup sugar",
      "1 tbsp lemon zest",
      "1 tbsp poppy seeds",
      "1/2 cup butter, melted",
      "1/2 cup Greek yogurt",
      "1 large egg"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C) and line a muffin pan.",
      "Whisk flour, sugar, lemon zest, and poppy seeds in a large bowl.",
      "Stir in melted butter, Greek yogurt, and egg until combined.",
      "Divide batter among muffin cups and bake for 18-20 minutes."
    ],
    imageUrl: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Stuffed Croissants with Almond Cream",
    category: "Breakfast",
    rating: 5,
    estimatedTime: 20,
    ingredients: [
      "2 large store-bought croissants",
      "1/4 cup almond flour",
      "2 tbsp soft butter",
      "2 tbsp sugar",
      "1 egg",
      "Pre-sliced almonds for topping"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C). Split croissants in half.",
      "Beat butter, sugar, almond flour, and egg to form a smooth cream.",
      "Spread half the cream inside croissants, and a dollop outside on top.",
      "Scatter sliced almonds on top and bake for 12 minutes until toasted."
    ],
    imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Breakfast Quesadilla with Black Beans",
    category: "Breakfast",
    rating: 4,
    estimatedTime: 12,
    ingredients: [
      "2 large flour tortillas",
      "2 scrambled eggs",
      "1/4 cup canned black beans, rinsed",
      "1/2 cup monterey jack cheese, shredded",
      "1 tbsp salsa"
    ],
    instructions: [
      "Place one tortilla in a skillet over medium heat.",
      "Scatter scrambled eggs, black beans, monterey jack, and salsa over tortilla.",
      "Top with the second tortilla.",
      "Cook for 3 minutes per side until tortilla is crispy and cheese is melted."
    ],
    imageUrl: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Caprese Panini",
    category: "Lunch",
    rating: 5,
    estimatedTime: 10,
    ingredients: [
      "1 ciabatta bread rolls",
      "2 thick slices of tomato",
      "1/2 cup fresh mozzarella",
      "1 tbsp basil pesto",
      "1 tsp balsamic glaze"
    ],
    instructions: [
      "Slice the ciabatta roll in half.",
      "Spread basil pesto on both inner halves.",
      "Add fresh mozzarella slices and tomato slices, then drizzle with balsamic glaze.",
      "Press in a hot panini press for 4-5 minutes until cheese is melty and bread is toasted."
    ],
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Chipotle Chicken Salad Wrap",
    category: "Lunch",
    rating: 5,
    estimatedTime: 15,
    ingredients: [
      "1 cup shredded cooked chicken",
      "2 tbsp mayonnaise",
      "1 tsp chipotle paste",
      "1/2 cup romaine lettuce, chopped",
      "1 flour tortilla"
    ],
    instructions: [
      "In a medium bowl, mix shredded chicken, mayonnaise, and chipotle paste.",
      "Lay out flour tortilla and place a layer of romaine lettuce in the center.",
      "Spoon chipotle chicken salad over lettuce.",
      "Roll wrap tightly, tucking in sides, and cut diagonally."
    ],
    imageUrl: "https://images.unsplash.com/photo-1504711331083-9c897789be81?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Black Bean and Corn Quesadilla",
    category: "Lunch",
    rating: 4,
    estimatedTime: 15,
    ingredients: [
      "1/2 cup canned black beans",
      "1/2 cup sweet corn kernels",
      "1/2 cup shredded cheddar cheese",
      "2 flour tortillas",
      "1 tsp taco seasoning"
    ],
    instructions: [
      "Mix black beans, corn, and taco seasoning in a small bowl.",
      "Layer filling and cheddar cheese between two tortillas.",
      "Toast in a dry skillet over medium heat for 3-4 minutes per side until cheese melts and tortillas crisp."
    ],
    imageUrl: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Creamy Butternut Squash Soup",
    category: "Lunch",
    rating: 5,
    estimatedTime: 30,
    ingredients: [
      "2 cups butternut squash, cubed",
      "1/2 onion, chopped",
      "1 clove garlic, minced",
      "1.5 cups vegetable broth",
      "1/4 cup heavy cream or coconut milk"
    ],
    instructions: [
      "Sauté onion and garlic in olive oil until translucent.",
      "Add butternut squash and vegetable broth, then simmer for 20 minutes until squash is fork-tender.",
      "Blend using an immersion blender until fully smooth.",
      "Stir in heavy cream and season with salt, nutmeg, and pepper to taste."
    ],
    imageUrl: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Asian Sesame Chicken Salad",
    category: "Lunch",
    rating: 5,
    estimatedTime: 15,
    ingredients: [
      "2 cups shredded chicken",
      "2 cups shredded green cabbage",
      "1/2 cup shredded carrots",
      "2 tbsp sesame oil",
      "1.5 tbsp soy sauce",
      "1 tbsp sesame seeds",
      "Crispy wonton strips for topping"
    ],
    instructions: [
      "In a large bowl, combine chicken, cabbage, and shredded carrots.",
      "Whisk sesame oil, soy sauce, and a touch of honey to make dressing.",
      "Toss salad with the dressing, and top with sesame seeds and wonton strips."
    ],
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Feta and Spinach Stuffed Pita",
    category: "Lunch",
    rating: 4,
    estimatedTime: 10,
    ingredients: [
      "1 pita bread pocket",
      "1 cup fresh spinach leaves",
      "1/4 cup crumbled feta cheese",
      "2 tbsp greek salad dressing",
      "1/4 cup sliced cucumbers"
    ],
    instructions: [
      "In a bowl, toss spinach, feta, cucumbers, and greek dressing.",
      "Warm pita pocket in the microwave for 10 seconds to soften.",
      "Stuff the dressing salad deep into the pita pocket and serve chilled."
    ],
    imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Tuscan White Bean Salad",
    category: "Lunch",
    rating: 4,
    estimatedTime: 12,
    ingredients: [
      "1 can cannellini white beans, rinsed",
      "1/2 cup cherry tomatoes, halved",
      "2 tbsp chopped red onion",
      "1 tbsp extra virgin olive oil",
      "1 tbsp lemon juice",
      "Fresh parsley, chopped"
    ],
    instructions: [
      "In a serving bowl, combine white beans, tomatoes, and red onion.",
      "Drizzle with olive oil, fresh lemon juice, and a pinch of salt.",
      "Toss gently and garnish generously with chopped parsley."
    ],
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Turkey Cobb Lettuce Wraps",
    category: "Lunch",
    rating: 5,
    estimatedTime: 12,
    ingredients: [
      "4 large butter lettuce leaves",
      "4 slices deli turkey, chopped",
      "1/4 cup cooked bacon, crumbled",
      "1/2 avocado, diced",
      "2 tbsp blue cheese dressing"
    ],
    instructions: [
      "Lay butter lettuce leaves flat on a platter.",
      "Divide chopped turkey, bacon crumbles, and diced avocado among leaves.",
      "Drizzle with rich blue cheese dressing and serve as a low-carb lunch wrap."
    ],
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "BLT Sandwich with Pesto Mayo",
    category: "Lunch",
    rating: 5,
    estimatedTime: 10,
    ingredients: [
      "2 slices of white bread",
      "3 strips bacon, cooked crispy",
      "2 tomato slices",
      "2 leaves romaine lettuce",
      "1 tbsp mayonnaise",
      "1 tsp basil pesto"
    ],
    instructions: [
      "In a small ramekin, mix mayonnaise and pesto to combine.",
      "Toast bread slices until golden.",
      "Spread pesto mayonnaise on both slices of bread.",
      "Layer crispy bacon, tomatoes, and romaine lettuce in between."
    ],
    imageUrl: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Creamy Lemon Parmesan Pasta",
    category: "Dinner",
    rating: 5,
    estimatedTime: 15,
    ingredients: [
      "8 oz spaghetti",
      "2 tbsp butter",
      "1 lemon, zested and juiced",
      "1/2 cup heavy cream",
      "1/2 cup grated parmesan cheese",
      "Fresh cracked black pepper"
    ],
    instructions: [
      "Cook spaghetti in heavily salted boiling water.",
      "Meanwhile, melt butter in a large skillet and add lemon juice and zest.",
      "Pour in heavy cream and let simmer for 2 minutes over low heat.",
      "Toss hot spaghetti in the lemon sauce, followed by grated parmesan.",
      "Stir until creamy and serve with fresh black pepper of high quality."
    ],
    imageUrl: "https://images.unsplash.com/photo-1612966608967-3091c9d8de5e?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Classic Chicken Parmigiana",
    category: "Dinner",
    rating: 5,
    estimatedTime: 30,
    ingredients: [
      "2 chicken cutlets",
      "1/2 cup marinara sauce",
      "1/2 cup shredded mozzarella",
      "1/2 cup breadcrumbs",
      "1 egg, beaten",
      "Parmesan cheese for topping"
    ],
    instructions: [
      "Coat chicken cutlets in egg wash, then dredge in breadcrumbs.",
      "Pan-fry in hot oil for 4 minutes per side until gold and crunchy.",
      "Place cutlets in a baking dish, spoon marinara sauce over each, and top with mozzarella.",
      "Broil at 400°F (200°C) for 5 minutes until mozzarella is brown and bubbling."
    ],
    imageUrl: "https://images.unsplash.com/photo-1632778149975-fcb718be75bd?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Grilled Teriyaki Salmon",
    category: "Dinner",
    rating: 5,
    estimatedTime: 20,
    ingredients: [
      "2 fresh salmon fillets",
      "3 tbsp teriyaki sauce",
      "1 tsp honey",
      "1 clove garlic, minced",
      "Sliced green onions & sesame seeds"
    ],
    instructions: [
      "In a small bowl, combine teriyaki sauce, honey, and minced garlic.",
      "Brush salmon fillets generously with the prepared lacquer.",
      "Sear in a hot grill-pan for 4-5 minutes per side, brushing with sauce.",
      "Garnish with sesame seeds and chopped green onions, serve over white rice."
    ],
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Beef Stroganoff with Egg Noodles",
    category: "Dinner",
    rating: 5,
    estimatedTime: 25,
    ingredients: [
      "1/2 lb beef loin, sliced into strips",
      "1 cup mushrooms, sliced",
      "1/2 onion, chopped",
      "1/2 cup sour cream",
      "2 cups cooked egg noodles",
      "1 tbsp butter"
    ],
    instructions: [
      "In a large skillet, sear beef strips in hot oil; remove and set aside.",
      "Melt butter in the skillet, sauté onions and mushrooms until tender.",
      "Slowly whisk in sour cream, reduce heat to low, and return beef to skillet.",
      "Simmer for 2 minutes to thicken, serving sauce hot over cooked egg noodles."
    ],
    imageUrl: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Vegetable Korma Curry",
    category: "Dinner",
    rating: 4,
    estimatedTime: 25,
    ingredients: [
      "1 cup cauliflower florets",
      "1/2 cup peas and carrot chunks",
      "1/2 cup coconut milk",
      "2 tbsp korma curry paste",
      "1/2 onion, finely diced",
      "Naan bread for serving"
    ],
    instructions: [
      "Sauté diced onions in a saucepan with oil until soft.",
      "Stir in korma curry paste and heat for 1 minute.",
      "Add vegetables, coconut milk, and 1/4 cup water, then simmer on low for 15 minutes.",
      "Serve hot with warm buttered naan bread."
    ],
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Classic Spaghetti Bolognese",
    category: "Dinner",
    rating: 5,
    estimatedTime: 35,
    ingredients: [
      "1/2 lb ground beef",
      "8 oz spaghetti",
      "1 can crushed tomatoes (14 oz)",
      "1/4 onion, diced",
      "2 Cloves garlic, minced",
      "1 tbsp Italian seasoning"
    ],
    instructions: [
      "Cook spaghetti according to package instructions.",
      "In a deep pan, brown ground beef with garlic and diced onions.",
      "Drain fat, add crushed tomatoes and Italian seasoning.",
      "Simmer for 20 minutes to rich consistency, and serve over spaghetti."
    ],
    imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Pork Chops in Creamy Mushroom Sauce",
    category: "Dinner",
    rating: 5,
    estimatedTime: 30,
    ingredients: [
      "2 golden pork chops",
      "1 cup white mushrooms, sliced",
      "2 cloves garlic, minced",
      "1/2 cup heavy cream",
      "1 tbsp olive oil",
      "Fresh thyme sprigs"
    ],
    instructions: [
      "Season pork chops with salt and pepper, sear in a hot skillet with oil for 5 minutes per side.",
      "Transfer chops to a plate; in the same skillet sauté mushrooms and garlic.",
      "Add heavy cream and thyme, simmer for 2 minutes to establish a thick sauce.",
      "Return pork chops, spoon sauce on top, and simmer for 3 minutes before serving."
    ],
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Spiced Lamb Koftas in Pita",
    category: "Dinner",
    rating: 5,
    estimatedTime: 30,
    ingredients: [
      "1/2 lb ground lamb",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "1/4 cup chopped mint",
      "2 pita pockets",
      "Yogurt tzatziki glaze"
    ],
    instructions: [
      "Mix ground lamb, cumin, coriander, and chopped mint.",
      "Shape into log skewers (koftas) and pan-sear for 6-8 minutes until browned.",
      "Stuff hot koftas inside pita pockets alongside cucumbers and yogurt tzatziki sauce."
    ],
    imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Pan-Seared Duck Breast",
    category: "Dinner",
    rating: 5,
    estimatedTime: 30,
    ingredients: [
      "1 duck breast, skin notched",
      "2 tbsp balsamic vinegar",
      "1 tbsp honey",
      "Salt & coarse black pepper"
    ],
    instructions: [
      "Place duct breast skin-side-down in a cold skillet.",
      "Turn heat to medium, cooking for 10 minutes to render a solid amount of fat.",
      "Flip, cook for 4 more minutes to establish medium-rare.",
      "Let rest for 5 minutes; meanwhile simmer balsamic, honey, and grease in skillet to glaze."
    ],
    imageUrl: "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Classic Lobster Roll",
    category: "Dinner",
    rating: 5,
    estimatedTime: 15,
    ingredients: [
      "1/2 lb cooked lobster meat, chopped",
      "1.5 tbsp mayonnaise",
      "1 tsp lemon juice",
      "1 tbsp buttered brioche bun",
      "Chopped fresh warm chives"
    ],
    instructions: [
      "In a bowl, toss lobster meat, mayonnaise, and fresh lemon juice lightly.",
      "Toast split-top brioche bun in a hot griddle with plenty of butter.",
      "Stuff lobster meat into toasted bun and garnish with chopped fresh chives."
    ],
    imageUrl: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Sheet Pan Lemon Garlic Shrimp",
    category: "Dinner",
    rating: 5,
    estimatedTime: 15,
    ingredients: [
      "1/2 lb jumbo shrimp, peeled",
      "2 tbsp olive oil",
      "3 cloves garlic, minced",
      "1 lemon, sliced thin",
      "1 cup asparagus spears, ends trimmed"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Toss peeled shrimp and asparagus with olive oil, minced garlic, salt, and pepper.",
      "Spread on a baking sheet, scatter lemon slices on top.",
      "Bake for 8-10 minutes until shrimp are pink and asparagus is tender."
    ],
    imageUrl: "https://images.unsplash.com/photo-1559742811-824132ab7cbd?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Moist Red Velvet Cupcakes",
    category: "Dessert",
    rating: 5,
    estimatedTime: 30,
    ingredients: [
      "1.25 cups cake flour",
      "3/4 cup sugar",
      "1 tbsp cocoa powder",
      "1/2 tsp baking soda",
      "1/2 cup buttermilk",
      "1/2 cup vegetable oil",
      "1 egg",
      "Red food coloring",
      "Cream cheese frosting"
    ],
    instructions: [
      "Preheat baking oven to 350°F (175°C) and line cupcake muffin pan.",
      "Whisk dry ingredients in a wide bowl.",
      "Beat buttermilk, oil, egg, and red food coloring to combine.",
      "Whisk wet and dry until fully smooth, spoon into cups, and bake for 18 minutes.",
      "Frost with cream cheese frosting when completely cooled."
    ],
    imageUrl: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Warm Chocolate Soufflé",
    category: "Dessert",
    rating: 5,
    estimatedTime: 40,
    ingredients: [
      "1/2 cup dark chocolate chips",
      "2 tbsp unsalted butter",
      "2 eggs, whites separated",
      "2 tbsp sugar",
      "Powdered sugar for dusting"
    ],
    instructions: [
      "Butter two soufflé ramekins and coat inside with granulated sugar.",
      "Preheat oven to 375°F (190°C).",
      "Melt dark chocolate and butter together until silky.",
      "Whisk egg whites and sugar to stiff peaks; fold gently into chocolate mix.",
      "Fill ramekins, bake for 14 minutes until high and puffy. Dust with sugar."
    ],
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Peach and Blackberry Cobbler",
    category: "Dessert",
    rating: 4,
    estimatedTime: 45,
    ingredients: [
      "2 cups sweet sliced peaches",
      "1 cup fresh blackberries",
      "1/2 cup sugar",
      "1 cup biscuit baking mix",
      "1/2 cup whole milk",
      "1/4 cup butter, melted"
    ],
    instructions: [
      "Preheat baking oven to 375°F (190°C).",
      "Toss sliced peaches, blackberries, and sugar in a baking dish.",
      "Stir biscuit mix and milk until soft cookie batter forms.",
      "Drop dollops of biscuit mix on top of fruit.",
      "Drizzle melted butter on top, and bake for 35 minutes until bubbly and gold."
    ],
    imageUrl: "https://images.unsplash.com/photo-1501156846897-99f2d47f1cf3?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Classic French Macarons",
    category: "Dessert",
    rating: 5,
    estimatedTime: 75,
    ingredients: [
      "1 cup almond flour",
      "1.5 cups powdered sugar",
      "3 egg whites",
      "1/4 cup granulated sugar",
      "Vanilla buttercream cream"
    ],
    instructions: [
      "Sift almond flour and powdered sugar twice to make fine.",
      "Whip egg whites to soft peaks, then slowly beat in granulated sugar to form a glossy meringue.",
      "Fold almond flour dry mixture gently into meringue.",
      "Pipe 1-inch cookies on baking sheet, tap pan, let sit for 45 minutes to form a skin.",
      "Bake at 300°F (150°C) for 15 minutes, cool and sandwich with cream."
    ],
    imageUrl: "https://images.unsplash.com/photo-1548847718194-6428a0291777?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Lemon Meringue Tart",
    category: "Dessert",
    rating: 5,
    estimatedTime: 60,
    ingredients: [
      "1 pre-baked tart shell",
      "3/4 cup fresh lemon juice",
      "1 cup sugar",
      "3 eggs",
      "4 egg whites with sugar for meringue"
    ],
    instructions: [
      "Whisk lemon juice, sugar, and eggs over a warm boiler until thickness develops.",
      "Pour hot lemon curd base into pre-cooked tart shell and chill.",
      "Whip egg whites to super-stiff snowy state with some sugar.",
      "Spread sweet meringue on top of tart and brown using oven broiler for 2 minutes."
    ],
    imageUrl: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Mixed Berry Galette",
    category: "Dessert",
    rating: 4,
    estimatedTime: 40,
    ingredients: [
      "1 refrigerated pie crust",
      "1.5 cups blueberries and raspberries",
      "2 tbsp clean sugar",
      "1 tbsp cornstarch",
      "1 egg, beaten"
    ],
    instructions: [
      "Preheat baking oven to 400°F (200°C).",
      "Toss mixed berries with sugars and cornstarch in a bowl.",
      "Roll out pie crust on baking tray.",
      "Place berry filling in the absolute center, leaving a 2-inch border.",
      "Fold edges of crust inward over berries, wash crust with egg, and bake for 30 minutes."
    ],
    imageUrl: "https://images.unsplash.com/photo-1501156846897-99f2d47f1cf3?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Classic Churros with Chocolate Sauce",
    category: "Dessert",
    rating: 5,
    estimatedTime: 30,
    ingredients: [
      "1 cup water",
      "1.5 tbsp butter",
      "1 cup flour",
      "Hot cooking oil for frying",
      "1/2 cup cinnamon sugar",
      "1/2 cup warm sweet fudge sauce"
    ],
    instructions: [
      "Boil water and butter, stir in flour until a singular ball is formed.",
      "Let cool, scoop into pastry bag with a thick star tip.",
      "Pipe 4-inch strips into hot oil, fry for 4 minutes until golden crispy.",
      "Toss hot crisp churros in cinnamon sugar; serve with warm fudge dipping sauce."
    ],
    imageUrl: "https://images.unsplash.com/photo-1540324161839-ce2bb6fa6bc3?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Sticky Toffee Pudding",
    category: "Dessert",
    rating: 5,
    estimatedTime: 50,
    ingredients: [
      "1 cup chopped dates",
      "1 cup boiling water",
      "1.5 cups flour",
      "1/2 cup soft brown sugar",
      "1/2 cup butter, creamed with egg",
      "Rich toffee butterscotch sauce"
    ],
    instructions: [
      "Soak chopped sweet dates in boiling water for 10 minutes until soft.",
      "Blend date mixture until fine consistency.",
      "Mix creamed butter and sugar, stir in flour, and stir in dates.",
      "Bake in ramekins for 25 minutes; serve warm with warm butterscotch dripping."
    ],
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Salted Caramel Budino",
    category: "Dessert",
    rating: 5,
    estimatedTime: 40,
    ingredients: [
      "3 large egg yolks",
      "3/4 cup brown sugar",
      "1 cup dark milk",
      "2 tbsp cornstarch",
      "Caramel syrup with sea salt"
    ],
    instructions: [
      "Whisk egg yolks and sugar over heat boiler with cornstarch and milk.",
      "Simmer until pudding base develops density, chill in tumblers.",
      "Top with warm caramel syrup and coarse sea salt grains."
    ],
    imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Homemade Guacamole & Chips",
    category: "Snack",
    rating: 5,
    estimatedTime: 10,
    ingredients: [
      "3 ripe organic avocados",
      "1/2 red onion, finely chopped",
      "1 lime, juiced",
      "Fresh cilantro, chopped",
      "Pinch of kosher salt and cumin",
      "Store-bought corn tortilla chips"
    ],
    instructions: [
      "Pit and scoop avocados into a mixing bowl.",
      "Mash with a fork to preferred consistency (some lumps are great!).",
      "Stir in chopped red onion, lime juice, fresh cilantro, salt, and cumin.",
      "Serve cold in an authentic ceramic dish alongside a mountain of corn chips."
    ],
    imageUrl: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Buffalo Cauliflower Wings",
    category: "Snack",
    rating: 4,
    estimatedTime: 25,
    ingredients: [
      "1 head of cauliflower, cut into florets",
      "1/2 cup all-purpose flour",
      "1/2 cup water",
      "1 tsp garlic powder",
      "1/2 cup spicy buffalo wing sauce",
      "1 tbsp butter"
    ],
    instructions: [
      "Preheat oven to 450°F (230°C) and grease a baking pan.",
      "Whisk flour, water, and garlic powder to make thick batter.",
      "Coat cauliflower florets in batter and bake on pan for 20 minutes.",
      "Toss baked crispy cauliflower in hot buffalo sauce and butter mixture, and bake 5 minutes more."
    ],
    imageUrl: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Caprese Skewers",
    category: "Snack",
    rating: 5,
    estimatedTime: 8,
    ingredients: [
      "12 cherry sweet tomatoes",
      "12 mini mozzarella balls",
      "12 fresh basil leaves",
      "2 tbsp balsamic glaze",
      "12 wooden appetizer toothpicks"
    ],
    instructions: [
      "On each toothpick, thread one sweet tomato, one basil leaf, and one mozzarella ball.",
      "Arrange skewers beautifully in a circular pattern on a wide plate.",
      "Drizzle sweet balsamic glaze heavily over skewers just before serving."
    ],
    imageUrl: "https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Sweet Chili Edamame",
    category: "Snack",
    rating: 4,
    estimatedTime: 8,
    ingredients: [
      "2 cups whole edamame in pods, frozen",
      "1 tbsp sweet red chili sauce",
      "1 tsp soy sauce",
      "1/2 tsp sesame seeds"
    ],
    instructions: [
      "Steam or boil frozen edamame pods for 5 minutes until hot; drain.",
      "In a bowl, toss the hot edamame pods with sweet chili sauce and soy sauce.",
      "Garnish with sesame seeds and serve warm."
    ],
    imageUrl: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Air-Fryer Onion Rings",
    category: "Snack",
    rating: 4,
    estimatedTime: 15,
    ingredients: [
      "1 giant sweet white onion, sliced into rings",
      "1/2 cup flour",
      "1 cup panko breadcrumbs",
      "2 eggs, beaten"
    ],
    instructions: [
      "Dredge onion rings in flour, dip in eggs, and coat with crunchy panko.",
      "Air fry at 375°F (190°C) for 10 minutes, flipping halfway.",
      "Serve warm and crispy with dipping ketchup sauce."
    ],
    imageUrl: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Garlic Herb Roasted Chickpeas",
    category: "Snack",
    rating: 4,
    estimatedTime: 25,
    ingredients: [
      "1 can chickpeas, drained and dried",
      "1 tbsp olive oil",
      "1/2 tsp garlic salt",
      "1/2 tsp dried rosemary"
    ],
    instructions: [
      "Preheat baking oven to 400°F (200°C).",
      "Toss chickpeas with olive oil, garlic salt, and rosemary.",
      "Roast on a pan sheet for 20-25 minutes until crunchy and dry."
    ],
    imageUrl: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Spinach and Artichoke Dip",
    category: "Snack",
    rating: 5,
    estimatedTime: 20,
    ingredients: [
      "1 cup frozen spinach, thawed and squeezed dried",
      "1 can artichoke hearts, chopped fine",
      "4 oz cream cheese, soft",
      "1/4 cup mozzarella & parmesan"
    ],
    instructions: [
      "Mix spinach, artichoke hearts, soft cream cheese, and cheeses in a heat-safe baking bowl.",
      "Bake at 375°F (190°C) for 15 minutes until piping hot and brown around the edges.",
      "Serve warm with sliced warm toasted baguettes."
    ],
    imageUrl: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Homemade Pretzel Bites with Mustard",
    category: "Snack",
    rating: 5,
    estimatedTime: 30,
    ingredients: [
      "1 tube refrigerated crust dough",
      "1/4 cup baking soda",
      "3 cups warm water",
      "1 egg washed with salt",
      "Coarse pretzel stone salt",
      "Honey dijon mustard"
    ],
    instructions: [
      "Cut pre-rolled crust dough into 1-inch squares.",
      "Dissolve baking soda in hot water, dip each square for 10 seconds.",
      "Place on parchment, brush with egg wash, and coat with coarse stone salt.",
      "Bake at 425°F (218°C) for 10 minutes until dark golden brown, serve with honey mustard."
    ],
    imageUrl: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Classic Mojito Mocktail",
    category: "Drink",
    rating: 5,
    estimatedTime: 5,
    ingredients: [
      "8 fresh mint leaves",
      "1/2 lime, cut into wedges",
      "2 tsp sugar or simple syrup",
      "1 cup sparkling club soda",
      "Crushed ice cubes"
    ],
    instructions: [
      "In a highball glass, muddle the fresh mint leaves and lime wedges with sugar to release oils.",
      "Fill the glass to the brim with crushed ice.",
      "Top off with cold sparkling club soda and stir slowly.",
      "Garnish with a whole mint sprig and lime wedge."
    ],
    imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Fresh Mango Lassi",
    category: "Drink",
    rating: 5,
    estimatedTime: 5,
    ingredients: [
      "1 cup ripe mango pulp or fresh chunks",
      "1/2 cup plain yogurt",
      "1/4 cup milk",
      "1 tbsp honey",
      "Pinch of green cardamom powder"
    ],
    instructions: [
      "Combine mango pulp, plain yogurt, milk, honey, and cardamom in a blender.",
      "Blend on speed until perfectly creamy and frothy.",
      "Pour into cold glasses and garnish with a slight pinch of cardamom powder."
    ],
    imageUrl: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Lavender Lemon Sparkler",
    category: "Drink",
    rating: 4,
    estimatedTime: 8,
    ingredients: [
      "1 oz organic lavender simple syrup",
      "1 oz fresh lemon juice",
      "1 cup cold sparkling mineral water",
      "Ice cubes"
    ],
    instructions: [
      "Fill a low glass tumbler with ice.",
      "Pour in lavender syrup and fresh lemon juice.",
      "Fill to the top with cold sparkling water, stir lightly, and serve cool."
    ],
    imageUrl: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Cold Brew Coffee with Sweet Cream",
    category: "Drink",
    rating: 5,
    estimatedTime: 5,
    ingredients: [
      "1 cup cold brew coffee concentrate",
      "1/4 cup heavy cream",
      "1 tsp vanilla syrup",
      "Ice cubes"
    ],
    instructions: [
      "Pour cold brew concentrate over a tall tumbler containing ice.",
      "In a small cup, stir heavy cream and vanilla syrup to combine.",
      "Slowly pour sweet cream over the cold brew, enjoying the cascading layers."
    ],
    imageUrl: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Classic Hot Chocolate with Whipped Cream",
    category: "Drink",
    rating: 5,
    estimatedTime: 10,
    ingredients: [
      "1 cup whole milk",
      "2 tbsp pure cocoa powder",
      "1.5 tbsp sugar",
      "Handful of marshmallows & whipped cream"
    ],
    instructions: [
      "Whisk milk, cocoa, and sugar in a small saucepan over medium heat.",
      "Heat until hot and thoroughly uniform (do not boil).",
      "Pour into a cozy standard mug, and top with whipped cream and marshmallows."
    ],
    imageUrl: "https://images.unsplash.com/photo-1583064313642-a7c149480c7e?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Creamy Avocado Shake",
    category: "Drink",
    rating: 4,
    estimatedTime: 5,
    ingredients: [
      "1/2 ripe avocado",
      "1 cup cold milk",
      "2 tbsp sweetened condensed milk",
      "3 ice cubes"
    ],
    instructions: [
      "Blend avocado, cold milk, and condensed milk until perfectly velvety.",
      "Serve cold in a cute glass."
    ],
    imageUrl: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  },
  {
    title: "Sparkling Pomegranate Rosemary Mocktail",
    category: "Drink",
    rating: 5,
    estimatedTime: 6,
    ingredients: [
      "1/2 cup pomegranate juice",
      "1 sprig fresh rosemary",
      "1/2 cup ginger ale",
      "Ice cubes"
    ],
    instructions: [
      "In a tall glass, muddle rosemary leaves lightly.",
      "Fill with ice, pour in rich pomegranate juice, and top with sweet ginger ale.",
      "Stir slowly and garnish with a complete rosemary sprig."
    ],
    imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=1000",
    isStock: true
  }
];
