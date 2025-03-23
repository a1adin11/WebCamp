import Header from "../components/header/header";
import OrganizersSection from "../pageBlocks/organizersSection/organizersSection";
import RatingSection from "../pageBlocks/ratingSection/ratingSection";
import SectionOne from "../pageBlocks/sectionOne/sectionOne";
import styles from "./page.module.scss";

const Page = () => {
  return (
    <div className={styles.root}>
      <Header />
      <SectionOne />
      <RatingSection />
      <OrganizersSection />
    </div>
  );
};

export default Page;
