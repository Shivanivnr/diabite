
import { useState } from "react"
import { BloodSugarInput } from "@/components/BloodSugarInput"
import { LanguageSelector } from "@/components/LanguageSelector"
import { MealCard } from "@/components/MealCard"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/sonner"

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

  // Define food categories based on blood sugar levels
  const getFoodSuggestions = async () => {
    setIsLoading(true)
    try {
      const bloodSugarLevel = parseInt(bloodSugar, 10)
      
      // Different food suggestions based on blood sugar ranges
      let foodSuggestions = []
      
      if (bloodSugarLevel < 70) {
        // Low blood sugar suggestions (quick sugar sources but still relatively healthy)
        foodSuggestions = [
          {
            name: "Apple",
            explanation: "Contains natural sugars that can help raise blood sugar quickly while providing fiber.",
            healthBenefit: "The fiber slows sugar absorption, preventing blood sugar spikes.",
            type: 'fruit' as const
          },
          {
            name: "Banana",
            explanation: "Rich in potassium and provides quickly digestible carbohydrates for low blood sugar.",
            healthBenefit: "Helps maintain proper electrolyte balance and provides quick energy.",
            type: 'fruit' as const
          },
          {
            name: "Orange",
            explanation: "Contains natural sugars with vitamin C and fiber.",
            healthBenefit: "Vitamin C supports immune function while providing a moderate glycemic response.",
            type: 'fruit' as const
          },
          {
            name: "Sweet Potato",
            explanation: "Complex carbs that release energy more steadily than simple sugars.",
            healthBenefit: "Rich in fiber, vitamins, and has a lower glycemic index than white potatoes.",
            type: 'vegetable' as const
          }
        ]
        toast.success(`Suggestions for low blood sugar (${bloodSugarLevel} mg/dL)`)
      } 
      else if (bloodSugarLevel >= 70 && bloodSugarLevel <= 140) {
        // Normal blood sugar range - balanced options
        foodSuggestions = [
          {
            name: "Berries",
            explanation: "Low glycemic fruits rich in antioxidants and fiber.",
            healthBenefit: "Helps maintain healthy blood sugar levels while providing essential nutrients.",
            type: 'fruit' as const
          },
          {
            name: "Spinach",
            explanation: "Low-carb leafy green vegetable packed with nutrients.",
            healthBenefit: "Rich in magnesium which helps with glucose metabolism.",
            type: 'vegetable' as const
          },
          {
            name: "Broccoli",
            explanation: "High in fiber and chromium, which helps regulate blood sugar.",
            healthBenefit: "Supports insulin function and provides essential vitamins.",
            type: 'vegetable' as const
          },
          {
            name: "Avocado",
            explanation: "Rich in healthy fats with minimal impact on blood sugar.",
            healthBenefit: "Supports heart health and provides sustained energy without glucose spikes.",
            type: 'fruit' as const
          }
        ]
        toast.success(`Suggestions for normal blood sugar (${bloodSugarLevel} mg/dL)`)
      } 
      else {
        // High blood sugar - focus on foods that help lower blood sugar
        foodSuggestions = [
          {
            name: "Bitter Gourd",
            explanation: "Contains compounds that help lower blood glucose levels naturally.",
            healthBenefit: "May help improve insulin sensitivity and glucose tolerance.",
            type: 'vegetable' as const
          },
          {
            name: "Kale",
            explanation: "Very low in carbs and high in fiber to help manage blood sugar.",
            healthBenefit: "Contains alpha-lipoic acid which can lower blood glucose levels.",
            type: 'vegetable' as const
          },
          {
            name: "Cucumber",
            explanation: "High water content, very low carb vegetable that's gentle on blood sugar.",
            healthBenefit: "Helps with hydration and contains compounds that may help lower blood sugar.",
            type: 'vegetable' as const
          },
          {
            name: "Green Apple",
            explanation: "Lower sugar content than other fruits with beneficial fiber.",
            healthBenefit: "Contains antioxidants that help reduce oxidative damage associated with high blood sugar.",
            type: 'fruit' as const
          }
        ]
        toast.success(`Suggestions for elevated blood sugar (${bloodSugarLevel} mg/dL)`)
      }
      
      setSuggestions(foodSuggestions)
    } catch (error) {
      console.error("Error getting food suggestions:", error)
      toast.error("Could not generate food suggestions")
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
