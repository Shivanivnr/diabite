
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout } from "lucide-react"

interface MealCardProps {
  name: string;
  explanation: string;
  healthBenefit: string;
  type: 'fruit' | 'vegetable';
}

export function MealCard({ name, explanation, healthBenefit, type }: MealCardProps) {
  return (
    <Card className="w-full hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className={`p-2 rounded-full ${type === 'fruit' ? 'bg-orange-100' : 'bg-green-100'}`}>
          <Sprout className={`h-5 w-5 ${type === 'fruit' ? 'text-orange-500' : 'text-green-500'}`} />
        </div>
        <CardTitle className="text-lg font-medium">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{explanation}</p>
        <div className="text-sm">
          <strong className="text-gray-700">Health Benefit:</strong>
          <p className="text-gray-600 mt-1">{healthBenefit}</p>
        </div>
      </CardContent>
    </Card>
  )
}
