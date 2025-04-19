
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface MealCardProps {
  title: string;
  description: string;
  benefits: string;
}

export function MealCard({ title, description, benefits }: MealCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="text-sm text-gray-600">
          <strong>Benefits:</strong> {benefits}
        </div>
      </CardContent>
    </Card>
  )
}
