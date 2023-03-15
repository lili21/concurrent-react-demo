import { useEffect, useTransition, useState } from "react";
import createStore from "../store";
import TabButton from "../components/TabButton";
import AboutTab from "../components/AboutTab";
import PostsTab from "../components/PostsTab";
import ContactTab from "../components/ContactTab";

const useCountStore = createStore(0);

export default function Tearing() {
  const [count, setCount] = useCountStore();
  const [tab, setTab] = useState("about");
  const [isPending, startTransition] = useTransition();

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  useEffect(() => {
    if (tab !== "posts") {
      const timer = setInterval(() => {
        setCount((c) => c + 1);
      }, 100);
      return () => {
        clearInterval(timer);
      };
    }
  }, [tab]);

  return (
    <div>
      <h1>Count: {count}</h1>
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
      {tab === "about" && <div>About {count}</div>}
      {tab === "posts" && <SlowPosts />}
      {tab === "contact" && <div>Contact {count}</div>}
    </div>
  );
}

function SlowPosts() {
  // Log once. The actual slowdown is inside SlowPost.
  console.log("[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />");

  let items = [];
  for (let i = 0; i < 20; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return <ul className="items">{items}</ul>;
}

function SlowPost({ index }) {
  const [count] = useCountStore();

  let startTime = performance.now();
  while (performance.now() - startTime < 20) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <li className="item">
      Post #{index + 1} {count}
    </li>
  );
}
