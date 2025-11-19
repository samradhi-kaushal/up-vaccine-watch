import { useState } from "react";
import { AlertTriangle, MapPin, Activity, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { districtDangerData } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const DangerZone = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  const getDangerColor = (level: string) => {
    switch (level) {
      case "high":
        return "bg-danger text-danger-foreground";
      case "medium":
        return "bg-warning text-warning-foreground";
      case "low":
        return "bg-success text-success-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getBorderColor = (level: string) => {
    switch (level) {
      case "high":
        return "border-danger";
      case "medium":
        return "border-warning";
      case "low":
        return "border-success";
      default:
        return "border-border";
    }
  };

  const chartData = districtDangerData.map((d) => ({
    name: d.district,
    cases: d.totalCases,
    shortage: d.vaccineShortage,
  }));

  const selectedDistrictData = selectedDistrict
    ? districtDangerData.find((d) => d.district === selectedDistrict)
    : null;

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Danger Zone Dashboard</h1>
          <p className="text-muted-foreground">Monitor high-risk districts and critical health alerts across UP</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-danger/10 border-danger/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">High Risk Districts</p>
                <p className="text-3xl font-bold text-danger">
                  {districtDangerData.filter((d) => d.dangerLevel === "high").length}
                </p>
              </div>
              <AlertTriangle className="h-10 w-10 text-danger" />
            </div>
          </Card>

          <Card className="p-6 bg-warning/10 border-warning/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Medium Risk Districts</p>
                <p className="text-3xl font-bold text-warning">
                  {districtDangerData.filter((d) => d.dangerLevel === "medium").length}
                </p>
              </div>
              <Activity className="h-10 w-10 text-warning" />
            </div>
          </Card>

          <Card className="p-6 bg-success/10 border-success/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Low Risk Districts</p>
                <p className="text-3xl font-bold text-success">
                  {districtDangerData.filter((d) => d.dangerLevel === "low").length}
                </p>
              </div>
              <TrendingUp className="h-10 w-10 text-success" />
            </div>
          </Card>
        </div>

        <Card className="p-6 mb-8 bg-card border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4">District-wise Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="cases" fill="hsl(var(--primary))" name="Total Cases" />
              <Bar dataKey="shortage" fill="hsl(var(--danger))" name="Vaccine Shortage" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {districtDangerData.map((district) => (
            <Card
              key={district.district}
              className={`p-6 bg-card hover:shadow-lg transition-all cursor-pointer border-2 ${getBorderColor(district.dangerLevel)}`}
              onClick={() => setSelectedDistrict(district.district)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{district.district}</h3>
                </div>
                <Badge className={getDangerColor(district.dangerLevel)}>
                  {district.dangerLevel.toUpperCase()}
                </Badge>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total Cases</span>
                  <span className="font-semibold text-foreground">{district.totalCases.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Vaccine Shortage</span>
                  <span className="font-semibold text-danger">{district.vaccineShortage.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Population</span>
                  <span className="font-semibold text-foreground">{(district.population / 1000000).toFixed(1)}M</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-2">Critical Diseases:</p>
                <div className="flex flex-wrap gap-1">
                  {district.criticalDiseases.map((disease) => (
                    <Badge key={disease} variant="outline" className="text-xs">
                      {disease}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {selectedDistrictData && (
          <Card className="mt-8 p-6 bg-card border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">District Details: {selectedDistrictData.district}</h3>
              <Badge className={getDangerColor(selectedDistrictData.dangerLevel)}>
                {selectedDistrictData.dangerLevel.toUpperCase()} RISK
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Activity className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Total Cases</p>
                <p className="text-2xl font-bold text-foreground">{selectedDistrictData.totalCases.toLocaleString()}</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <AlertTriangle className="h-8 w-8 text-danger mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Vaccine Shortage</p>
                <p className="text-2xl font-bold text-danger">{selectedDistrictData.vaccineShortage.toLocaleString()}</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Population</p>
                <p className="text-2xl font-bold text-foreground">{(selectedDistrictData.population / 1000000).toFixed(1)}M</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <TrendingUp className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Critical Diseases</p>
                <p className="text-2xl font-bold text-foreground">{selectedDistrictData.criticalDiseases.length}</p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default DangerZone;
