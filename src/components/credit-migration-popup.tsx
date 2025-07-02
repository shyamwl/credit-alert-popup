import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { UsageProgress } from "@/components/ui/usage-progress"

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
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">
            We're moving to credits
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-foreground">
            We're moving to credit system instead of word count / image counts.
          </p>
          
          <p className="text-foreground">
            This will give you more usage, words, and images, compared to before.
          </p>

          <div className="space-y-4">
            <UsageProgress
              label="Words used"
              value={8500}
              max={10000}
              showNumbers={true}
            />
            
            <UsageProgress
              label="Images used"
              value={23}
              max={50}
              showNumbers={true}
            />
          </div>

          <div className="text-center py-2">
            <p className="text-foreground font-medium">It's now changed to ⬇️</p>
          </div>

          <div className="space-y-4">
            <UsageProgress
              label="Credits"
              value={7200}
              max={15000}
              showNumbers={true}
            />
          </div>

          <p className="text-foreground">
            Going forward Both images and words will use credits.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
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