class SmallestIntegerFinder {
    findSmallestInt(args) {
        console.log(args.sort(function(a,b) { return a- b}));
        let ans = args.sort(function(a,b) { return a- b})
        return ans[0];
      }
  }

  let sif = new SmallestIntegerFinder();

console.log(sif.findSmallestInt([78,56,232,12,8]));

