"use client";

export default function Button({ children, size = "md", variant = "solid" }) {
  const base = "font-semibold rounded-lg shadow-lg transition-all duration-300";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  };
  const styles = {
    solid: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-primary text-primary hover:bg-primary/10",
  };

  return (
    <button className={`${base} ${sizes[size]} ${styles[variant]}`}>
      {children}
    </button>
  );
}
