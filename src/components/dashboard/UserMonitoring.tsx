import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  AlertTriangle, 
  Network,
  UserX,
  Clock,
  Eye
} from "lucide-react";

const UserMonitoring = () => {
  const flaggedUsers = [
    {
      username: "@escort_mumbai",
      platform: "Instagram",
      riskScore: 95,
      activity: "Very High",
      accountAge: "2 months",
      followers: "15.2K",
      posts: 234
    },
    {
      username: "casino_king_24",
      platform: "Telegram",
      riskScore: 87,
      activity: "High",
      accountAge: "6 months",
      followers: "8.7K",
      posts: 156
    },
    {
      username: "callgirl_service",
      platform: "WhatsApp",
      riskScore: 92,
      activity: "Very High",
      accountAge: "1 month",
      followers: "3.4K",
      posts: 89
    },
    {
      username: "betting_tips_pro",
      platform: "Twitter",
      riskScore: 73,
      activity: "Medium",
      accountAge: "1 year",
      followers: "23.1K",
      posts: 1234
    }
  ];

  const networkConnections = {
    totalNodes: 1247,
    suspiciousConnections: 89,
    isolatedUsers: 234,
    networkClusters: 12
  };

  const activityPatterns = [
    { pattern: "Bulk Account Creation", accounts: 45, trend: "up" },
    { pattern: "Cross-Platform Presence", accounts: 67, trend: "stable" },
    { pattern: "Rapid Follower Growth", accounts: 23, trend: "up" },
    { pattern: "Coordinated Posting", accounts: 34, trend: "down" }
  ];

  const getRiskColor = (score: number) => {
    if (score >= 90) return "text-critical";
    if (score >= 70) return "text-warning";
    return "text-success";
  };

  const getRiskBadge = (score: number) => {
    if (score >= 90) return "destructive";
    if (score >= 70) return "secondary";
    return "outline";
  };

  return (
    <div className="space-y-6">
      {/* Flagged User Profiles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <UserX className="h-5 w-5 text-critical mr-2" />
            Flagged User Profiles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {flaggedUsers.map((user, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-gradient-to-br from-critical to-warning rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">{user.username}</h4>
                      <p className="text-sm text-muted-foreground">{user.platform}</p>
                    </div>
                  </div>
                  <Badge variant={getRiskBadge(user.riskScore)}>
                    Risk: {user.riskScore}%
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                  <div className="text-center">
                    <div className="text-sm font-medium">{user.followers}</div>
                    <div className="text-xs text-muted-foreground">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">{user.posts}</div>
                    <div className="text-xs text-muted-foreground">Posts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">{user.accountAge}</div>
                    <div className="text-xs text-muted-foreground">Account Age</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">{user.activity}</div>
                    <div className="text-xs text-muted-foreground">Activity</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex-1 mr-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Risk Score</span>
                      <span className={getRiskColor(user.riskScore)}>{user.riskScore}%</span>
                    </div>
                    <Progress value={user.riskScore} className="h-2" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    Investigate
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Network Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Network className="h-5 w-5 text-info mr-2" />
              User Network Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <div className="text-2xl font-bold text-info">{networkConnections.totalNodes}</div>
                <div className="text-sm text-muted-foreground">Total Nodes</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <div className="text-2xl font-bold text-critical">{networkConnections.suspiciousConnections}</div>
                <div className="text-sm text-muted-foreground">Suspicious Links</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Network Density</span>
                <span className="text-sm font-medium">67%</span>
              </div>
              <Progress value={67} className="h-2" />
              
              <div className="flex justify-between">
                <span className="text-sm">Connection Strength</span>
                <span className="text-sm font-medium">84%</span>
              </div>
              <Progress value={84} className="h-2" />
            </div>

            <Button variant="outline" className="w-full">
              <Network className="h-4 w-4 mr-2" />
              View Network Graph
            </Button>
          </CardContent>
        </Card>

        {/* Activity Patterns */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-warning mr-2" />
              Suspicious Activity Patterns
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activityPatterns.map((pattern, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <div className="font-medium text-sm">{pattern.pattern}</div>
                  <div className="text-xs text-muted-foreground">{pattern.accounts} accounts detected</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{pattern.accounts}</Badge>
                  <div className={`h-2 w-2 rounded-full ${
                    pattern.trend === 'up' ? 'bg-critical' : 
                    pattern.trend === 'down' ? 'bg-success' : 'bg-warning'
                  }`} />
                </div>
              </div>
            ))}
            
            <Button variant="outline" className="w-full mt-4">
              <Clock className="h-4 w-4 mr-2" />
              View Detailed Analysis
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserMonitoring;