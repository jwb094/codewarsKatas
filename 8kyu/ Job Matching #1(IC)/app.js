function match(candidate, job) {


    if ( !candidate.minSalary ||  !job.maxSalary) {
              throw new Error("Error");
    } 
        return   candidate.minSalary - (candidate.minSalary/ 100 * 10)  <= job.maxSalary;
  

}