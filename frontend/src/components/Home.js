import React from "react";

function Home(props) {
  return (
    <div class="container mt-2">
      <h1>My Friends</h1>
      <table class="table table-bordered table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {props.friends.map((friend) => {
            return (
              <tr key={friend.id}>
                <th scope="row">{friend.id}</th>
                <td>{friend.name}</td>
                <td>{friend.age}</td>
                <td>{friend.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
