import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Eye } from "lucide-react";
import heroImage from "@/assets/cyber-patrol-hero.jpg";
import OverviewPanel from "@/components/dashboard/OverviewPanel";
import KeywordMonitoring from "@/components/dashboard/KeywordMonitoring";
import ContentAnalysis from "@/components/dashboard/ContentAnalysis";
import UserMonitoring from "@/components/dashboard/UserMonitoring";
import PaymentMonitoring from "@/components/dashboard/PaymentMonitoring";

const CyberPatrolDashboard = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-card">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Goa Cyber Patrol</h1>
                <p className="text-sm text-muted-foreground">Digital Safety Monitoring System</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-success">
                <div className="h-2 w-2 bg-success rounded-full mr-2"></div>
                System Active
              </Badge>
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Live Monitor
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Hero Section */}
        <div className="relative rounded-lg overflow-hidden">
          <img 
            src={heroImage} 
            alt="Cyber Security Command Center" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent flex items-center">
            <div className="pl-8 space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Protecting Goa's Digital Space
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                AI-powered monitoring system tracking fraudulent content across social media, 
                protecting residents and tourists from online scams and exploitation.
              </p>
            </div>
          </div>
        </div>

        {/* Main Dashboard Content - Responsive Grid */}

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 gap-2">
            <TabsTrigger value="overview" className="text-xs lg:text-sm">Overview</TabsTrigger>
            <TabsTrigger value="keywords" className="text-xs lg:text-sm">Keywords</TabsTrigger>
            <TabsTrigger value="content" className="text-xs lg:text-sm">Content</TabsTrigger>
            <TabsTrigger value="users" className="text-xs lg:text-sm">Users</TabsTrigger>
            <TabsTrigger value="payments" className="text-xs lg:text-sm">Payments</TabsTrigger>
            <TabsTrigger value="reports" className="text-xs lg:text-sm">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <OverviewPanel />
          </TabsContent>

          <TabsContent value="keywords" className="space-y-6">
            <KeywordMonitoring />
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <ContentAnalysis />
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <UserMonitoring />
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <PaymentMonitoring />
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="text-center py-12 space-y-4">
              <Shield className="h-12 w-12 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground">Reports & Analytics section coming soon</p>
              <Button variant="outline">Generate Report</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CyberPatrolDashboard;