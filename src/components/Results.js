import React from "react";
import { useSelector } from "react-redux"

export default function Results(){
    const searchResults = useSelector((state) => state.results)

    return (
      <div>
        {searchResults?.map((hit, key) => (
          <div key={key}>
            <ul>
              <a target="_blank" rel="noreferrer" href={hit.url}>
                <li>{hit.title}</li>
              </a>
            </ul>
          </div>
        ))}
      </div>
    );
}