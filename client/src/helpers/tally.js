export const tally = (catogeryExp) => {
    let t = 0;
    if (catogeryExp?.length > 0) {
      t = catogeryExp?.map((o, index) => o.map((x) => x.cost)).flat();
      console.log(t);
      let total = 0;
      for (let i = 0; i < t.length; i++) {
        total = total + t[i];
      }
      return total
    }
    return 0
}