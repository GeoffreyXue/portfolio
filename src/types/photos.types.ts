export type Photo = {
  name: String;
  date: Date;
  url: String;
}
export type Album = {
  title: String;
  description: String;
  photos: Photo[];
}