const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ]
    const expexted = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]
    const result = sorting.sortByName(input)

    expect(result).toEqual(expexted)
  });
  
  it("Wrong format data should throw an error", () => {
    const numbers = [1, 1589, 0];
    expect(()=> sortByName(numbers)).toThrow(ReferenceError)
  });

  it("Empty data should throw an error", () => {
    expect(()=> sortByName()).toThrow(ReferenceError)
  });

  it("Equal book titles should not be sorted", () => {
    const input = [
        "Гарри Поттер",
        "Гарри Поттер",
      ]
    const expexted = [
        "Гарри Поттер",
        "Гарри Поттер",
    ]
    const result = sorting.sortByName(input)

    expect(result).toEqual(expexted)
  });
})