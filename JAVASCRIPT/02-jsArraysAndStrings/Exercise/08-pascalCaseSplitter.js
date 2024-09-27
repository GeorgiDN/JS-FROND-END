function pascalCaseSplitter(string) {
    let result = string.match(/[A-Z][a-z]*/g);
    console.log(result.join(", "));
}

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
pascalCaseSplitter("HoldTheDoor");
pascalCaseSplitter("ThisIsSoAnnoyingToDo");
