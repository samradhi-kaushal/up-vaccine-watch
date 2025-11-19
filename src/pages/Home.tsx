import { Link } from "react-router-dom";
import { Activity, Search, AlertTriangle, Package, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-vaccine.jpg";

const Home = () => {
  const features = [
    {
      icon: Search,
      title: "Disease Search",
      description: "Search and track diseases with real-time data on vaccination requirements",
      link: "/search",
      color: "text-primary",
    },
    {
      icon: AlertTriangle,
      title: "Danger Zones",
      description: "Identify high-risk districts with color-coded alerts and critical metrics",
      link: "/danger-zone",
      color: "text-danger",
    },
    {
      icon: Package,
      title: "Vaccine Dashboard",
      description: "Monitor vaccine stock, requirements, and shortage alerts across UP",
      link: "/vaccine-dashboard",
      color: "text-secondary",
    },
  ];

  const stats = [
    { label: "Total Districts", value: "75", icon: Shield },
    { label: "Diseases Tracked", value: "8+", icon: Activity },
    { label: "Vaccines Monitored", value: "1.2M+", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="Medical background" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Activity className="h-4 w-4" />
              <span>UP Health Monitoring System</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Uttar Pradesh Vaccine Management System
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Search diseases, check danger zones, and estimate vaccine needs across Uttar Pradesh with real-time data and intelligent analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/search">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                  <Search className="mr-2 h-5 w-5" />
                  Search Diseases
                </Button>
              </Link>
              <Link to="/danger-zone">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  View Danger Zones
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Health Monitoring
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access powerful tools to monitor, predict, and manage vaccine distribution across Uttar Pradesh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link key={index} to={feature.link}>
                  <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border bg-card">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 ${feature.color} mb-4`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 text-center bg-gradient-to-r from-primary to-accent text-white border-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Monitor Your District?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get instant access to vaccination data, danger zone alerts, and comprehensive health analytics
            </p>
            <Link to="/vaccine-dashboard">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Package className="mr-2 h-5 w-5" />
                View Vaccine Dashboard
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
