import React, { useContext, useEffect, useState } from "react";
import styles from "./LibraryContent.module.scss";
import clsx from "clsx";
import axios from "axios";
import { ListIcon, SearchIcon } from "../../../../../../Assets/Icons/icons";
import { context } from "../../../../../../provider/Provider";

interface LibraryContentProps {}

const LibraryContent: React.FC<LibraryContentProps> = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchTracks = async () => {
      const options = {
        method: "GET",
        url: "https://spotify23.p.rapidapi.com/search/",
        params: {
          q: "<REQUIRED>",
          type: "multi",
          offset: "0",
          limit: "10",
          numberOfTopResults: "5",
        },
        headers: {
          "X-RapidAPI-Key":
            "3868ccd1a5msh9d61efe6e01ce3ep119e6ejsn604a1a4eb906",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTracks();
  }, []);

  return (
    <>
      <div>
        <div className={clsx("item", styles.item)}>
          <SearchIcon width="1.2rem" height="1.2rem" className={clsx()} />
          <ListIcon width="1.2rem" height="1.2rem" className={clsx()} />
        </div>
        <div className={clsx(styles.listLibrary)}>
          <div className={clsx(styles.listLibrary_Item)}>
            <div className={clsx(styles.Item_img)}>
              <img src={data.playlists.items[0].data.images.items[0].sources[0].url} alt="" />
              
            </div>
            <div className={clsx(styles.Item_content)}>
              <p className={clsx(styles.Content_Name)}>

              </p>
              <p className={clsx(styles.Content_Author)}>

              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LibraryContent;
