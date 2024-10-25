export interface User {
  _id?: string;
  name: string | null;
  email: string | null;
  avatar: string | null;
  phone: string | null;
  noticesFavorites?: any[];
  noticesViewed?: any[];
}
