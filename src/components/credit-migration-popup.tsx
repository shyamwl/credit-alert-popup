import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { UsageProgress } from "@/components/ui/usage-progress"
import { ArrowRight, CreditCard, FileText, Image } from "lucide-react"

interface CreditMigrationPopupProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSeeSubscriptions?: () => void
}

export function CreditMigrationPopup({ 
  open, 
  onOpenChange,
  onSeeSubscriptions 
}: CreditMigrationPopupProps) {
  const handleGotIt = () => {
    onOpenChange(false)
  }

  const handleSeeSubscriptions = () => {
    onSeeSubscriptions?.()
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[520px] p-0 overflow-hidden">
        <div className="bg-gradient-primary p-6 text-primary-foreground">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-white/20 rounded-lg">
                <CreditCard className="h-5 w-5" />
              </div>
              <DialogTitle className="text-xl font-semibold">
                We're moving to credits
              </DialogTitle>
            </div>
            <p className="text-primary-foreground/90 text-sm leading-relaxed">
              We're moving to credit system instead of word count / image counts.
              <br />
              <strong>This will give you more usage, words, and images, compared to before.</strong>
            </p>
          </DialogHeader>
        </div>

        <div className="p-6 space-y-6">
          {/* Current Usage */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <FileText className="h-4 w-4" />
              Current Usage
            </div>
            
            <UsageProgress
              label="Words used"
              value={8500}
              max={10000}
            />
            
            <UsageProgress
              label="Images used"
              value={23}
              max={50}
            />
          </div>

          {/* Arrow Transition */}
          <div className="flex items-center justify-center py-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="h-px w-8 bg-border"></div>
              <ArrowRight className="h-4 w-4" />
              <div className="h-px w-8 bg-border"></div>
            </div>
          </div>

          {/* New Credit System */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <CreditCard className="h-4 w-4" />
              It's now changed to
            </div>
            
            <UsageProgress
              label="Credits"
              value={7200}
              max={15000}
            />
            
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong>Going forward</strong> both images and words will use credits, 
                giving you more flexibility in how you use your plan.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button 
              variant="outline" 
              onClick={handleSeeSubscriptions}
              className="sm:flex-1"
            >
              See in subscriptions page
            </Button>
            <Button 
              onClick={handleGotIt}
              className="sm:flex-1"
            >
              Okay, got it
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}