interface User {
  id: string;
  name: string;
}

interface Job {
  id: string;
  title: string;
}

function getItem<T>(item: T): T {
  return item;
}

const user = getItem<User>({
  id: "U001",
  name: "Roshan"
});

const job = getItem<Job>({
  id: "J001",
  title: "QA Engineer"
});

console.log(user.name);
console.log(job.title);