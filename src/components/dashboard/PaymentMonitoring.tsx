import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  CreditCard, 
  Bitcoin, 
  Gift,
  Wallet,
  AlertTriangle,
  TrendingUp,
  DollarSign
} from "lucide-react";

const PaymentMonitoring = () => {
  const paymentMethods = [
    { method: "UPI Transfers", transactions: 1234, amount: "₹12.5L", risk: 85, icon: Wallet, color: "text-critical" },
    { method: "Cryptocurrency", transactions: 567, amount: "₹8.2L", risk: 95, icon: Bitcoin, color: "text-warning" },
    { method: "Gift Cards", transactions: 289, amount: "₹3.1L", risk: 75, icon: Gift, color: "text-info" },
    { method: "Digital Wallets", transactions: 445, amount: "₹5.7L", risk: 65, icon: CreditCard, color: "text-success" }
  ];

  const suspiciousTransactions = [
    {
      id: "TXN001",
      amount: "₹25,000",
      method: "UPI",
      accounts: 5,
      pattern: "Multiple small transfers",
      risk: "High",
      time: "2 hours ago"
    },
    {
      id: "TXN002",
      amount: "₹50,000",
      method: "Crypto",
      accounts: 3,
      pattern: "Rapid conversion",
      risk: "Critical",
      time: "4 hours ago"
    },
    {
      id: "TXN003",
      amount: "₹15,000",
      method: "Gift Cards",
      accounts: 8,
      pattern: "Bulk purchases",
      risk: "Medium",
      time: "6 hours ago"
    }
  ];

  const launderingPatterns = [
    { pattern: "Circular Transfers", detected: 23, volume: "₹2.3L", trend: "up" },
    { pattern: "Rapid Account Switching", detected: 34, volume: "₹4.1L", trend: "up" },
    { pattern: "Small Amount Splitting", detected: 67, volume: "₹1.8L", trend: "stable" },
    { pattern: "Cross-Platform Movement", detected: 12, volume: "₹5.2L", trend: "down" }
  ];

  const getRiskColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'critical': return 'text-critical';
      case 'high': return 'text-warning';
      case 'medium': return 'text-info';
      default: return 'text-success';
    }
  };

  const getRiskBadge = (level: string) => {
    switch (level.toLowerCase()) {
      case 'critical': return 'destructive';
      case 'high': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      {/* Payment Methods Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {paymentMethods.map((payment, index) => {
          const IconComponent = payment.icon;
          return (
            <Card key={index} className="border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <IconComponent className={`h-4 w-4 ${payment.color} mr-2`} />
                  {payment.method}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-lg font-bold">{payment.amount}</div>
                <div className="text-xs text-muted-foreground">{payment.transactions} transactions</div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Risk Level</span>
                    <span>{payment.risk}%</span>
                  </div>
                  <Progress value={payment.risk} className="h-1" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Suspicious Transactions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-critical mr-2" />
              Suspicious Transactions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {suspiciousTransactions.map((transaction, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-medium text-sm">{transaction.id}</div>
                    <div className="text-xs text-muted-foreground">{transaction.time}</div>
                  </div>
                  <Badge variant={getRiskBadge(transaction.risk)}>
                    {transaction.risk}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-lg font-bold">{transaction.amount}</div>
                    <div className="text-xs text-muted-foreground">{transaction.method}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">{transaction.accounts} accounts</div>
                    <div className="text-xs text-muted-foreground">Involved</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{transaction.pattern}</span>
                  <Button variant="outline" size="sm">
                    Investigate
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Money Laundering Patterns */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="h-5 w-5 text-warning mr-2" />
              Money Laundering Patterns
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {launderingPatterns.map((pattern, index) => (
              <div key={index} className="p-3 rounded-lg bg-muted/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">{pattern.pattern}</span>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{pattern.detected}</Badge>
                    <TrendingUp className={`h-3 w-3 ${
                      pattern.trend === 'up' ? 'text-critical' : 
                      pattern.trend === 'down' ? 'text-success rotate-180' : 'text-warning'
                    }`} />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Volume: {pattern.volume}</span>
                  <span className="text-xs text-muted-foreground">{pattern.detected} cases</span>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              <AlertTriangle className="h-4 w-4 mr-2" />
              View Pattern Analysis
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Transaction Volume Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="h-5 w-5 text-info mr-2" />
            Transaction Volume & Trend Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-critical">₹45.2L</div>
                <p className="text-sm text-muted-foreground">Total Flagged Volume (24h)</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>High Risk</span>
                  <span>65%</span>
                </div>
                <Progress value={65} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Medium Risk</span>
                  <span>25%</span>
                </div>
                <Progress value={25} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Low Risk</span>
                  <span>10%</span>
                </div>
                <Progress value={10} className="h-2" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-warning">2,847</div>
                <p className="text-sm text-muted-foreground">Blocked Transactions</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Auto-blocked</span>
                  <span>78%</span>
                </div>
                <Progress value={78} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Manual Review</span>
                  <span>22%</span>
                </div>
                <Progress value={22} className="h-2" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-success">₹8.9L</div>
                <p className="text-sm text-muted-foreground">Assets Frozen</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Bank Accounts</span>
                  <span>45%</span>
                </div>
                <Progress value={45} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Digital Wallets</span>
                  <span>35%</span>
                </div>
                <Progress value={35} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Crypto Assets</span>
                  <span>20%</span>
                </div>
                <Progress value={20} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentMonitoring;