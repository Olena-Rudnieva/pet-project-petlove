export interface Pet {
  _id?: string;
  name: string;
  imgURL?: string;
  species: string;
  birthday: string;
  title?: string;
  sex: string;
}

export interface PetBlockInfo {
  id?: string;
  name: string;
  imgURL: string;
  birthday: string;
  title: string;
}
