import { Card } from "@/components/ui/card";
import { Activity, Target, Users, TrendingUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Track disease outbreaks and vaccination needs across all districts in real-time",
    },
    {
      icon: Target,
      title: "Predictive Analytics",
      description: "AI-powered predictions for vaccine requirements and danger zone identification",
    },
    {
      icon: Users,
      title: "Population Coverage",
      description: "Comprehensive data covering 75 districts and millions of citizens across UP",
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "Advanced analytics and visualizations for informed decision making",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">About UP Vaccine System</h1>
          <p className="text-muted-foreground">Building a healthier Uttar Pradesh through technology</p>
        </div>

        <Card className="p-8 mb-8 bg-card border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The UP Vaccine Management System is a comprehensive digital platform designed to monitor, predict, and manage vaccine distribution across Uttar Pradesh. Our mission is to ensure timely vaccination coverage, identify high-risk areas, and prevent disease outbreaks through data-driven insights and real-time monitoring.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            By leveraging modern technology and analytics, we aim to create a robust healthcare infrastructure that can respond quickly to emerging health threats, optimize vaccine distribution, and ultimately save lives across the state. Our platform serves as a critical tool for health officials, administrators, and medical professionals to make informed decisions and allocate resources effectively.
          </p>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 bg-card border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <span>State-wide disease tracking with district and city-level granularity</span>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <span>Color-coded danger zone visualization for quick risk assessment</span>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <span>Comprehensive vaccine requirement and shortage alerts</span>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <span>Interactive charts and analytics for data-driven decision making</span>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <span>Real-time population risk assessment and vaccine stock management</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default About;
