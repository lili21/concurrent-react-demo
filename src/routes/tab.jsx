import { useState } from "react";
import TabButton from "../components/TabButton";
import AboutTab from "../components/AboutTab";
import PostsTab from "../components/PostsTab";
import ContactTab from "../components/ContactTab";

export default function TabContainer() {
  const [tab, setTab] = useState("about");

  function selectTab(nextTab) {
    setTab(nextTab);
  }

  return (
    <>
      <TabButton isActive={tab === "about"} onClick={() => selectTab("about")}>
        About
      </TabButton>
      <TabButton isActive={tab === "posts"} onClick={() => selectTab("posts")}>
        Posts (slow)
      </TabButton>
      <TabButton
        isActive={tab === "contact"}
        onClick={() => selectTab("contact")}
      >
        Contact
      </TabButton>
      <hr />
      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
    </>
  );
}
