import { AllFunctions } from "./func";
import { AllDomEl } from "./domElements";
import { AllRenders } from "./renders";
import "./style.scss";

export const baseUrl = "https://api.disneyapi.dev/character?name=";

/* const characterUrl =
  baseUrl +
  AllFunctions.setCharacterName("Mickey") +
  "%20" +
  AllFunctions.setCharacterName("Mouse");

let url = characterUrl;
console.log(url);

//hämta data

console.log(
  await AllFunctions.getCharacterInfoByName(
    AllFunctions.setCharacterName("ariel")
  )
);

console.log(
  await AllFunctions.getTvShowsByCharacter(
    AllFunctions.setCharacterName("Ariel")
  )
); */

AllDomEl.buttonGetCharacter.addEventListener("click", async (e) => {
  e.preventDefault();

  AllDomEl.h2.textContent = "";
  AllDomEl.ulResponse.textContent = "";
  AllDomEl.img.src = "";

  if (AllDomEl.inputGetCharacter.value) {
    const tvShows = await AllFunctions.getTvShowsByCharacter(
      AllFunctions.setCharacterName(AllDomEl.inputGetCharacter.value)
    );
    console.log(tvShows);

    const character = await AllFunctions.getCharacterInfoByName(
      AllFunctions.setCharacterName(AllDomEl.inputGetCharacter.value)
    );

    AllDomEl.h2.textContent = character.name;
    console.log("alldomel", AllDomEl.img);

    AllDomEl.img.src = (await character).imageUrl as string;
    AllDomEl.divResponse.appendChild(AllDomEl.h2);
    AllRenders.renderTvShows(tvShows);

    AllDomEl.divResponse.appendChild(AllDomEl.ulResponse);
  }
});

let moviesFromCharacter: string[] = [];

AllDomEl.moviesButton.addEventListener("click", async (e) => {
  e.preventDefault();
  AllDomEl.ulResponse.textContent = "";
  AllDomEl.h2.textContent = "";
  AllDomEl.img.src = "";

  if (AllDomEl.inputGetCharacter.value) {
    const characterInfo = await AllFunctions.getCharacterInfoByName(
      AllFunctions.setCharacterName(AllDomEl.inputGetCharacter.value)
    );

    AllDomEl.h2.textContent = characterInfo.name;
    AllDomEl.img.src = characterInfo.imageUrl as string;
    AllDomEl.divResponse.appendChild(AllDomEl.h2);

    moviesFromCharacter = await AllFunctions.getMoviesByCharacter(
      AllFunctions.setCharacterName(AllDomEl.inputGetCharacter.value)
    );
    AllRenders.renderTvShows(moviesFromCharacter);
    AllDomEl.divResponse.appendChild(AllDomEl.ulResponse);
  }
});

console.log(
  "movies by character",
  await AllFunctions.getMoviesByCharacter(
    AllFunctions.setCharacterName("mickey")
  )
);
