
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface BloodSugarInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function BloodSugarInput({ value, onChange }: BloodSugarInputProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="bloodSugar">Blood Sugar Level (mg/dL)</Label>
      <Input
        type="number"
        id="bloodSugar"
        placeholder="Enter your blood sugar level"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-base"
        min="0"
        max="1000"
      />
    </div>
  )
}
