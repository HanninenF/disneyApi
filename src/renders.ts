import { AllDomEl } from "./domElements";

export namespace AllRenders {
  export const renderTvShows = (tvShows: string[]) => {
    tvShows.forEach((tvShow) => {
      const liElement = document.createElement("li");
      liElement.classList.add("liElement");
      liElement.textContent = `${tvShow}`;

      AllDomEl.ulResponse.appendChild(liElement);
      console.log(`renderTvShows ignited`);
    });
  };
}
