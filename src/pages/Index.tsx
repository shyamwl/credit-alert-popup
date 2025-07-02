import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CreditMigrationPopup } from "@/components/credit-migration-popup"
import { CreditCard, Bell } from "lucide-react"

const Index = () => {
  const [showMigrationPopup, setShowMigrationPopup] = useState(false)

  const handleSeeSubscriptions = () => {
    // Navigate to subscriptions page
    console.log("Navigating to subscriptions page...")
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Welcome to Your SaaS Dashboard
            </h1>
            <p className="text-xl text-muted-foreground">
              Manage your credits, usage, and subscriptions all in one place.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setShowMigrationPopup(true)}
              className="flex items-center gap-2"
              size="lg"
            >
              <Bell className="h-4 w-4" />
              View Credit Migration Notice
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="flex items-center gap-2"
            >
              <CreditCard className="h-4 w-4" />
              View Dashboard
            </Button>
          </div>

          <div className="bg-card border rounded-lg p-6 text-left">
            <h3 className="font-semibold mb-2">Try the Credit Migration Popup</h3>
            <p className="text-muted-foreground text-sm">
              Click the "View Credit Migration Notice" button above to see the new credit system 
              migration popup with progress bars and usage information.
            </p>
          </div>
        </div>
      </div>

      <CreditMigrationPopup
        open={showMigrationPopup}
        onOpenChange={setShowMigrationPopup}
        onSeeSubscriptions={handleSeeSubscriptions}
      />
    </div>
  );
};

export default Index;
