
import { useState } from "react"
import { BloodSugarInput } from "@/components/BloodSugarInput"
import { DietTypeSelector } from "@/components/DietTypeSelector"
import { LanguageSelector } from "@/components/LanguageSelector"
import { MealCard } from "@/components/MealCard"
import { Button } from "@/components/ui/button"

export default function Index() {
  const [bloodSugar, setBloodSugar] = useState("")
  const [dietType, setDietType] = useState("veg")
  const [language, setLanguage] = useState("english")
  const [mealSuggestions, setMealSuggestions] = useState<Array<{ title: string; description: string; benefits: string }>>([])
  const [isLoading, setIsLoading] = useState(false)

  const getMealSuggestions = async () => {
    setIsLoading(true)
    try {
      // This is a placeholder response - in a real app, you'd call your AI service here
      const sampleResponse = [
        {
          title: "Oatmeal with Berries",
          description: "A bowl of steel-cut oats topped with mixed berries and a sprinkle of cinnamon.",
          benefits: "High in fiber, helps maintain steady blood sugar levels, rich in antioxidants"
        },
        {
          title: "Greek Yogurt Parfait",
          description: "Layer of sugar-free Greek yogurt with nuts and seeds.",
          benefits: "High protein, probiotics, healthy fats"
        }
      ]
      setMealSuggestions(sampleResponse)
    } catch (error) {
      console.error("Error getting meal suggestions:", error)
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">DiaBite</h1>
          <p className="text-lg text-gray-600">AI-Powered Diabetes Meal Advisor</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid gap-6 md:grid-cols-3">
            <BloodSugarInput value={bloodSugar} onChange={setBloodSugar} />
            <DietTypeSelector value={dietType} onChange={setDietType} />
            <LanguageSelector value={language} onChange={setLanguage} />
          </div>
          
          <div className="mt-6 flex justify-center">
            <Button 
              onClick={getMealSuggestions}
              disabled={!bloodSugar || isLoading}
              className="bg-blue-500 hover:bg-blue-600"
            >
              {isLoading ? "Getting Suggestions..." : "Get Meal Suggestions"}
            </Button>
          </div>
        </div>

        {mealSuggestions.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2">
            {mealSuggestions.map((meal, index) => (
              <MealCard
                key={index}
                title={meal.title}
                description={meal.description}
                benefits={meal.benefits}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
