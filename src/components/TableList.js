import React from "react";
import TableIHeader from "./TableIHeader";
import TableItem from "./TableItem";
const TableList = ({ posts }) => {
  return (
    <>
      <h4 className="text-center">Favourite Programming Language</h4>
      <table className="table table-striped">
        <TableIHeader />
        <tbody>
          {posts.map((post) => (
            <TableItem post={post} key={post.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableList;
