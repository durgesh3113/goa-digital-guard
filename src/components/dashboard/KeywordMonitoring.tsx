import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Hash, 
  TrendingUp, 
  Clock,
  Instagram,
  MessageSquare,
  Twitter
} from "lucide-react";

const KeywordMonitoring = () => {
  const flaggedKeywords = [
    { keyword: "#callgirls", mentions: 1234, platform: "Instagram", trend: "up" },
    { keyword: "escort service", mentions: 892, platform: "Telegram", trend: "up" },
    { keyword: "#betting", mentions: 756, platform: "Twitter", trend: "down" },
    { keyword: "casino online", mentions: 634, platform: "Facebook", trend: "up" },
    { keyword: "#massage", mentions: 523, platform: "Instagram", trend: "stable" }
  ];

  const platforms = [
    { name: "Instagram", mentions: 2847, percentage: 35 },
    { name: "Telegram", mentions: 2134, percentage: 26 },
    { name: "WhatsApp", mentions: 1567, percentage: 19 },
    { name: "Twitter", mentions: 1098, percentage: 13 },
    { name: "Facebook", mentions: 567, percentage: 7 }
  ];

  const peakTimes = [
    { time: "10:00 PM", activity: 89 },
    { time: "11:00 PM", activity: 95 },
    { time: "12:00 AM", activity: 87 },
    { time: "1:00 AM", activity: 76 },
    { time: "2:00 AM", activity: 45 }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-3 w-3 text-critical" />;
      case "down": return <TrendingUp className="h-3 w-3 text-success rotate-180" />;
      default: return <div className="h-3 w-3 bg-muted-foreground rounded-full" />;
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram": return <Instagram className="h-4 w-4" />;
      case "telegram": return <MessageSquare className="h-4 w-4" />;
      case "twitter": return <Twitter className="h-4 w-4" />;
      default: return <Hash className="h-4 w-4" />;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Top Flagged Keywords */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Hash className="h-5 w-5 text-critical mr-2" />
            Top Flagged Keywords & Hashtags
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {flaggedKeywords.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center space-x-3">
                {getPlatformIcon(item.platform)}
                <div>
                  <span className="font-medium text-sm">{item.keyword}</span>
                  <p className="text-xs text-muted-foreground">{item.platform}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">{item.mentions.toLocaleString()}</Badge>
                {getTrendIcon(item.trend)}
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full mt-4">
            View All Keywords
          </Button>
        </CardContent>
      </Card>

      {/* Platform Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="h-5 w-5 text-info mr-2" />
            Source Platforms
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {platforms.map((platform, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {getPlatformIcon(platform.name)}
                  <span className="font-medium text-sm">{platform.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">{platform.mentions.toLocaleString()}</span>
                  <Badge variant="outline">{platform.percentage}%</Badge>
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-critical to-warning h-2 rounded-full transition-all duration-300"
                  style={{ width: `${platform.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Peak Activity Times */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="h-5 w-5 text-warning mr-2" />
            Peak Posting Times Heatmap
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            {peakTimes.map((time, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-sm font-medium">{time.time}</div>
                <div className="relative">
                  <div className="h-20 bg-muted rounded-lg flex items-end justify-center p-2">
                    <div 
                      className="bg-gradient-to-t from-critical to-warning rounded-sm transition-all duration-300"
                      style={{ 
                        height: `${time.activity}%`,
                        width: '100%'
                      }}
                    />
                  </div>
                  <Badge variant="secondary" className="mt-1 text-xs">
                    {time.activity}%
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KeywordMonitoring;