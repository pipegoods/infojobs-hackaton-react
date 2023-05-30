export interface OfferApiResponse {
  availableSortingMethods: string[];
  currentPage: number;
  currentResults: number;
  dataLayer: DataLayer;
  eligibleForAutomaticAlertCreation: boolean;
  items: Item[];
  offers: Item[];
  pageSize: number;
  queryParameters: QueryParameters;
  sinceDate: string;
  sortBy: string;
  totalPages: number;
  totalResults: number;
}

export interface DataLayer {
  offer_search_page: string;
  offer_search_page_limit: string;
  region_level2_id: string;
}

export interface Item {
  applications: string;
  author: Author;
  bold: boolean;
  category: Category;
  city: string;
  color: boolean;
  contractType: Category;
  executive: boolean;
  experienceMin: Category;
  id: string;
  link: string;
  multiProvince: boolean;
  province: Category;
  published: string;
  requirementMin: string;
  salaryDescription: string;
  salaryMax: Category;
  salaryMin: Category;
  salaryPeriod: Category;
  study: Category;
  subSegment: number;
  subcategory: Category;
  teleworking?: Category;
  title: string;
  updated: string;
  urgent: boolean;
  workDay: Category;
}

export interface Author {
  corporateResponsive: boolean;
  id: string;
  logoUrl?: string;
  name: string;
  privateId: number;
  showCorporativeHeader: boolean;
  uri: string;
}

export interface Category {
  id: number;
  value: string;
}

export interface QueryParameters {
  category: string[];
  city: any[];
  contractType: any[];
  experienceMin: any[];
  province: string[];
  query: string;
  salaryPeriod: string;
  study: any[];
  teleworking: any[];
  workDay: any[];
}
