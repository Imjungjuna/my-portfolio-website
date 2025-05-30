import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function splitText(text: string) {
  if (typeof text === "string") {
    return text.split(",").map((part, index, array) => (
      <span key={index}>
        {part.trim()}
        {index < array.length - 1 && <br />}
      </span>
    ));
  }
}
