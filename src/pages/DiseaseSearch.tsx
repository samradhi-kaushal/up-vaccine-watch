import { useState } from "react";
import { Search, AlertCircle, Activity, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LocationSelector from "@/components/LocationSelector";
import { diseases } from "@/data/mockData";

const DiseaseSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [state, setState] = useState("Uttar Pradesh");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");

  const filteredDiseases = diseases.filter((disease) =>
    disease.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    disease.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Disease Search</h1>
          <p className="text-muted-foreground">Search and track diseases across Uttar Pradesh</p>
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

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-2 mb-4">
              <Search className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Search Diseases</h3>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for diseases (e.g., COVID-19, Dengue, Polio)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-background"
              />
            </div>
          </Card>

          {filteredDiseases.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDiseases.map((disease) => (
                <Card key={disease.id} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{disease.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {disease.category}
                      </Badge>
                    </div>
                    <Badge className={getDangerColor(disease.dangerLevel)}>
                      {disease.dangerLevel.toUpperCase()}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Activity className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Total Cases</span>
                      </div>
                      <span className="font-semibold text-foreground">{disease.cases.toLocaleString()}</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-secondary" />
                        <span className="text-sm text-muted-foreground">Vaccines Required</span>
                      </div>
                      <span className="font-semibold text-foreground">{disease.vaccinesRequired.toLocaleString()}</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Activity className="h-4 w-4 text-accent" />
                        <span className="text-sm text-muted-foreground">Available Stock</span>
                      </div>
                      <span className="font-semibold text-foreground">{disease.vaccinesAvailable.toLocaleString()}</span>
                    </div>

                    {disease.vaccinesRequired > disease.vaccinesAvailable && (
                      <div className="flex items-center gap-2 p-3 bg-danger/10 rounded-lg border border-danger/20">
                        <AlertCircle className="h-4 w-4 text-danger" />
                        <span className="text-sm text-danger font-medium">
                          Shortage: {(disease.vaccinesRequired - disease.vaccinesAvailable).toLocaleString()} doses
                        </span>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center bg-card border-border">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No diseases found. Try searching for "COVID-19", "Dengue", or other diseases.</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiseaseSearch;
