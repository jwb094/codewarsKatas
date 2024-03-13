function match(candidate, job) {
    if ( !candidate.minSalary &&  !job.minSalary) {
        
    return false;
    } else{
        return candidate.minSalary <= job.maxSalary  ||  (  candidate.minSalary - (candidate.minSalary/ 100 * 10)  <= job.maxSalary);
    }
    

    /**
     * 
     *     try {
    return candidate.minSalary <= job.maxSalary  ||  (  candidate.minSalary - (candidate.minSalary/ 100 * 10)  <= job.maxSalary); 
} catch (error) {
    throw new error;
}
     */
// try {
//     if ( !candidate.minSalary ||  !job.minSalary) {
//         return false;
//     }  else{
//     return candidate.minSalary <= job.maxSalary  ||  (  candidate.minSalary - (candidate.minSalary/ 100 * 10)  <= job.maxSalary); 
//     }
// } catch (error) {
//      throw error;



 //return (candidate.minSalary <= job.maxSalary  ||  (  candidate.minSalary - (candidate.minSalary/ 100 * 10)  <= job.maxSalary) ) ? true :    throw "false";

    // try {
    //     candidate.minSalary <= job.maxSalary  ||  (  candidate.minSalary - (candidate.minSalary/ 100 * 10)  <= job.maxSalary) 
    //     return true;
    //   } catch (e) {
    //     return e; // TypeError: Can only add numbers
    //   }

}
let candidate1 = { minSalary: 120000 },
job1 = { maxSalary: 130000 },
job2 = { maxSalary: 80000 };


console.log(match(candidate1, job1));
console.log(match(candidate1, job2));