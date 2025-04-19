
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface DietTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function DietTypeSelector({ value, onChange }: DietTypeSelectorProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label>Diet Type</Label>
      <RadioGroup
        value={value}
        onValueChange={onChange}
        className="flex gap-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="veg" id="veg" />
          <Label htmlFor="veg">Vegetarian</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="non-veg" id="non-veg" />
          <Label htmlFor="non-veg">Non-Vegetarian</Label>
        </div>
      </RadioGroup>
    </div>
  )
}
