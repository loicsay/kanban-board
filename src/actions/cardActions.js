let nextCardId = 17;

export const addCard = () => ({
  type: "EDIT_CARD",
  id: nextCardId++
});
