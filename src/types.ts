export namespace AllTypes {
  export type Root = {
    info: Info;
    data: Character[];
  };

  export type Info = {
    count: number;
    totalPages: number;
    previousPage: any;
    nextPage: string;
  };

  export type Character = {
    _id: number;
    films: string[];
    shortFilms: any[];
    tvShows: string[];
    videoGames: string[];
    parkAttractions: string[];
    allies: any[];
    enemies: any[];
    sourceUrl: string;
    name: string;
    imageUrl?: string;
    createdAt: string;
    updatedAt: string;
    url: string;
    __v: number;
  };
}
