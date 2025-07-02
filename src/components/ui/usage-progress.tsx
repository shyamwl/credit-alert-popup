import * as React from "react"
import { cn } from "@/lib/utils"

interface UsageProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max: number
  label: string
  showNumbers?: boolean
}

const UsageProgress = React.forwardRef<HTMLDivElement, UsageProgressProps>(
  ({ className, value, max, label, showNumbers = true, ...props }, ref) => {
    const percentage = Math.min((value / max) * 100, 100)
    
    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-foreground">{label}</span>
          {showNumbers && (
            <span className="text-muted-foreground">
              {value.toLocaleString()} / {max.toLocaleString()}
            </span>
          )}
        </div>
        <div className="h-2 w-full rounded-full bg-progress-bg overflow-hidden">
          <div
            className="h-full bg-progress-indicator transition-all duration-300 ease-in-out rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }
)
UsageProgress.displayName = "UsageProgress"

export { UsageProgress }