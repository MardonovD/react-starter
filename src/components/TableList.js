import React from "react";
import TableIHeader from "./TableIHeader";
import TableItem from "./TableItem";
const TableList = ({ posts, title }) => {
  return (
    <>
      <h4 className="text-center">{title}</h4>
      <table className="table table-striped">
        <TableIHeader />
        <tbody>
          {posts.map((post, index) => (
            <TableItem number={index + 1} post={post} key={post.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableList;
