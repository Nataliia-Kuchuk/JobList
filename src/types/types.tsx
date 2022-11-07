export interface IJobs {
  id: string;
  address: string;
  name: string;
  title: string;
  author: string;
  createdAt: string;
  pictures: Array<string>;
  description: string;
  salary: string;
  employment_type: Array<string>;
  location: object;
  email: string;
  phone: string;
  benefits: Array<string>;
}