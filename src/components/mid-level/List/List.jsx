import "./List.css";
import React from "react";
import Post from "../Post/Post";
import ProfileTXT from "../../low-level/Profile/ProfileTXT";

function List({
  className,
  c_className,
  p_className,
  i_className,
  t_className,
  s_className,
  component,
  data,
  badge,
}) {
  let ulClassName = `il-${component.toLowerCase()}List`;
  const Component = (item) => {
    switch (component) {
      case "Post":
        return (
          <Post
            className={c_className ? c_className : null}
            user={item.user}
            userImg={item.userImg}
            postImg={item.postImg}
            postText={item.postText}
          />
        );
      case "ProfileTXT":
        return (
          <ProfileTXT
            className={c_className ? c_className : null}
            p_className={p_className ? p_className : null}
            i_className={i_className ? i_className : null}
            t_className={t_className ? t_className : null}
            s_className={s_className ? s_className : null}
            badge={badge ? badge : null}
            src={item.src}
            text={item.text}
          />
        );
      default:
        return <p>no valid component detected</p>;
    }
  };
  return (
    <ul
      className={className ? `${ulClassName} ${className}` : `${ulClassName}`}
    >
      {data ? (
        data.map((item) => <li key={item.id}>{Component(item)}</li>)
      ) : (
        <p>no data ...</p>
      )}
    </ul>
  );
}

export default List;
