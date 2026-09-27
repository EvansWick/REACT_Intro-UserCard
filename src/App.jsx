import styles from "./App.module.css";
import Header from "./components/Header";
import ContentSection from "./components/ContentSection";

import userBanner from "./assets/userBanner.jpg";
import userPhoto from "./assets/userPhoto.jpg";

function App() {
  const user = {
    name: "Ivan",
    lastName: "Wick",
    userNick: "EvansWick",
    userPhotoSrc: userPhoto,
    userBannerSrc: userBanner,
    isVerified: true,
    isOnline: true,
    likes: 10,
    followers: 1000,
    postsCount: 2,
    isLiked: false,
    isMale: true,
  };

  const lightShadowStyle = user.isMale
    ? styles.shadowLightMale
    : styles.shadowLightFemale;
  return (
    <article className={styles.userCard + ` ${lightShadowStyle}`}>
      <Header userBanner={user.userBannerSrc}></Header>
      <ContentSection userData={user}></ContentSection>
    </article>
  );
}

export default App;
