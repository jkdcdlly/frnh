export interface Product {
  slug: string;
  title: string;
  category?: string;
  category_id?: string;
  description: string;
  fullDescription?: string;
  image: ImageMetadata;
  icon?: any;
  features?: string[];
  specs?: Record<string, string>;
  application?: string;
  usage?: string[];
}