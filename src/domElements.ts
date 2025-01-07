export namespace AllDomEl {
  export const inputGetCharacter = document.querySelector(
    "#nameInput"
  ) as HTMLInputElement;
  export const buttonGetCharacter = document.querySelector(
    "#getTvShows"
  ) as HTMLButtonElement;
  export const moviesButton = document.querySelector(
    "#getFilms"
  ) as HTMLButtonElement;
  export const divResponse = document.querySelector(
    "#responseDiv"
  ) as HTMLDivElement;
  export const ulResponse = document.querySelector(
    "#responseUl"
  ) as HTMLUListElement;
  export const h2 = document.createElement("h2") as HTMLHeadingElement;

  export const img = document.querySelector(
    "#characterImg"
  ) as HTMLImageElement;
}
