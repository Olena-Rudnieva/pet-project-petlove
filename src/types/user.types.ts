export interface User {
  _id?: string;
  name: string | null;
  email: string | null;
  avatarURL: string | null;
  phone: string | null;
  noticesFavorites: any[];
  noticesViewed: any[];
}
