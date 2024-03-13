function match(candidate, job) {
    // is this job a valid match for the candidate?
    console.log(candidate.minSalary );

    return (candidate.minSalary <= job.maxSalary  ||  (  candidate.minSalary - (candidate.minSalary/ 100 * 10)  <= job.maxSalary) ) ? true :console.error(e);

  }
  let candidate1 = { minSalary: 120000 },
  job1 = { maxSalary: 130000 },
  job2 = { maxSalary: 80000 };

  console.log(match(candidate1, job1));
  console.log(match(candidate1, job2));