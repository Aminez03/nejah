import React from "react";

export const VideoList = () => {
  const list = [
    {
      vid: "https://www.youtube.com/embed/PIpSk36YWHQ",
      title:
        "Mood ♫ Top Hit English Love Songs ♫ Acoustic Cover Of Popular TikTok Songs",
    },
    {
      vid: "https://www.youtube.com/embed/8TvgFwZA-7U",
      title:
        "Feeling Good Mix 20 - YA NINA, Zubi, Carla Morrison, Emma Peters [2021]",
    },
    {
      vid: "https://www.youtube.com/embed/QjRO5BKE5_4",
      title: "@Zubi, @anatu - sugar (official video",
    },
  ];
  //   console.log(list)
  return (
    <div>
      {list.map((video) => (
        <div>

        <iframe
          width="250"
          height="150"
          src={video.vid}
          title={video.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          >
        </iframe>
          <h6>{video.title}</h6>
            </div>
      ))}
    </div>
  );
};
