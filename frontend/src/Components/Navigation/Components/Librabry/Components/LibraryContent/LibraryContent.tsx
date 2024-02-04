import React, { useContext, useEffect, useState } from "react";
import styles from "./LibraryContent.module.scss";
import clsx from "clsx";
import { ListIcon, SearchIcon } from "../../../../../../Assets/Icons/icons";
import { context } from "../../../../../../provider/Provider";

interface LibraryContentProps {}

const LibraryContent: React.FC<LibraryContentProps> = () => {
  const spotify_context = useContext(context);
  const [artistsID, setArtistsID] = useState("");

//   const check = async (param: object) => {
//     await fetch(
//         "https://api.spotify.com/v1/search?q=MTP&type=artist",
//         param
//       )
//         .then((res) => res.json())
//         .then((data) => setArtistsID(data.artists.items[0].id))
//   }

//   const check2 = async (param: object) => {
//     await fetch(
//         `https://api.spotify.com/v1/artists/${artistsID}/albums?include_groups=single`,
//         param
//       )
//         .then((res) => res.json())
//         .then((data) => console.log(data)
//         )
//   }
//   useEffect(() => {
//     var artistParameters = {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + spotify_context.accessToken,
//       },
//     };

//     check(artistParameters)
//     check2(artistParameters)
//   }, []);

  return (
    <>
      <div
      // style={{
      //     height:
      // }}
      >
        <div className={clsx("item", styles.item)}>
          <SearchIcon width="1.2rem" height="1.2rem" className={clsx()} />
          <ListIcon width="1.2rem" height="1.2rem" className={clsx()} />
        </div>
      </div>
    </>
  );
};

export default LibraryContent;
