import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  AlertTriangle, 
  Eye, 
  MapPin, 
  TrendingUp, 
  Users, 
  Ban,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";
import heroImage from "@/assets/cyber-patrol-hero.jpg";

const CyberPatrolDashboard = () => {
  const alertStats = {
    critical: 12,
    warning: 38,
    resolved: 156,
    monitoring: 847
  };

  const platformData = [
    { name: "Facebook", alerts: 45, status: "active" },
    { name: "Instagram", alerts: 23, status: "active" },
    { name: "Telegram", alerts: 67, status: "active" },
    { name: "YouTube", alerts: 12, status: "active" },
    { name: "Google Ads", alerts: 8, status: "active" }
  ];

  const recentAlerts = [
    {
      id: "AL001",
      type: "Investment Scam",
      platform: "Facebook",
      severity: "critical",
      time: "2 min ago",
      location: "Panaji, Goa"
    },
    {
      id: "AL002", 
      type: "Fake Hotel Website",
      platform: "Google",
      severity: "warning",
      time: "15 min ago",
      location: "Calangute Beach"
    },
    {
      id: "AL003",
      type: "Mule Account Trading",
      platform: "Telegram",
      severity: "critical",
      time: "1 hour ago",
      location: "Vasco da Gama"
    }
  ];

  const getSeverityVariant = (severity: string) => {
    switch (severity) {
      case "critical": return "destructive";
      case "warning": return "secondary";
      case "resolved": return "default";
      default: return "outline";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical": return <XCircle className="h-4 w-4" />;
      case "warning": return <AlertTriangle className="h-4 w-4" />;
      case "resolved": return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

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

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-critical/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
              <XCircle className="h-4 w-4 text-critical" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-critical">{alertStats.critical}</div>
              <p className="text-xs text-muted-foreground">Requires immediate action</p>
            </CardContent>
          </Card>

          <Card className="border-warning/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Warnings</CardTitle>
              <AlertTriangle className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">{alertStats.warning}</div>
              <p className="text-xs text-muted-foreground">Under investigation</p>
            </CardContent>
          </Card>

          <Card className="border-success/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Resolved</CardTitle>
              <CheckCircle className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{alertStats.resolved}</div>
              <p className="text-xs text-muted-foreground">Content taken down</p>
            </CardContent>
          </Card>

          <Card className="border-info/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Monitoring</CardTitle>
              <Eye className="h-4 w-4 text-info" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-info">{alertStats.monitoring}</div>
              <p className="text-xs text-muted-foreground">Sources being tracked</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="social-media">Social Media</TabsTrigger>
            <TabsTrigger value="telegram">Telegram</TabsTrigger>
            <TabsTrigger value="hotels">Hotels & Tourism</TabsTrigger>
            <TabsTrigger value="evidence">Evidence Log</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Platform Monitoring */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Platform Monitoring</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {platformData.map((platform) => (
                    <div key={platform.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="h-2 w-2 bg-success rounded-full"></div>
                        <span className="font-medium">{platform.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{platform.alerts} alerts</Badge>
                        <Badge variant="outline" className="text-success">Active</Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5" />
                    <span>Recent Alerts</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                      <div className="flex-shrink-0 mt-1">
                        {getSeverityIcon(alert.severity)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge variant={getSeverityVariant(alert.severity)} className="text-xs">
                            {alert.severity.toUpperCase()}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{alert.id}</span>
                        </div>
                        <p className="font-medium text-sm">{alert.type}</p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                          <span>{alert.platform}</span>
                          <span className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {alert.location}
                          </span>
                          <span>{alert.time}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Investigate
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* System Performance */}
            <Card>
              <CardHeader>
                <CardTitle>System Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Detection Accuracy</span>
                      <span>94.2%</span>
                    </div>
                    <Progress value={94.2} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Response Time</span>
                      <span>&lt; 5 min</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Content Processed</span>
                      <span>1.2M today</span>
                    </div>
                    <Progress value={76} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="social-media">
            {/* Social Media Monitoring Content */}
            <Card>
              <CardHeader>
                <CardTitle>Social Media Fraud Detection</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Monitoring Facebook, Instagram, YouTube, and Google Ads for fraudulent content
                </p>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 space-y-4">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Real-time social media monitoring interface will be displayed here</p>
                  <Button variant="outline">Configure Monitoring</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="telegram">
            {/* Telegram Monitoring Content */}
            <Card>
              <CardHeader>
                <CardTitle>Telegram Channel Monitoring</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Tracking mule account trading, SIM card markets, and fraud groups
                </p>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 space-y-4">
                  <Ban className="h-12 w-12 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Telegram monitoring dashboard will be displayed here</p>
                  <Button variant="outline">View Channels</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hotels">
            {/* Hotels & Tourism Content */}
            <Card>
              <CardHeader>
                <CardTitle>Hotel & Resort Verification</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Cross-checking against official 4-star and 5-star resort lists
                </p>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 space-y-4">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Hotel verification system will be displayed here</p>
                  <Button variant="outline">Check Hotels</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="evidence">
            {/* Evidence Log Content */}
            <Card>
              <CardHeader>
                <CardTitle>Evidence Log & Take-down Recommendations</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Documented evidence and recommended actions for law enforcement
                </p>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 space-y-4">
                  <Shield className="h-12 w-12 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Evidence documentation system will be displayed here</p>
                  <Button variant="outline">View Evidence</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CyberPatrolDashboard;