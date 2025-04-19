
import { useState } from "react"
import { BloodSugarInput } from "@/components/BloodSugarInput"
import { LanguageSelector } from "@/components/LanguageSelector"
import { MealCard } from "@/components/MealCard"
import { Button } from "@/components/ui/button"

export default function Index() {
  const [bloodSugar, setBloodSugar] = useState("")
  const [language, setLanguage] = useState("english")
  const [suggestions, setSuggestions] = useState<Array<{
    name: string;
    explanation: string;
    healthBenefit: string;
    type: 'fruit' | 'vegetable';
  }>>([])
  const [isLoading, setIsLoading] = useState(false)

  const getFoodSuggestions = async () => {
    setIsLoading(true)
    try {
      // This is a placeholder response - in a real app, you'd call your AI service here
      const sampleResponse = [
        {
          name: "Spinach",
          explanation: "Low in carbohydrates and calories, high in fiber, and packed with vitamins and minerals.",
          healthBenefit: "Helps regulate blood sugar levels and supports overall health.",
          type: 'vegetable' as const
        },
        {
          name: "Berries",
          explanation: "High in antioxidants and fiber, with a relatively low glycemic index.",
          healthBenefit: "Protects against cell damage and improves blood sugar control.",
          type: 'fruit' as const
        },
        {
          name: "Broccoli",
          explanation: "Rich in fiber and nutrients, with a low glycemic index.",
          healthBenefit: "Improves insulin sensitivity and reduces risk of heart disease.",
          type: 'vegetable' as const
        },
        {
          name: "Apple",
          explanation: "Contains fiber (especially pectin) that helps slow down sugar absorption.",
          healthBenefit: "Aids in blood sugar regulation and promotes digestive health.",
          type: 'fruit' as const
        }
      ]
      setSuggestions(sampleResponse)
    } catch (error) {
      console.error("Error getting food suggestions:", error)
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">DiaBite</h1>
          <p className="text-lg text-gray-600">Diabetic-Friendly Fruits & Vegetables Guide</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid gap-6 md:grid-cols-2">
            <BloodSugarInput value={bloodSugar} onChange={setBloodSugar} />
            <LanguageSelector value={language} onChange={setLanguage} />
          </div>
          
          <div className="mt-6 flex justify-center">
            <Button 
              onClick={getFoodSuggestions}
              disabled={!bloodSugar || isLoading}
              className="bg-green-500 hover:bg-green-600"
            >
              {isLoading ? "Getting Suggestions..." : "Get Food Suggestions"}
            </Button>
          </div>
        </div>

        {suggestions.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2">
            {suggestions.map((item, index) => (
              <MealCard
                key={index}
                name={item.name}
                explanation={item.explanation}
                healthBenefit={item.healthBenefit}
                type={item.type}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
