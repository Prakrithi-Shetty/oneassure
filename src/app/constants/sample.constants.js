export const HEADER_FORMS = 'Forms';
export const HEADER_CATEGORY = 'Category';
export const HEADER_BLOGS = 'Blogs';
export const HEADER_RECIPE_INDEX = 'Recipe Index';
export const HEADER_POPULAR = 'Popular';

export const HEADERLIST = [HEADER_FORMS, HEADER_CATEGORY, HEADER_BLOGS, HEADER_FORMS, HEADER_POPULAR];


export const HEADER_HOME = 'Home';
export const HEADER_CATEGORIES = 'Categories';
export const HEADER_RECIPES = 'Recipes';
export const HEADER_CONTACT = 'Contact';
export const HEADER_ABOUT = 'About';

export const HEADER_LIST = [
  HEADER_HOME,
  HEADER_CATEGORIES,
  HEADER_RECIPES,
  HEADER_CONTACT,
  HEADER_ABOUT,
];

export const Season = {
  AUTUMN: 'Autumn',
  SPRING: 'Spring',
  SUMMER: 'Summer',
  WINTER: 'Winter',
};

export const DietaryPreferences = {
  DAIRY_FREE: 'Dairy Free',
  EGG_FREE: 'Egg Free',
  GLUTEN_FREE: 'Gluten Free',
  HEALTHY: 'Healthy',
  QUICK_AND_EASY: 'Quick and Easy',
};

export const Meal = {
  BREAKFAST: 'Breakfast',
  DESSERT: 'Dessert',
  DINNER: 'Dinner',
  HOLIDAY_SNACKS: 'Holiday Snacks',
  APPETIZER: 'Appetizer',
};

const  updatedData  = [
  {
    deliveryTime: "30 min",
    title: "Baked Sweet Potato with Avocado Pumpkin",
    isPopular: true,
    isSuperFast: true,
    image: "/sampleimage1.jpeg",
    tags: [
      Season.AUTUMN,
      DietaryPreferences.GLUTEN_FREE,
      DietaryPreferences.EGG_FREE,
      Meal.DINNER,
    ],
  },
  {
    deliveryTime: "45 min",
    title: "Grilled Chicken with Lemon Herb Sauce",
    isPopular: false,
    isSuperFast: false,
    image: "/sampleimage2.jpeg",
    tags: [
      Season.SUMMER,
      DietaryPreferences.HEALTHY,
      Meal.DINNER,
    ],
  },
  {
    deliveryTime: "25 min",
    title: "Vegan Lentil Curry with Basmati Rice",
    isPopular: true,
    isSuperFast: false,
    image: "/sampleimage3.jpeg",
    tags: [
      Season.AUTUMN,
      Season.WINTER,
      DietaryPreferences.GLUTEN_FREE,
      DietaryPreferences.HEALTHY,
      Meal.DINNER,
      Meal.APPETIZER,
    ],
  },
  {
    deliveryTime: "40 min",
    title: "Mediterranean Quinoa Salad",
    isPopular: true,
    isSuperFast: true,
    image: "/sampleimage4.jpeg",
    tags: [
      Season.SUMMER,
      DietaryPreferences.GLUTEN_FREE,
      DietaryPreferences.QUICK_AND_EASY,
      Meal.APPETIZER,
    ],
  },
  {
    deliveryTime: "35 min",
    title: "Pesto Pasta with Roasted Vegetables",
    isPopular: false,
    isSuperFast: false,
    image: "/sampleimage5.jpeg",
    tags: [
      Season.SPRING,
      Season.SUMMER,
      DietaryPreferences.HEALTHY,
      Meal.DINNER,
    ],
  },
  {
    deliveryTime: "20 min",
    title: "Blueberry Pancakes",
    isPopular: true,
    isSuperFast: true,
    image: "/sampleimage6.jpeg",
    tags: [
      Season.SPRING,
      Season.SUMMER,
      DietaryPreferences.QUICK_AND_EASY,
      Meal.BREAKFAST,
    ],
  },
  {
    deliveryTime: "55 min",
    title: "Chocolate Lava Cake",
    isPopular: true,
    isSuperFast: false,
    image: "/sampleimage7.jpeg",
    tags: [
      Season.WINTER,
      DietaryPreferences.DESSERT,
    ],
  },
  {
    deliveryTime: "50 min",
    title: "Caprese Skewers",
    isPopular: false,
    isSuperFast: false,
    image: "/sampleimage8.jpeg",
    tags: [
      Season.SUMMER,
      Meal.APPETIZER,
    ],
  },
  {
    deliveryTime: "30 min",
    title: "Roasted Vegetable Frittata",
    isPopular: true,
    isSuperFast: true,
    image: "/sampleimage9.jpeg",
    tags: [
      DietaryPreferences.HEALTHY,
      DietaryPreferences.QUICK_AND_EASY,
      Meal.BREAKFAST,
      Meal.DINNER,
    ],
  },
  {
    deliveryTime: "35 min",
    title: "Stuffed Bell Peppers",
    isPopular: true,
    isSuperFast: false,
    image: "/sampleimage10.jpeg",
    tags: [
      Season.SUMMER,
      Season.AUTUMN,
      DietaryPreferences.GLUTEN_FREE,
      Meal.DINNER,
    ],
  },
  // Add more food objects as needed
];
const dummyData = updatedData.map((item) => ({
  ...item,
  id: Math.random().toString(36).substr(2, 9), // Generate a random alphanumeric id
}));

export default dummyData;





