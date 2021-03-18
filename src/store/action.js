export const FilterActionType = {
  ALL_GENRES: `filter/allGenres`,
  COMEDIES: `filter/comedies`,
  CRIME: `filter/crime`,
  DOCUMENTARY: `filter/documentary`,
  DRAMAS: `filter/dramas`,
  HORROR: `filter/horror`,
  KIDS_AND_FAMILY: `filter/kidsAndFamily`,
  ROMANCE: `filter/romance`,
  SCI_FI: `filter/sciFi`,
  THRILLERS: `filter/thrillers`,
};

export const ActionCreator = {
  setFilter: (type) => {
    return {
      type,
    };
  },
};
