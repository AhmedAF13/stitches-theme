import { useTheme } from "next-themes";
import React, { FC, useEffect, useState } from "react";

interface Props {}

const ThemeToggle: FC<Props> = (props) => {
  const { setTheme, resolvedTheme } = useTheme();

  //   const [mounted, setMounted] = useState(false);
  //   useEffect(() => setMounted(true), []);
  //   if (!mounted) return null;

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === "light" ? "dark" : "light";
    setTheme(targetTheme);
  };

  return <button onClick={toggleTheme}>toggleTheme</button>;
};

export default ThemeToggle;
