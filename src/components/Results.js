import React from "react";
import { useSelector } from "react-redux"

export default function Results(){
    const searchResults = useSelector((state) => state.results)

    return (
      <div>
        {searchResults?.map((hit, index) => (
          <div key={index}>
            <a target="_blank" rel="noreferrer" href={hit.url}>
              {hit.title}
            </a>
          </div>
        ))}
      </div>
    );
}