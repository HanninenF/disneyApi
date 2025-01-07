import { AllTypes } from "./types";
import { baseUrl } from "./main";

export namespace AllFunctions {
  export const setCharacterName = (name: string): string => {
    const trimmedName = name.replace(/\s+/g, "%20");
    return trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1);
  };

  export const getCharacterInfoByName = async (
    firstName: string,
    lastName?: string
  ): Promise<AllTypes.Character> => {
    const characterUrl =
      baseUrl + firstName + (lastName ? "%20" + lastName : ""); //ternär operator

    console.log("characterUrl= inside getCharacterInfoByName", characterUrl);

    const response = await fetch(characterUrl);

    const characterInfo = (await response.json()) as AllTypes.Root;
    console.log(
      "characterInfo.data= inside getCharacterByName",
      characterInfo.data
    );

    return (await getMostFamousCharacter(
      characterInfo.data
    )) as AllTypes.Character;
  };

  export const getMostFamousCharacter = async (
    characters: AllTypes.Character | AllTypes.Character[]
  ): Promise<AllTypes.Character> => {
    if (!Array.isArray(characters)) {
      return characters;
    }
    if (characters.length === 0) {
      throw new Error("no characters available");
    }

    if (characters.length === 1) {
      return characters[0];
    }

    // Prioritera karaktärer baserat på deras attribut
    const sortedCharacters = characters.sort((a, b) => {
      // Prioritera karaktärer som har fler associerade egenskaper (filmer, tv-serier, etc.)
      const aScore =
        (a.films?.length || 0) +
        (a.tvShows?.length || 0) +
        (a.parkAttractions?.length || 0) +
        (a.videoGames?.length || 0);
      const bScore =
        (b.films?.length || 0) +
        (b.tvShows?.length || 0) +
        (b.parkAttractions?.length || 0) +
        (b.videoGames?.length || 0);

      return bScore - aScore; // Sortera så att högre poäng kommer först
    });

    // Returnera den karaktär som rankas högst
    return sortedCharacters[0];
  };

  export const getTvShowsByCharacter = async (
    firstName: string,
    lastName?: string
  ): Promise<string[]> => {
    const characterUrl =
      baseUrl + firstName + (lastName ? "%20" + lastName : ""); //ternär operator

    console.log("characterurl inside getTvShowsByCharacter", characterUrl);
    console.log(
      await AllFunctions.getCharacterInfoByName(
        firstName,
        lastName ? lastName : ""
      )
    );
    const response = await fetch(characterUrl);

    const characterInfo = (await response.json()) as AllTypes.Root;

    console.log("characterInfo inside getTvShowsByCharacter", characterInfo);

    const ourCharacter = await AllFunctions.getMostFamousCharacter(
      characterInfo.data
    );

    return ourCharacter.tvShows;
  };
  export const getMoviesByCharacter = async (
    firstName: string,
    lastName?: string
  ): Promise<string[]> => {
    const characterUrl: string =
      baseUrl + firstName + (lastName ? lastName : "");

    console.log(characterUrl);

    const response = await fetch(characterUrl);
    console.log(characterUrl);
    const rootData = (await response.json()) as AllTypes.Root;

    console.log("rootData= ", rootData);

    console.log("rootData.characterInfo= ", rootData.data);

    const ourCharacter = await AllFunctions.getMostFamousCharacter(
      rootData.data
    );

    return ourCharacter.films;
  };
}
