export interface DiseaseData {
  id: string;
  name: string;
  category: string;
  cases: number;
  vaccinesRequired: number;
  vaccinesAvailable: number;
  dangerLevel: "low" | "medium" | "high";
}

export interface DistrictDanger {
  district: string;
  dangerLevel: "low" | "medium" | "high";
  totalCases: number;
  vaccineShortage: number;
  population: number;
  criticalDiseases: string[];
}

export const diseases: DiseaseData[] = [
  {
    id: "1",
    name: "COVID-19",
    category: "Viral",
    cases: 15420,
    vaccinesRequired: 30840,
    vaccinesAvailable: 28000,
    dangerLevel: "medium",
  },
  {
    id: "2",
    name: "Dengue",
    category: "Vector-borne",
    cases: 8932,
    vaccinesRequired: 17864,
    vaccinesAvailable: 12000,
    dangerLevel: "high",
  },
  {
    id: "3",
    name: "Polio",
    category: "Viral",
    cases: 124,
    vaccinesRequired: 248,
    vaccinesAvailable: 300,
    dangerLevel: "low",
  },
  {
    id: "4",
    name: "Measles",
    category: "Viral",
    cases: 5621,
    vaccinesRequired: 11242,
    vaccinesAvailable: 9000,
    dangerLevel: "medium",
  },
  {
    id: "5",
    name: "Chickenpox",
    category: "Viral",
    cases: 3456,
    vaccinesRequired: 6912,
    vaccinesAvailable: 7500,
    dangerLevel: "low",
  },
  {
    id: "6",
    name: "Hepatitis B",
    category: "Viral",
    cases: 7892,
    vaccinesRequired: 15784,
    vaccinesAvailable: 11000,
    dangerLevel: "high",
  },
  {
    id: "7",
    name: "Typhoid",
    category: "Bacterial",
    cases: 6234,
    vaccinesRequired: 12468,
    vaccinesAvailable: 13000,
    dangerLevel: "medium",
  },
  {
    id: "8",
    name: "Tuberculosis",
    category: "Bacterial",
    cases: 12456,
    vaccinesRequired: 24912,
    vaccinesAvailable: 20000,
    dangerLevel: "high",
  },
];

export const districtDangerData: DistrictDanger[] = [
  {
    district: "Lucknow",
    dangerLevel: "high",
    totalCases: 8934,
    vaccineShortage: 4500,
    population: 4500000,
    criticalDiseases: ["Dengue", "Hepatitis B"],
  },
  {
    district: "Kanpur",
    dangerLevel: "high",
    totalCases: 7821,
    vaccineShortage: 3200,
    population: 4500000,
    criticalDiseases: ["COVID-19", "Tuberculosis"],
  },
  {
    district: "Ghaziabad",
    dangerLevel: "medium",
    totalCases: 5432,
    vaccineShortage: 1800,
    population: 3700000,
    criticalDiseases: ["Measles"],
  },
  {
    district: "Agra",
    dangerLevel: "medium",
    totalCases: 4567,
    vaccineShortage: 1500,
    population: 1800000,
    criticalDiseases: ["Typhoid"],
  },
  {
    district: "Varanasi",
    dangerLevel: "high",
    totalCases: 6789,
    vaccineShortage: 2900,
    population: 3700000,
    criticalDiseases: ["Dengue", "Tuberculosis"],
  },
  {
    district: "Meerut",
    dangerLevel: "medium",
    totalCases: 3456,
    vaccineShortage: 900,
    population: 3400000,
    criticalDiseases: ["COVID-19"],
  },
  {
    district: "Allahabad",
    dangerLevel: "low",
    totalCases: 2345,
    vaccineShortage: 500,
    population: 6100000,
    criticalDiseases: ["Measles"],
  },
  {
    district: "Bareilly",
    dangerLevel: "medium",
    totalCases: 4123,
    vaccineShortage: 1200,
    population: 4400000,
    criticalDiseases: ["Typhoid"],
  },
  {
    district: "Gorakhpur",
    dangerLevel: "low",
    totalCases: 1987,
    vaccineShortage: 400,
    population: 4400000,
    criticalDiseases: ["Chickenpox"],
  },
  {
    district: "Noida",
    dangerLevel: "medium",
    totalCases: 5234,
    vaccineShortage: 1600,
    population: 640000,
    criticalDiseases: ["COVID-19", "Hepatitis B"],
  },
];

export const vaccineRequirementByCity = [
  {
    city: "Lucknow City",
    district: "Lucknow",
    disease: "Dengue",
    populationAtRisk: 450000,
    vaccinesRequired: 900000,
    stockAvailable: 650000,
    pendingDoses: 250000,
  },
  {
    city: "Kanpur City",
    district: "Kanpur",
    disease: "Tuberculosis",
    populationAtRisk: 380000,
    vaccinesRequired: 760000,
    stockAvailable: 600000,
    pendingDoses: 160000,
  },
  {
    city: "Noida City",
    district: "Gautam Buddha Nagar",
    disease: "COVID-19",
    populationAtRisk: 320000,
    vaccinesRequired: 640000,
    stockAvailable: 580000,
    pendingDoses: 60000,
  },
  {
    city: "Ghaziabad City",
    district: "Ghaziabad",
    disease: "Measles",
    populationAtRisk: 280000,
    vaccinesRequired: 560000,
    stockAvailable: 500000,
    pendingDoses: 60000,
  },
  {
    city: "Agra City",
    district: "Agra",
    disease: "Typhoid",
    populationAtRisk: 250000,
    vaccinesRequired: 500000,
    stockAvailable: 450000,
    pendingDoses: 50000,
  },
  {
    city: "Varanasi City",
    district: "Varanasi",
    disease: "Hepatitis B",
    populationAtRisk: 340000,
    vaccinesRequired: 680000,
    stockAvailable: 550000,
    pendingDoses: 130000,
  },
];
