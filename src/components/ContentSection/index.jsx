import styles from "./ContentSection.module.css";

function ContentSection({ userData }) {
  const { name, lastName, userNick, userPhotoSrc, isVerified, isOnline } =
    userData;
  return (
    <section className={styles.contentSection}>
      <UserPhoto userPhotoSrc={userPhotoSrc} isOnline={isOnline}></UserPhoto>
      <p className={styles.userName}>{name + " " + lastName}</p>
      <span className={styles.userNick}>{userNick}</span>
      <UserStatistic userData={userData}></UserStatistic>
      <UserActionPanel userData={userData}></UserActionPanel>
    </section>
  );
}










function HeartIcon({ config: { filled, size, color, isLiked } }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isLiked ? color : "none"}
      stroke={color}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
export default ContentSection;

function UserPhoto({ userPhotoSrc, isOnline }) {
  return (
    <div className={styles.userPhotoContainer}>
      <img className={styles.userPhoto} src={userPhotoSrc} alt="userPhoto" />

      {isOnline && (
        <div className={styles.onlineStatusContainer}>
          <div className={styles.onlineStatus}></div>
        </div>
      )}
    </div>
  );
}

function UserStatistic({ userData }) {
  return (
    <div className={styles.fullPanelContainer}>
      <div className={styles.panelItemContainer}>
        {/* first pannel item */}
        <div className={styles.panelItem}>
          <span className={styles.panelItemCategory}>Лайків</span>
          <span className={styles.panelItemCategoryValue}>
            {userData.likes}
          </span>
        </div>
        {/* second pannel item */}
        <div className={styles.panelItem}>
          <span className={styles.panelItemCategory}>Підписників</span>
          <span className={styles.panelItemCategoryValue}>
            {userData.followers}
          </span>
        </div>
        {/* third pannel item */}
        <div className={styles.panelItem}>
          <span className={styles.panelItemCategory}>Постів</span>
          <span className={styles.panelItemCategoryValue}>
            {userData.postsCount}
          </span>
        </div>
      </div>
    </div>
  );
}

function UserActionPanel({ userData }) {
  return (
    <div className={styles.actionPanelConteiner}>
      <button className={styles.subscribeBtn}>Підписатися</button>
      <button className={styles.likeBtn}>
        <HeartIcon
          config={{
            filled: true,
            size: "1rem",
            color: "white",
            isLiked: userData.isLiked,
          }}
        ></HeartIcon>
      </button>
    </div>
  );
}
