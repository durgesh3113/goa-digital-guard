import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  AlertTriangle, 
  Shield, 
  MapPin, 
  TrendingUp,
  XCircle,
  CheckCircle,
  Eye,
  Clock
} from "lucide-react";

const OverviewPanel = () => {
  const alertStats = {
    last24h: 127,
    last7d: 892,
    last30d: 3456,
    activeInvestigations: 45,
    flaggedAccounts: 234,
    flaggedWebsites: 67
  };

  const crimeTypes = {
    prostitution: 156,
    gambling: 298,
    both: 23
  };

  const hotspots = [
    { location: "Mumbai", intensity: 89, cases: 234 },
    { location: "Delhi", intensity: 76, cases: 198 },
    { location: "Goa", intensity: 68, cases: 156 },
    { location: "Bangalore", intensity: 45, cases: 123 }
  ];

  return (
    <div className="space-y-6">
      {/* Alert Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-critical/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <AlertTriangle className="h-4 w-4 text-critical mr-2" />
              Last 24 Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-critical">{alertStats.last24h}</div>
            <p className="text-xs text-muted-foreground">New alerts generated</p>
          </CardContent>
        </Card>

        <Card className="border-warning/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Clock className="h-4 w-4 text-warning mr-2" />
              Last 7 Days
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{alertStats.last7d}</div>
            <p className="text-xs text-muted-foreground">Weekly alerts</p>
          </CardContent>
        </Card>

        <Card className="border-info/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <TrendingUp className="h-4 w-4 text-info mr-2" />
              Last 30 Days
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-info">{alertStats.last30d}</div>
            <p className="text-xs text-muted-foreground">Monthly total</p>
          </CardContent>
        </Card>

        <Card className="border-success/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Shield className="h-4 w-4 text-success mr-2" />
              Investigations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{alertStats.activeInvestigations}</div>
            <p className="text-xs text-muted-foreground">Currently active</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Crime Types Detection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <XCircle className="h-5 w-5 text-critical mr-2" />
              Crime Types Detected
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Online Prostitution</span>
                <Badge variant="destructive">{crimeTypes.prostitution}</Badge>
              </div>
              <Progress value={65} className="h-2" />
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Online Gambling</span>
                <Badge variant="secondary">{crimeTypes.gambling}</Badge>
              </div>
              <Progress value={85} className="h-2" />
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Both Categories</span>
                <Badge variant="outline">{crimeTypes.both}</Badge>
              </div>
              <Progress value={25} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Geographical Hotspots */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 text-info mr-2" />
              Geographical Hotspots
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {hotspots.map((spot, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center space-x-3">
                  <div 
                    className="h-3 w-3 rounded-full"
                    style={{ 
                      backgroundColor: `hsl(${Math.max(0, 120 - spot.intensity)}, 70%, 50%)` 
                    }}
                  />
                  <span className="font-medium">{spot.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{spot.cases} cases</Badge>
                  <span className="text-xs text-muted-foreground">{spot.intensity}%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverviewPanel;