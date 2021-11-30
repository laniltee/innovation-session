import faker from 'faker';
import {useState, useTransition} from "react";

const people = [];
for (let i = 0; i < 10000; i++) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const jobTitle = faker.name.jobTitle();
  const searchKey = `${firstName} ${lastName}`;
  people.push({
    firstName,
    lastName,
    jobTitle,
    searchKey
  })
}

const TransitionAPI = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState(people);
  // useTransition
  const [isPending, startTransition] = useTransition();

  const onSearchTextChange = (e) => {
    const value = e.target.value;
    let results = [];
    setSearchText(value);
    if (value === '') {
      results = people;
    } else {
      results = people.filter(person => person.searchKey.includes(value));
    }
    startTransition(() => {
      setSearchResults(results);
      console.log(`startTransition`)
    })
  }

  return (
      <div>
        <h1>List of People</h1>
        <div>
          <input value={searchText} placeholder="Search People" onChange={onSearchTextChange}/>
          <button style={{marginLeft: '10px'}}>Search</button>
        </div>
        <div style={{maxHeight: '85vh', overflowY: 'scroll'}}>
          {searchResults.map((person, index) => (
              <div>
                <p>{index + 1}. {person.firstName} {person.lastName} <strong>({person.jobTitle})</strong>
                </p>
              </div>
          ))}
        </div>
      </div>
  )
}

export default TransitionAPI;
