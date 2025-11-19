import { useState } from "react";
import { Package, AlertCircle, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LocationSelector from "@/components/LocationSelector";
import { vaccineRequirementByCity, diseases } from "@/data/mockData";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const VaccineDashboard = () => {
  const [state, setState] = useState("Uttar Pradesh");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");

  const filteredData = district
    ? vaccineRequirementByCity.filter((item) => item.district === district)
    : vaccineRequirementByCity;

  const totalRequired = diseases.reduce((sum, d) => sum + d.vaccinesRequired, 0);
  const totalAvailable = diseases.reduce((sum, d) => sum + d.vaccinesAvailable, 0);
  const totalShortage = totalRequired - totalAvailable;

  const pieData = [
    { name: "Available", value: totalAvailable, color: "hsl(var(--success))" },
    { name: "Shortage", value: totalShortage, color: "hsl(var(--danger))" },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Vaccine Requirement Dashboard</h1>
          <p className="text-muted-foreground">Monitor vaccine stock, requirements, and distribution across UP</p>
        </div>

        <div className="space-y-6">
          <LocationSelector
            state={state}
            district={district}
            city={city}
            onStateChange={setState}
            onDistrictChange={setDistrict}
            onCityChange={setCity}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Required</p>
                  <p className="text-3xl font-bold text-primary">{totalRequired.toLocaleString()}</p>
                </div>
                <Package className="h-10 w-10 text-primary" />
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Available Stock</p>
                  <p className="text-3xl font-bold text-success">{totalAvailable.toLocaleString()}</p>
                </div>
                <TrendingUp className="h-10 w-10 text-success" />
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Shortage</p>
                  <p className="text-3xl font-bold text-danger">{totalShortage.toLocaleString()}</p>
                </div>
                <AlertCircle className="h-10 w-10 text-danger" />
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Stock Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Disease-wise Vaccine Status</h3>
              <div className="space-y-3 max-h-[300px] overflow-y-auto">
                {diseases.map((disease) => {
                  const shortage = disease.vaccinesRequired - disease.vaccinesAvailable;
                  const percentage = (disease.vaccinesAvailable / disease.vaccinesRequired) * 100;
                  
                  return (
                    <div key={disease.id} className="p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground">{disease.name}</span>
                        <Badge variant={shortage > 0 ? "destructive" : "default"}>
                          {percentage.toFixed(0)}%
                        </Badge>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${shortage > 0 ? "bg-danger" : "bg-success"}`}
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between mt-1 text-xs text-muted-foreground">
                        <span>{disease.vaccinesAvailable.toLocaleString()} available</span>
                        {shortage > 0 && (
                          <span className="text-danger">Short: {shortage.toLocaleString()}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-card border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">City-wise Vaccine Requirements</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 text-sm font-semibold text-foreground">City</th>
                    <th className="text-left p-3 text-sm font-semibold text-foreground">District</th>
                    <th className="text-left p-3 text-sm font-semibold text-foreground">Disease</th>
                    <th className="text-right p-3 text-sm font-semibold text-foreground">Population at Risk</th>
                    <th className="text-right p-3 text-sm font-semibold text-foreground">Required</th>
                    <th className="text-right p-3 text-sm font-semibold text-foreground">Available</th>
                    <th className="text-right p-3 text-sm font-semibold text-foreground">Pending</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="p-3 text-sm text-foreground">{item.city}</td>
                      <td className="p-3 text-sm text-muted-foreground">{item.district}</td>
                      <td className="p-3 text-sm">
                        <Badge variant="outline">{item.disease}</Badge>
                      </td>
                      <td className="p-3 text-sm text-right text-foreground">
                        <div className="flex items-center justify-end gap-1">
                          <Users className="h-3 w-3" />
                          {item.populationAtRisk.toLocaleString()}
                        </div>
                      </td>
                      <td className="p-3 text-sm text-right text-foreground font-medium">
                        {item.vaccinesRequired.toLocaleString()}
                      </td>
                      <td className="p-3 text-sm text-right text-success font-medium">
                        {item.stockAvailable.toLocaleString()}
                      </td>
                      <td className="p-3 text-sm text-right">
                        <span className={item.pendingDoses > 0 ? "text-danger font-medium" : "text-muted-foreground"}>
                          {item.pendingDoses.toLocaleString()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VaccineDashboard;
