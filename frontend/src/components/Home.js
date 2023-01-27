import React from "react";

function Home(props) {
  return (
    <div>
      {props.friends.map((friend) => {
        return (
          <div key={friend.id}>
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        );
      })}
      sss
    </div>
  );
}

export default Home;
