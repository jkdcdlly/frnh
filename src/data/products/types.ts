export interface Product {
  slug: string;
  title: string;
  description: string;
  labels?: string[];
  category?: string;
  category_id?: string;
  colorScheme?: { img: ImageMetadata; desc: string }[];
  fullDescription?: string;
  image?: ImageMetadata;
  images?: ImageMetadata[];
  icon?: any;
  features?: string[];
  specs?: Record<string, string>;
  application?: string;
  applications?: string[];
  usage?: string[];
  precautions?: string[];
  
  packagingAndTransportation?: string[];
  highlights?: string[];
  constructionMethod?: string;
  constructionMethods?: string[];
}