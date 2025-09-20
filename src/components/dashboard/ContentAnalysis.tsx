import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Image, 
  Video, 
  FileText, 
  Link, 
  Volume2,
  Share2,
  MessageSquare,
  Globe
} from "lucide-react";

const ContentAnalysis = () => {
  const contentTypes = [
    { type: "Images", count: 3456, percentage: 45, icon: Image, color: "text-critical" },
    { type: "Videos", count: 2134, percentage: 28, icon: Video, color: "text-warning" },
    { type: "Text Posts", count: 1567, percentage: 20, icon: FileText, color: "text-info" },
    { type: "URLs/Links", count: 432, percentage: 6, icon: Link, color: "text-success" },
    { type: "Audio", count: 78, percentage: 1, icon: Volume2, color: "text-muted-foreground" }
  ];

  const platformBreakdown = [
    { category: "Social Media", percentage: 45, platforms: ["Facebook", "Instagram", "Twitter"] },
    { category: "Chat Apps", percentage: 35, platforms: ["Telegram", "WhatsApp", "Signal"] },
    { category: "Classifieds", percentage: 15, platforms: ["OLX", "Quikr", "Locanto"] },
    { category: "Dark Web", percentage: 5, platforms: ["Tor Sites", "Hidden Services"] }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Social Media": return <Share2 className="h-4 w-4" />;
      case "Chat Apps": return <MessageSquare className="h-4 w-4" />;
      case "Classifieds": return <FileText className="h-4 w-4" />;
      case "Dark Web": return <Globe className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Content Types */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Image className="h-5 w-5 text-critical mr-2" />
            Content Forms Distribution
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {contentTypes.map((content, index) => {
            const IconComponent = content.icon;
            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <IconComponent className={`h-4 w-4 ${content.color}`} />
                    <span className="font-medium text-sm">{content.type}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">{content.count.toLocaleString()}</span>
                    <Badge variant="outline">{content.percentage}%</Badge>
                  </div>
                </div>
                <Progress value={content.percentage} className="h-2" />
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Platform Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Share2 className="h-5 w-5 text-info mr-2" />
            Platform Categories
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {platformBreakdown.map((platform, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {getCategoryIcon(platform.category)}
                  <span className="font-medium text-sm">{platform.category}</span>
                </div>
                <Badge variant="secondary">{platform.percentage}%</Badge>
              </div>
              <Progress value={platform.percentage} className="h-2" />
              <div className="flex flex-wrap gap-1">
                {platform.platforms.map((p, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {p}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Visual Content Analysis */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Video className="h-5 w-5 text-warning mr-2" />
            Visual Content Risk Assessment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-critical">78%</div>
                <p className="text-sm text-muted-foreground">High Risk Images</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Explicit Content</span>
                  <span>45%</span>
                </div>
                <Progress value={45} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Suggestive Content</span>
                  <span>33%</span>
                </div>
                <Progress value={33} className="h-2" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-warning">65%</div>
                <p className="text-sm text-muted-foreground">Medium Risk Videos</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Promotional Content</span>
                  <span>40%</span>
                </div>
                <Progress value={40} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Live Streams</span>
                  <span>25%</span>
                </div>
                <Progress value={25} className="h-2" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-info">23%</div>
                <p className="text-sm text-muted-foreground">Text-based Violations</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Contact Information</span>
                  <span>15%</span>
                </div>
                <Progress value={15} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Pricing Details</span>
                  <span>8%</span>
                </div>
                <Progress value={8} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentAnalysis;