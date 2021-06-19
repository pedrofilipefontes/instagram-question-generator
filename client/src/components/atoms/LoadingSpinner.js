import React from "react";

export default function LoadingSpinner(props) {
  const { isLoading } = props;

  if (isLoading) {
    return (
      <>
        <div className="loadingio-spinner-ellipsis-7bx0yc9t2ep">
          <div className="ldio-2yu5yxxb1ks">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
