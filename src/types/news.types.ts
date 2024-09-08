export declare module News {
    export interface News {
      id: string;
      title: string;
    }
  
    export interface RootState {
      news: News[];
    }
  }
  