export interface WorkDay {
  from: string;
  to: string;
}

export interface Friend {
  _id: number;
  title: string;
  imageUrl: string;
  email?: string;
  address?: string;
  addressUrl?: string;
  phone?: string;
  workDays?: WorkDay[];
}
