import Profile from "./components/Profile";

function App() {
  const users = [
  {
    name: "Leanne Graham",
    role: "Software Engineer",
    avatarUrl: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Ervin Howell",
    role: "Project Manager",
    avatarUrl: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Clementine Bauch",
    role: "UI/UX Designer",
    avatarUrl: "https://i.pravatar.cc/150?img=42",
  },
  {
    name: "Patricia Lebsack",
    role: "QA Engineer",
    avatarUrl: "https://i.pravatar.cc/150?img=10",
  },
  {
    name: "Chelsey Dietrich",
    role: "Business Analyst",
    avatarUrl: "https://i.pravatar.cc/150?img=45",
  },
  {
    name: "Dennis Schulist",
    role: "DevOps Engineer",
    avatarUrl: "https://i.pravatar.cc/150?img=52",
  },
  {
    name: "Kurtis Weissnat",
    role: "Product Owner",
    avatarUrl: "https://i.pravatar.cc/150?img=13",
  },
];


  const listItems = users.map((user, index) =>(
    <Profile
    key={index}
    name={user.name}
    role={user.role}
    avatarUrl={user.avatarUrl}
    />
  ));

  return(
    <>
    <article>
      <h1>User Profiles</h1>
      <ul>{listItems}</ul>
    </article>
    </>
  );
}

export default App;