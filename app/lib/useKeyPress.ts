import React, { useState, useEffect } from "react";

function useKeyPress(targetKey, handler) {
  const keyHandler = ({ key }) => {
    if (key === targetKey) {
      handler();
    }
  };
  // Add event listeners
  useEffect(() => {
    window.addEventListener("keyup", keyHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keyup", keyHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
}

export default useKeyPress;
