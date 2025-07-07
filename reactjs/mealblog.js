import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for meals
  const meals = [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      description: "Classic Italian pasta dish with rich meat sauce.",
      ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Onion", "Garlic", "Olive oil", "Parmesan cheese"],
      recipe: "1. Cook spaghetti according to package instructions.\n2. Sauté onions and garlic in olive oil.\n3. Add ground beef and cook until browned.\n4. Stir in tomato sauce and simmer for 20 minutes.\n5. Serve sauce over pasta with grated Parmesan.",
      rating: 5,
      category: "main",
      image: "https://placehold.co/600x400?text=Spaghetti+Bolognese"
    },
    {
      id: 2,
      title: "Avocado Toast",
      description: "Simple and healthy breakfast or snack.",
      ingredients: ["Sourdough bread", "Ripe avocado", "Lemon juice", "Salt", "Black pepper", "Chili flakes (optional)"],
      recipe: "1. Toast the bread until golden.\n2. Mash avocado and mix with lemon juice, salt, and pepper.\n3. Spread on toast and sprinkle chili flakes if desired.",
      rating: 4,
      category: "breakfast",
      image: " https://placehold.co/600x400?text=Avocado+Toast"
    },
    {
      id: 3,
      title: "Grilled Chicken Salad",
      description: "Light and refreshing salad packed with protein.",
      ingredients: ["Chicken breast", "Mixed greens", "Cherry tomatoes", "Cucumber", "Red onion", "Balsamic vinaigrette"],
      recipe: "1. Season chicken and grill until fully cooked.\n2. Toss greens, cherry tomatoes, cucumber, and red onion.\n3. Top salad with sliced grilled chicken and drizzle with dressing.",
      rating: 5,
      category: "lunch",
      image: " https://placehold.co/600x400?text=Grilled+Chicken+Salad"
    },
    {
      id: 4,
      title: "Chocolate Brownie",
      description: "Fudgy homemade chocolate brownies.",
      ingredients: ["Dark chocolate", "Butter", "Sugar", "Eggs", "Flour", "Cocoa powder"],
      recipe: "1. Melt chocolate and butter together.\n2. Mix in sugar and eggs.\n3. Fold in flour and cocoa powder.\n4. Bake at 350°F (175°C) for 25-30 minutes.",
      rating: 4,
      category: "dessert",
      image: " https://placehold.co/600x400?text=Chocolate+Brownie"
    }
  ];

  const filteredMeals = meals.filter(meal => {
    const matchesCategory = activeTab === 'all' || meal.category === activeTab;
    const matchesSearch = meal.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`inline-block w-4 h-4 mr-1 ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg">
        <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">My Meal Journal</h1>
          <p className="text-lg md:text-xl opacity-90">Documenting my culinary creations and experiments</p>

          {/* Search Bar */}
          <div className="mt-6 w-full max-w-md">
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mt-6">
            {['all', 'breakfast', 'lunch', 'main', 'dessert'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize px-4 py-2 rounded-full transition-colors duration-300 ${
                  activeTab === tab
                    ? 'bg-white text-red-600'
                    : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMeals.map((meal) => (
            <article
              key={meal.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <img src={meal.image} alt={meal.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{meal.title}</h2>
                <p className="text-gray-600 mb-4">{meal.description}</p>
                
                <div className="mb-4">
                  <h3 className="font-medium text-sm uppercase tracking-wide text-gray-500">Ingredients:</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {meal.ingredients.map((ingredient, idx) => (
                      <li key={idx}>{ingredient}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="font-medium text-sm uppercase tracking-wide text-gray-500">Recipe:</h3>
                  <pre className="text-sm whitespace-pre-line text-gray-700">{meal.recipe}</pre>
                </div>

                <div className="flex items-center">
                  <div className="flex">{getRatingStars(meal.rating)}</div>
                  <span className="ml-2 text-sm text-gray-600">({meal.rating}/5)</span>
                </div>
              </div>
            </article>
          ))}

          {/* Empty State */}
          {filteredMeals.length === 0 && (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500 text-lg">No meals found matching your criteria.</p>
              <button
                onClick={() => {
                  setActiveTab('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} My Meal Journal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
