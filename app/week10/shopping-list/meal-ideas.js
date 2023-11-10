
import React, { useState, useEffect } from "react";

function MealIdeas({ ingredient }) {
  // Define state variables
  const [meals, setMeals] = useState([]);

  // New state for the selected meal
  const [selectedMeal, setSelectedMeal] = useState(null);

  // Define API fetching function
  const getMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setMeals(data.meals);
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
    }
  };
  const getMealDetails = async (id) => {
    // New function to get the details of a specific meal
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      setSelectedMeal(data.meals[0]);
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
  };

  const handleViewRecipe = (id) => {
    // Event handler for "View Recipe" click
    getMealDetails(id);
  };

  // useEffect to call getMealIdeas whenever the ingredient prop changes
  useEffect(() => {
    getMealIdeas(ingredient);
  }, [ingredient]);

//   View Recipe Modal - Pop-up
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Meal Ideas for {ingredient}
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Discover various meals you can prepare with {ingredient}.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {meals && meals.length > 0 ? (
            meals.map((meal) => (
              <article
                key={meal.idMeal}
                className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    <svg
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"></path>
                      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                    </svg>
                    Recipe Idea
                  </span>
                  <Image src={meal.strMealThumb} alt={meal.strMeal} className="w-10 h-10 rounded-full" />
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{meal.strMeal}</a>
                </h2>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleViewRecipe(meal.idMeal);
                    }}
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    View Ingredients
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </article>
            ))
          ) : (
            <p className="text-red-600">No meals to be found.</p>
          )}
        </div>
      </div>

            
      {selectedMeal && (
        <div
          id="mealModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-2xl max-h-full mx-auto">
            {/* Modal content */}
            <div className="relative bg-gray-100 rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {selectedMeal.strMeal}
                </h3>
                <button
                  onClick={() => setSelectedMeal(null)}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-6 space-y-6">
              <ul className="space-y-2">
  {[...Array(20).keys()].map((i) =>
    selectedMeal[`strIngredient${i + 1}`] ? (
      <li key={i} className="flex justify-between">
        <span className="font-semibold text-gray-600 dark:text-gray-200">
          {selectedMeal[`strIngredient${i + 1}`]}
        </span>
        <span className="text-gray-500 dark:text-gray-400">
          {selectedMeal[`strMeasure${i + 1}`]}
        </span>
      </li>
    ) : null
  )}
</ul>

              </div>
              {/* Modal footer */}
              <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={() => setSelectedMeal(null)}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default MealIdeas;
